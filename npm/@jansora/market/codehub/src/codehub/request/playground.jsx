import {useEffect, useState} from 'react';
import {client} from "./index";

// Required to let webpack 4 know it needs to copy the wasm file to our assets
// import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";
// import sqlWasm from "sql.js/dist/sql-wasm.js";

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/05 14:25:13
 */

const FormatInitConsole = `
let everything = []
if (console.everything === undefined)
{
    console.everything = true;

    console.defaultLog = console.log.bind(console);
    console.log = function(){
        everything.push({"type":"console.log", "datetime":Date().toLocaleString().split(" ")[4], "value":Array.from(arguments)});
        console.defaultLog.apply(console, arguments);
    }
    console.defaultError = console.error.bind(console);
    console.error = function(){
        everything.push({"type":"console.error", "datetime":Date().toLocaleString().split(" ")[4], "value":Array.from(arguments)});
        console.defaultError.apply(console, arguments);
    }
    console.defaultWarn = console.warn.bind(console);
    console.warn = function(){
        everything.push({"type":"console.warn", "datetime":Date().toLocaleString().split(" ")[4], "value":Array.from(arguments)});
        console.defaultWarn.apply(console, arguments);
    }
    console.defaultDebug = console.debug.bind(console);
    console.debug = function(){
        everything.push({"type":"console.debug", "datetime":Date().toLocaleString().split(" ")[4], "value":Array.from(arguments)});
        console.defaultDebug.apply(console, arguments);
    }
}`
const FormatClearConsole = `
console.everything = undefined
console.log = console.defaultLog
console.error = console.defaultError
console.warn = console.defaultWarn
console.debug = console.defaultDebug
`
const compilerJavascript = (code, language) => {

    try {
      // console.log(eval(code))
        // eslint-disable-next-line
      const ret = new Function(`
          "use strict";
          ${FormatInitConsole}
          ${code}
          ${FormatClearConsole}
          return(everything)
          `)()

      if(ret && ret.length > 0) {

        const res = ret.map(r => `${r.datetime} ${r.value.join("\n")}`).join("\n")
        return {status: true, data: res}
      }
    } catch (e) {

      if (e instanceof SyntaxError) {
        return {status: false, errorDesc: e.message}
      }
      if (e instanceof TypeError) {
        return {status: false, errorDesc: e.message}

      }

    } finally
    {

    }

}
export const Compiler = (code, language) => {

  // const [db, setDb] = useState(null)
  const [result, setResult] = useState({status: undefined, errorDesc: '', data: ''});
  const [loading, setLoading] = useState(false);

  // useEffect( () => {
  //   if(language === "sql" && db == null) {
  //     initSqlJs(
  //       {
  //         locateFile: file => `https://cdn.jansora.com/lib/sql.js/1.5.0/${file}`
  //       }
  //     )
  //       .then(SQL => setDb(new SQL.Database()))
  //       .catch(err => console.error(err) || message.error("init sqlite failed"));
  //   }
  // }, [language, db])

  useEffect(()=> {
    if(loading) {
      if(language === "sql") {

        // if(db) {
        //   console.log("db.exec(code)", db.exec(code))
        //   try {
        //     setResult({status: true, errorDesc: '', data: db.exec(code)})
        //   }
        //   catch (e) {
        //     setResult({status: false, errorDesc: e, data: null})
        //   }
        // }
        setLoading(false)
        return ;
      }
      if(language === "javascript") {
        const result = compilerJavascript(code, language);
        setLoading(false);
        setResult(result)
      } else {
        client.put('playground/code/compiler', {language, code})
            .then(response =>  {
              setResult(response)
            }).catch( e => {
          setResult({status: false, errorDesc: '', data:(e.data && e.data.errorDesc) ? e.data.errorDesc : "未知异常" })

          console.log("eeee", e)
        }).finally(()=> {
          setLoading(false)
        })
      }

    }

  }, [loading, code, language]);



  return [result, loading, setLoading];
};


export const ShareCode = (code, language, name) => {

  const [result, setResult] = useState({status: undefined, errorDesc: '', data: ''});
  const [loading, setLoading] = useState(false);
  useEffect(()=> {
    if(loading) {
        client.put('playground/code/share', {language, code, name, classify: language, enabled: true})
            .then(response =>  {
              setResult(response)
            }).catch( e => {
          setResult({status: false, errorDesc: '', data:(e.data && e.data.errorDesc) ? e.data.errorDesc : "未知异常" })
        }).finally(()=> {
          setLoading(false)
        })
    }
      // eslint-disable-next-line
  }, [loading, code]);


  return [result, loading, setLoading];


};

export const FetchCode = (hash, language) => {

  const [code, setCode] = useState({name: language});
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    console.log("FetchCode...", loading, hash, language)
    if (loading) {
      if(!!hash) {
        client.get(`playground/code/${hash}`)
          .then(response =>  {
            if (response.status) {
              setCode && setCode(response.data)
            }

          }).finally(()=> {
          setLoading(false)
        })
      }
    }

  }, [loading, hash, language]);



  return [code, loading];
};

export const FetchCodes = (args) => {


  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=> {
    if(!loading) {

      client.get(`playground/${args}`)
          .then(response =>  {
            if(response.status) {
              setCodes(response.data.data)
            }
          }).finally(()=> {  setLoading(false)
      })
    }
      // eslint-disable-next-line
  }, [loading]);



  return [codes, setCodes, loading];
};




export const getDefaultLanguageCode = (language) => {

  const hello = `"hello, world!"`;
  if(language === "python") return `print(${hello})`
  if(language === "java") return `import java.util.Collections;

public class Class {
  public static void main(String[] args) {
    System.out.println(Collections.singletonList("hello, world!"));
  }
}
  
  `
  if (language === "go") return `package main

import (
\t"fmt"
)

func main() {
\tfmt.Println("Hello, playground")
}
`
  if(language === "javascript") return `console.log(${hello})`
  if(language === "node") return `console.log(${hello})`

  if(language === "sql") return `DROP TABLE IF EXISTS employees;
CREATE TABLE employees( id          integer,  name    text,
                          designation text,     manager integer,
                          hired_on    date,     salary  integer,
                          commission  float,    dept    integer);

INSERT INTO employees VALUES (1,'JOHNSON','ADMIN',6,'1990-12-17',18000,NULL,4);
INSERT INTO employees VALUES (2,'HARDING','MANAGER',9,'1998-02-02',52000,300,3);
INSERT INTO employees VALUES (3,'TAFT','SALES I',2,'1996-01-02',25000,500,3);
INSERT INTO employees VALUES (4,'HOOVER','SALES I',2,'1990-04-02',27000,NULL,3);
INSERT INTO employees VALUES (5,'LINCOLN','TECH',6,'1994-06-23',22500,1400,4);
INSERT INTO employees VALUES (6,'GARFIELD','MANAGER',9,'1993-05-01',54000,NULL,4);
INSERT INTO employees VALUES (7,'POLK','TECH',6,'1997-09-22',25000,NULL,4);
INSERT INTO employees VALUES (8,'GRANT','ENGINEER',10,'1997-03-30',32000,NULL,2);
INSERT INTO employees VALUES (9,'JACKSON','CEO',NULL,'1990-01-01',75000,NULL,4);
INSERT INTO employees VALUES (10,'FILLMORE','MANAGER',9,'1994-08-09',56000,NULL,2);
INSERT INTO employees VALUES (11,'ADAMS','ENGINEER',10,'1996-03-15',34000,NULL,2);
INSERT INTO employees VALUES (12,'WASHINGTON','ADMIN',6,'1998-04-16',18000,NULL,4);
INSERT INTO employees VALUES (13,'MONROE','ENGINEER',10,'2000-12-03',30000,NULL,2);
INSERT INTO employees VALUES (14,'ROOSEVELT','CPA',9,'1995-10-12',35000,NULL,1);

SELECT designation,COUNT(*) AS nbr, (AVG(salary)) AS avg_salary FROM employees GROUP BY designation ORDER BY avg_salary DESC;
SELECT name,hired_on FROM employees ORDER BY hired_on;`
  return "edit some code here....";
}


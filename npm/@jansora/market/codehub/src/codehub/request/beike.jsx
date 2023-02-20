import {useEffect, useState} from 'react';
import {client} from "./index";
import {stringify} from "qs";

/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/05 14:25:13
 */

export const FetchCities = () => {


  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {

    client.get('beike/dimension/cities')
        .then(setCities)
        .finally(()=> {  setLoading(false)
        })


  }, []);



  return [cities, loading];
};

export const FetchAreas = (cityId) => {


  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setLoading(true)
    client.get(`beike/dimension/areas/${cityId}`)
        .then(setCities)
        .finally(()=> {  setLoading(false)
        })


  }, [cityId]);



  return [cities, loading];
};

export const FetchDistricts = (areaId) => {


  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setLoading(true)
    client.get(`beike/dimension/districts/${areaId}`)
        .then(setDistricts)
        .finally(()=> {  setLoading(false)
        })


  }, [areaId]);



  return [districts, loading];
};

export const FetchAddresses = (districtId) => {


  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setLoading(true)
    client.get(`beike/dimension/addresses/${districtId}`)
        .then(setAddresses)
        .finally(()=> {  setLoading(false)
        })


  }, [districtId]);



  return [addresses, loading];
};

export const FetchHouseCounts = (cityId, areaId, districtId) => {


  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setLoading(true)
    client.get(`beike/count/house/num?${stringify({cityId, areaId, districtId})}`)
        .then(setCount)
        .finally(()=> {  setLoading(false)
        })


  }, [cityId, areaId, districtId]);



  return [count, loading];
};

export const FetchHouseTotalPrices = (cityId, areaId, districtId, addressId) => {


  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setLoading(true)
    client.get(`beike/count/house/price/total?${stringify({cityId, areaId, districtId, addressId})}`)
        .then(setCount)
        .finally(()=> {  setLoading(false)
        })


  }, [cityId, areaId, districtId, addressId]);



  return [count, loading];
};


export const FetchHouseAveragePrices = (cityId, areaId, districtId, addressId) => {


  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setLoading(true)
    client.get(`beike/count/house/price/average?${stringify({cityId, areaId, districtId, addressId})}`)
        .then(setCount)
        .finally(()=> {  setLoading(false)
        })


  }, [cityId, areaId, districtId, addressId]);



  return [count, loading];
};




export const FetchHouseCountTimelines = (cityId, areaId, districtId) => {


  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setLoading(true)
    client.get(`beike/count/house/num/timeline?${stringify({cityId, areaId, districtId})}`)
        .then(setCount)
        .finally(()=> {  setLoading(false)
        })


  }, [cityId, areaId, districtId]);



  return [count, loading];
};

export const FetchHouseTotalPriceTimelines = (cityId, areaId, districtId, addressId) => {


  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setLoading(true)
    client.get(`beike/count/house/price/total/timeline?${stringify({cityId, areaId, districtId, addressId})}`)
        .then(setCount)
        .finally(()=> {  setLoading(false)
        })


  }, [cityId, areaId, districtId, addressId]);



  return [count, loading];
};


export const FetchHouseAveragePriceTimelines = (cityId, areaId, districtId, addressId) => {


  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=> {
    setLoading(true)
    client.get(`beike/count/house/price/average/timeline?${stringify({cityId, areaId, districtId, addressId})}`)
        .then(setCount)
        .finally(()=> {  setLoading(false)
        })


  }, [cityId, areaId, districtId, addressId]);



  return [count, loading];
};
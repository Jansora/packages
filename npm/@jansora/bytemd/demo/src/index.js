import React, {useContext, useState} from 'react'
// import {createRoot, render} from 'react-dom'
import {Editor} from '../../src'
import GlobalStoreProvider from "@jansora/global";
import Mount from "@jansora/global2/lib/mount";
import {render} from "react-dom";
// import {GlobalStore} from "@jansora/global/lib/store/global";
import {GlobalStore} from "@jansora/global2/lib/store/global";

export default function Demo ()  {
  console.log("store", useContext(GlobalStore))
  const [raw, setRaw] = useState('# Operation OS\n' +
      '## deepin 配置阿里源\n' +
      '> `sudo vim /etc/apt/sources.list`\n' +
      '```\n' +
      '#阿里稳定源：\n' +
      'deb [by-hash=force] http://mirrors.aliyun.com/deepin lion main contrib non-free\n' +
      '#阿里不稳定源：\n' +
      'deb [by-hash=force] http://mirrors.aliyun.com/deepin panda main contrib non-free\n' +
      '```\n' +
      '\n' +
      '## Ubuntu\n' +
      'Ubuntu，是一款基于Debian Linux的以桌面应用为主的操作系统，内容涵盖文字处理、电子邮件、软件开发工具和Web服务等，可供用户免费下载、使用和分享。\n' +
      '\n' +
      '下载地址: https://mirrors.aliyun.com/ubuntu/\n' +
      '\n' +
      '相关仓库\n' +
      'Ubuntu安装源（ubuntu-releases）: https://developer.aliyun.com/mirror/ubuntu-releases\n' +
      'Ubuntu ARM源（ubuntu-ports）: https://developer.aliyun.com/mirror/ubuntu-ports\n' +
      'Ubuntu过期源（oldubuntu-releases）: https://developer.aliyun.com/mirror/oldubuntu-releases\n' +
      'Ubuntu其他架构安装镜像（ubuntu-cdimage）： https://developer.aliyun.com/mirror/ubuntu-cdimage\n' +
      '\n' +
      'Ubuntu 22.04 ARM 镜像源\n' +
      '\n' +
      '清华源\n' +
      '\n' +
      '```\n' +
      '# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释\n' +
      'deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy main restricted universe multiverse\n' +
      '# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy main restricted universe multiverse\n' +
      'deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-updates main restricted universe multiverse\n' +
      '# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-updates main restricted universe multiverse\n' +
      'deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-backports main restricted universe multiverse\n' +
      '# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-backports main restricted universe multiverse\n' +
      'deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-security main restricted universe multiverse\n' +
      '# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ jammy-security main restricted universe multiverse\n' +
      '\n' +
      '# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释\n' +
      'deb https://mirrors.aliyun.com/ubuntu-ports/ jammy main restricted universe multiverse\n' +
      '# deb-src https://mirrors.aliyun.com/ubuntu-ports/ jammy main restricted universe multiverse\n' +
      'deb https://mirrors.aliyun.com/ubuntu-ports/ jammy-updates main restricted universe multiverse\n' +
      '# deb-src https://mirrors.aliyun.com/ubuntu-ports/ jammy-updates main restricted universe multiverse\n' +
      'deb https://mirrors.aliyun.com/ubuntu-ports/ jammy-backports main restricted universe multiverse\n' +
      '# deb-src https://mirrors.aliyun.com/ubuntu-ports/ jammy-backports main restricted universe multiverse\n' +
      'deb https://mirrors.aliyun.com/ubuntu-ports/ jammy-security main restricted universe multiverse\n' +
      '# deb-src https://mirrors.aliyun.com/ubuntu-ports/ jammy-security main restricted universe multiverse\n' +
      '```\n' +
      '\n' +
      '## apt 配置代理\n' +
      '`sudo apt-get -o Acquire::http::proxy="socks5h://127.0.0.1:1080/" update`\n' +
      '\n' +
      '# NPM\n' +
      '## npm 配置官方源\n' +
      '`npm config set registry https://registry.npmjs.org/`\n' +
      '## npm 配置淘宝源\n' +
      '`npm set registry https://registry.npm.taobao.org `\n' +
      '\n' +
      '## npm 配置腾讯源\n' +
      '`npm config set registry http://mirrors.cloud.tencent.com/npm/ `\n' +
      '## yarn 配置源\n' +
      '`yarn config set registry https://registry.npmmirror.com/`\n' +
      '`yarn config set registry http://mirrors.cloud.tencent.com/npm/`\n' +
      '## pip\n' +
      '## pip 配置清华源\n' +
      'pypi 镜像每 5 分钟同步一次。\n' +
      '## 临时使用\n' +
      '`pip install -i https://pypi.tuna.tsinghua.edu.cn/simple some-package`\n' +
      '\n' +
      '注意，simple 不能少, 是 https 而不是 http\n' +
      '\n' +
      '## 设为默认\n' +
      '升级 pip 到最新的版本 (>=10.0.0) 后进行配置：\n' +
      '\n' +
      '`pip3 install pip -U`\n' +
      '\n' +
      '`pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple`\n' +
      '\n' +
      '如果您到 pip 默认源的网络连接较差，临时使用本镜像站来升级 pip：\n' +
      '\n' +
      '`pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U`\n' +
      '\n' +
      '\n' +
      '# Github\n' +
      'Github国内加速克隆及下载\n' +
      'fastgit.org\n' +
      'https://doc.fastgit.org/\n' +
      '\n' +
      'gitclone.com\n' +
      'https://gitclone.com/\n' +
      '\n' +
      'gitee\n' +
      'https://gitee.com/mirrors\n' +
      '\n' +
      'cnpmjs.org\n' +
      'https://github.com.cnpmjs.org/\n' +
      '\n' +
      '## 克隆加速\n' +
      '\n' +
      '#原地址\n' +
      'git clone https://github.com/kubernetes/kubernetes.git\n' +
      '\n' +
      '#改为\n' +
      'git clone https://github.com.cnpmjs.org/kubernetes/kubernetes.git\n' +
      '\n' +
      '#或者\n' +
      'git clone https://hub.fastgit.org/kubernetes/kubernetes.git\n' +
      '\n' +
      '#或者\n' +
      'git clone https://gitclone.com/github.com/kubernetes/kubernetes.git\n' +
      '\n' +
      '## release下载加速\n' +
      '\n' +
      '#原地址\n' +
      'wget https://github.com/goharbor/harbor/releases/download/v2.0.2/harbor-offline-installer-v2.0.2.tgz\n' +
      '\n' +
      '#改为\n' +
      'wget https://hub.fastgit.org/goharbor/harbor/releases/download/v2.0.2/harbor-offline-installer-v2.0.2.tgz\n' +
      '\n' +
      '#免替换方法\n' +
      '\n' +
      'git config --global url."https://hub.fastgit.org".insteadOf https://github.com\n' +
      '\n' +
      '#测试\n' +
      'git clone https://github.com/kubernetes/kubernetes.git\n' +
      '\n' +
      '查看git配置信息\n' +
      '\n' +
      'git config --global --list\n' +
      '\n' +
      '取消设置\n' +
      '\n' +
      'git config --global --unset url.https://github.com/.insteadof\n' +
      '\n' +
      '## raw文件下载加速\n' +
      '\n' +
      '#原地址：\n' +
      'wget https://raw.githubusercontent.com/kubernetes/kubernetes/master/README.md\n' +
      '\n' +
      '#替换为\n' +
      'wget https://raw.staticdn.net/kubernetes/kubernetes/master/README.md\n' +
      '\n' +
      '## 提供web界面的github资源加速网站：\n' +
      '\n' +
      'GitHub 文件加速：https://gh.api.99988866.xyz/\n' +
      '\n' +
      'Github仓库加速：https://github.zhlh6.cn/\n' +
      '\n' +
      'Github仓库加速：http://toolwa.com/github/\n' +
      '\n' +
      '# Docker\n' +
      '## 1. 安装／升级Docker客户端\n' +
      '推荐安装1.10.0以上版本的Docker客户端，参考文档 docker-ce\n' +
      '\n' +
      '## 2. 配置镜像加速器\n' +
      '针对Docker客户端版本大于 1.10.0 的用户\n' +
      '\n' +
      '您可以通过修改daemon配置文件`/etc/docker/daemon.json`来使用加速器\n' +
      '```bash\n' +
      'sudo mkdir -p /etc/docker\n' +
      'sudo tee /etc/docker/daemon.json <<-\'EOF\'\n' +
      '{\n' +
      '  "registry-mirrors": ["https://u13zwy2w.mirror.aliyuncs.com"]\n' +
      '}\n' +
      'EOF\n' +
      'sudo systemctl daemon-reload\n' +
      'sudo systemctl restart docker\n' +
      '```\n' +
      '\n' +
      '# Go\n' +
      '```\n' +
      '# 启用 Go Modules 功能\n' +
      'go env -w GO111MODULE=on\n' +
      '\n' +
      '# 配置 GOPROXY 环境变量，以下三选一\n' +
      '\n' +
      '# 1. 七牛 CDN\n' +
      'go env -w  GOPROXY=https://goproxy.cn,direct\n' +
      '\n' +
      '# 2. 阿里云\n' +
      'go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct\n' +
      '\n' +
      '# 3. 官方\n' +
      'go env -w  GOPROXY=https://goproxy.io,direct\n' +
      '\n' +
      '————————————————\n' +
      '原文作者：Summer\n' +
      '转自链接：https://learnku.com/go/wikis/38122\n' +
      '版权声明：著作权归作者所有。商业转载请联系作者获得授权，非商业转载请保留以上作者信息和原文链接。\n' +
      '```');


  return <div>
    <Mount />
    <h1>@jansora/bytemd Demo</h1>
    <Editor
        style={{width: "100%"}}
        value={raw}
        setValue={(v) => {setRaw(v)}}
    />
  </div>

}
// createRoot(document.querySelector('#demo')).render(<GlobalStoreProvider><Demo/></GlobalStoreProvider>);

 render(<GlobalStoreProvider ><Demo/></GlobalStoreProvider>, document.querySelector('#demo'))

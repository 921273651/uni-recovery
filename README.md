##### 1.前后台项目启动失败，试着先npm i

##### 2.小程序的图片，后台和数据库部署在线上

**部署上线的意义**

- 图片转移到服务器

小程序包的大小会影响用户打开速度，过大将无法上传。

- 后台和数据库部署在线上

真机体验时无法调通电脑启的本地服务。

**租服务器并安装宝塔面板**

- 选择Linux系统的服务器

可选腾讯云、阿里云、华为云

- 开放端口供宝塔面板使用

开端口教程，不开不能用：

腾讯云：https://www.bt.cn/bbs/thread-1229-1-1.html

阿里云：https://www.bt.cn/bbs/thread-2897-1-1.html 

华为云：https://www.bt.cn/bbs/thread-3923-1-1.html

- 安装Linux系统的宝塔面板

```cmd
// 一、输入命令接入服务器
$ ssh root@服务器ip
// 二、输入密码
// 三、输入宝塔面板安装指令
$ yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```



**登录进宝塔面板安装软件并开放端口**

- 安装软件

Nginx 1.16.0

MySQL 8.0

Tomcat 7.0.76

- 开放端口

云服务器和宝塔面板两边都得开放

```
3306:mysql默认端口
2020:存放图片的端口
8808:后台服务的端口
```



**配置nginx并将图片放进对应文件（以访问线上图片）**

- 配置nginx

![image-20230214111752069](C:\Users\sinwen\Desktop\milk\uni-recovery\image-20230214111752069.png)

```
listen 2020; //页面的端口
server_name localhost 39.107.241.37; //你服务器的公网ip
index index.html index.htm index.php; //打开的页面
root  /www/server/tomcat/webapps/dist; //项目地址
```

- 放置图片

![image-20230214112133800](C:\Users\sinwen\Desktop\milk\uni-recovery\image-20230214112133800.png)

- 效果

![image-20230214112239163](C:\Users\sinwen\Desktop\milk\uni-recovery\image-20230214112239163.png)

**安装node并持续运行后台服务**

- 安装node

1) 查看服务器系统的位数信息

```
uname -a
```

2) 切换环境到安装目录

这里我们在根目录下新建一个叫做app的文件夹，将Nodejs安装到这个文件夹里

```
cd / # 切换到根目录
mkdir app && cd app # 创建一个叫做app的文件夹并进入到文件夹内
```

3) 命令行下载并安装nodejs

获取对应版本的资源链接 http://nodejs.cn/download/
找到自己需要的Nodejs版本（我这里是Linux, 64位，最新的版面），通过开发者工具获得其资源链接（我这里是：https://npm.taobao.org/mirrors/node/v8.9.3/node-v8.9.3-linux-x64.tar.xz）

```cmd
// 下载nodejs
$ wget 资源链接地址
// 解压资源包
$ tar -xvf 刚下载的压缩包名称
// 重命名解压后的资源包
$ mv 解压后的资源包名 nodejs
```

4) 确认无误

确定nodejs的bin目录下，有[node](https://so.csdn.net/so/search?q=node&spm=1001.2101.3001.7020)和npm两个文件，如果有，那么说明我们前面的步骤都没有问题。（没有的话要么是下载的资源有问题，要么是解压出现问题了）

5) 建立全局链接

```cmd
$ ln -s /app/nodejs/bin/npm /usr/local/bin/
$ ln -s /app/nodejs/bin/node /usr/local/bin/
// 测试安装成功
$ node -v
```

- 持续运行后台服务

1) 将后台代码放进服务器中的webapps文件夹，修改代码里的配置

```js
// app.js
// 端口后改成8808
app.listen(8808);

// db.js
let pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // 改为服务器用户名
  password: 'zhangmyi.99', // 改为服务器密码
  database: 'db_uni_recovery',
  port: 3306,
  connectionLimit: 50, //允许连接数
  multipleStatements: true, //是否允许执行多条sql语句
  timezone: "08:00"
})
```

2) 进服务器终端，查看8808是否被占用，kill占用的进程

![image-20200404135350761](https://imgconvert.csdnimg.cn/aHR0cHM6Ly90dmExLnNpbmFpbWcuY24vbGFyZ2UvMDA4MzFyU1RneTFnZGhveDgzdXIyajMxNmUwOGl3aXcuanBn?x-oss-process=image/format,png)

3) 后台持续运行服务

```cmd
$ nohup node app.js &
$ exit
```



**部署数据库**

添加到数据库

![image-20230214114940488](C:\Users\sinwen\Desktop\milk\uni-recovery\image-20230214114940488.png)

测试后台是否连通数据库

![image-20230214115131613](C:\Users\sinwen\Desktop\milk\uni-recovery\image-20230214115131613.png)


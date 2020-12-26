/*
 * @Date: 2020-01-19 18:25:04
 * @LastEditors: 左太宇
 * @LastEditTime: 2020-12-26 12:30:15
 */
module.exports = {
  privateKey: "", // 本地私钥地址，位置一般在C:/Users/xxx/.ssh/id_rsa，非必填，有私钥则配置
  passphrase: "", // 本地私钥密码，非必填，有私钥则配置
  projectName: "ztyuu.com", // 项目名称
  prod: {
    // 线上环境
    name: "线上环境",
    script: "yarn build && yarn export", // 线上环境打包脚本
    host: "106.54.139.95", // 线上服务器地址
    port: 22, // ssh port，一般默认22
    username: "root", // 登录服务器用户名
    password: "Zuoty110", // 登录服务器密码
    distPath: "dist", // 本地打包dist目录
    webDir: "/www/wwwroot/ztyuu.com/" // 线上环境web目录
  }
  // 再还有多余的环境按照这个格式写即可
};

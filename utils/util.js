//发送ajax请求
//1.封装功能函数
//2.函数内部应该保留固定代码
//3.将动态的数据
import config from "./config"
export default (url,data={},method="GET")=>{
 return new Promise((resolve,reject)=>{
  wx.request({
    url:config.host+url,
    data,
    method,
    success:(res)=>{
        // console.log(res)
        resolve(res.data);
    },
    fail:(err)=>{
        // console.log(err)
        reject(err)
    }
  })
 })

}
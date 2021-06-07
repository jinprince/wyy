// pages/index/index.js
import request from "../../utils/util"
Page({
// http://123.207.32.32:9001/
    /**
     * 页面的初始数据
     */
    data: {
        bannerList:[]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:async function(options){
     let result=await request('/banner',{type:2});
    //  console.log(result)
    this.setData({
        bannerList:result.banners
    })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
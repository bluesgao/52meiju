// pages/home/home.js
let app = getApp();
let http = require('../../utils/http.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotList: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.info("url:", app.globalData.url)
        let hotUrl = app.globalData.url.base + app.globalData.url.comingSoon
        console.info("hotUrl:", hotUrl)

        http.request(hotUrl, this.getData)
    },

    getData(res) {
        console.info("getData hotdata res:", res)
        this.data.hotList = res.subjects
        console.info("getData hotList:", this.data.hotList)

        this.setData({ hotList: this.data.hotList })
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
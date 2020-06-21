//index.js
const app = getApp()
Page({
    data: {
        navbar: ['热门', '最新'],
        currentTab: 0,
    },
    //切换bar
    navbarTap: function (e) {
        this.setData({
            currentTab: e.currentTarget.dataset.idx
        })
        //全局变量
        app.globalData.currentTab = e.currentTarget.dataset.idx;
    },
    onShow() {
        this.setData({
            currentTab: app.globalData.currentTab
        })
    },

    swiperChange: function (e) {
        this.setData({
            currentTab: e.detail.current,
        })
        //全局变量
        app.globalData.currentTab = e.detail.current;
    },
})
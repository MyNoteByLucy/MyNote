//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('--index page onload--')
    this.setData({motto:app.myData.username})
    var that=this
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReady:function(){
    //页面渲染完成
    console.log("--index page onReady--");
  },
  onShow:function(){
    //页面显示
    console.log("--index page onShow--");
  },
  onHide:function(){
    //页面隐藏
    console.log("--index page onHide--");
  },
  onUnload:function(){
    //页面关闭
    console.log("--index page onUnload--");
  },
  itemClick:function(){
    console.log("--index page itemClick--");
    wx.navigateTo({
      url: '../logs/logs',
    })
  }

})

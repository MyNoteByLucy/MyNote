Page({

  /**
   * 页面的初始数据
   */
  data: {
    //text:"这里是Text的内容"
    text:"Text的初始内容",
    btnText:"这里是按钮的内容",
    isTextShow:"true",
    news:['aaa','bbb','ccc']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //页面初始化，options为页面跳转所带来的参数
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //页面渲染完成
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //页面显示
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //页面隐藏
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //页面关闭
  },

  btnClick:function(){
    this.setData({btnText:"按钮被点击过了"})
    var isShow=this.data.isTextShow
    console.log(isShow);
    this.setData({text:"点击了按钮，text内容修改了",isTextShow:!isShow})
  }
})
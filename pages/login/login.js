// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 自定义导航栏返回事件
  onClickLeft() {
    wx.switchTab({
      url:'/pages/home/home'
    })
  },
  // 去注册
  error(){
    wx.navigateTo({
      url: '/pages/error/error',
    })
  },
  // 去登陆
  userlogin(){
    wx.navigateTo({
      url: '/pages/userlogin/userlogin',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
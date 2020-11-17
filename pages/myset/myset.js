// pages/myset/myset.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast.js';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 修改姓名
  myname(){ 
    wx.navigateTo({
      url: '/pages/myname/myname',
    })
  },
  // 修改密码
  mypassword(){
    wx.navigateTo({
      url: '/pages/mypassword/mypassword',
    })
  },
  // 修改手机号
  myphone(){
    wx.navigateTo({
      url: '/pages/myphone/myphone',
    })
  },
  // 退出登录
  quit(){
    Dialog.confirm({
      title: '退出登录',
      message: '确定退出儿医通吗？',
    })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
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
// pages/mynews/mynews.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eyb:'',
    order:'',
    xt:'',
    youhui:'',
  },
  // 获取信息
  getNews(){
    api._post('user/getWeiReadCount?token=' + wx.getStorageSync('token')).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          eyb:res.data.message.eyb,
          order:res.data.message.order,
          xt:res.data.message.xt,
          youhui:res.data.message.youhui,
        })
      }
    })
  },
  // 订单跳转
  orderNews(){
    wx.navigateTo({
      url: '/pages/orderNews/orderNews',
    })
  },
  // 儿医跳转
  eyNews(){
    wx.navigateTo({
      url: '/pages/eyNews/eyNews',
    })
  },
  // 系统消息跳转
  system(){
    wx.navigateTo({
      url: '/pages/system/system',
    })
  },
  // 优惠券消息
  discount(){
    wx.navigateTo({
      url: '/pages/discount/discount',
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
    this.getNews()
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
// pages/mydiscount/mydiscount.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    range:'-1',
    couponList:[],
  },
  // 获取优惠券数据
  getCoupon(){
    var that = this
    wx.request({
      url: 'http://eryitong.zhengzhengh.top/coupon/myCoupon',
      method:"POST",
      header:{
        'content-type':'multipart/form-data; boundary=XXX'
      },
      data:'\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="user_id"' +
      '\r\n' +
      '\r\n' + wx.getStorageSync('user_id') +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="range"' +
      '\r\n' +
      '\r\n' + this.data.range +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="is_all"' +
      '\r\n' +
      '\r\n' + '-1' +
      '\r\n--XXX',
      success:function(res){
        console.log(res)
        if(res.data.error == 0){
          that.setData({
            couponList:res.data.message
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCoupon()
  },
  onChange(event) {
    console.log(event)
    if(event.detail.index == 0){
      this.setData({
        range:'-1',
      })
    }else{
      this.setData({
        range:event.detail.index
      })
    }
    this.getCoupon()
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
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
  goCoinCertificate(){
      wx.navigateTo({
        url: '/pages/coinCertificate/coinCertificate',
      })
  }
})
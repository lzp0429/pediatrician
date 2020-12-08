// pages/mydiscount/mydiscount.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    range:'3',
    couponList:[{name:'图文急诊',number:5,start_time:2020-12-1,end_time:2020-12-15}],
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
  // 获取金额
  money(event){
    console.log(event)
    var money = event.currentTarget.dataset.money
    wx.navigateTo({
      url: '/pages/paymentOrder/paymentOrder?money=' + money,
    })
  },
  goCoinCertificate(){
    wx.navigateTo({
      url: '/pages/coinCertificate/coinCertificate',
    })
  },
  onShow(){
    // this.getCoupon()
  }
})
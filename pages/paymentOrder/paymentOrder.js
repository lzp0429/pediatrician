// pages/paymentOrder/paymentOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  goDeterminePayment(){
    wx.navigateTo({
      url: '/pages/determinePayment/determinePayment',
    })
  }
})
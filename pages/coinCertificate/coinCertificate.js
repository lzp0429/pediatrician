// pages/coinCertificate/coinCertificate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:''
  },
  onChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    this.setData({
      value:event.detail
    })
  },
})
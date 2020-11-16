// pages/myorder/myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    order:0,
    actives:0,
    article:0,
  },
  // tab栏
  onChange(event) {
    console.log(event)
    if(event.detail.index == 0){
      this.setData({
        order:0,
        article:0,
      })
    }else if(event.detail.index == 1){
      this.setData({
        order:1,
        article:0,
      })
    }else if(event.detail.index == 2){
      this.setData({
        order:2,
        article:0,
      })
    }
  },
  // 我的提问tab
  onChanges(event) {
    console.log(event)
    if(event.detail.index == 0){
      this.setData({
        article:0
      })
    }else{
      this.setData({
        article:1
      })
    }
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
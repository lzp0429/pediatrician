// pages/wenFigure/wenFigure.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    commentList:[],
  },
  // 马上问诊
  payment(){
    wx.navigateTo({
      url: '/pages/paymentOrder/paymentOrder',
    })
  },
  // 患者评价
  getComment(){
    api._post('index/doctor_comment?doctor_id=' + 7 +  '&page=' + this.data.page).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          commentList:res.data.message.list
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getComment()
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
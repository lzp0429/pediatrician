// pages/myhealth/myhealth.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myArchive:[],
  },
  // 自定义导航栏返回事件
  onClickLeft() {
    wx.navigateTo({
      url:'/pages/paymentOrder/paymentOrder'
    })
  },
  // 跳转个人详情
  health(event){
    console.log(event)
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/healthdetail/healthdetail?id=' + id,
    })
  },
  // 个人档案
  getArchive(){
    const user_id = wx.getStorageSync('user_id')
    api._get('user/archive_list?user_id=' + user_id).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          myArchive:res.data.message
        })
      }else{
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  addrecord(){
    wx.navigateTo({
      url: '/pages/addrecord/addrecord',
    })
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
    this.getArchive()
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
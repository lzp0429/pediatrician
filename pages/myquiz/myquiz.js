// pages/myquiz/myquiz.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myUser:[],
  },
  // 我的提问tab
  onChanges(event) {
    console.log(event)
    if(event.detail.index == 0){
      this.getMyissue()
    }else{
      this.myLooker()
    }
  },
  // 我的提问之我的问题
  getMyissue(){
    var user_id = wx.getStorageSync('user_id')
    api._get('user/my_illness_area?user_id=' + user_id).then((res)=>{
      console.log(res,"我的提问之我的问题")
      if(res.data.error == 0){
        this.setData({
          myUser:res.data.message
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
  // 我的问题之我的围观
  myLooker(){
    var user_id = wx.getStorageSync('user_id')
    api._get('user/my_illness_onlooker?user_id=' + user_id).then((res)=>{
      console.log(res,"我的问题之我的围观")
      if(res.data.error == 0){
        this.setData({
          myUser:res.data.message
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getMyissue()
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
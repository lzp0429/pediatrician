// pages/myorder/myorder.js
const api = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    order:0,
    actives:0,
    article:0,
    myDoctor:[],
    myUser:[],
    myLooker:[],
    myOrder:[],
  },
  // tab栏
  onChange(event) {
    console.log(event)
    if(event.detail.index == 0){
      this.setData({
        order:0,
        article:0,
      })
      this.getOrder()
    }else if(event.detail.index == 1){
      this.setData({
        order:1,
        article:0,
      })
      if(this.data.article == 0){
        this.getMyissue()
      }else if(this.data.article == 1){
        this.myLooker()
      }
      
    }else if(event.detail.index == 2){
      this.setData({
        order:2,
        article:0,
      })
      this.getMyissue()
    }
  },
  // 我的提问tab
  onChanges(event) {
    console.log(event)
    if(event.detail.index == 0){
      this.setData({
        article:0
      })
      this.getMyissue()
    }else{
      this.setData({
        article:1
      })
      this.myLooker()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  // 我的咨询
  getOrder(){
    var token = wx.getStorageSync('token')
    api._get('user/order_list?token='+token).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          myDoctor:res.data.message
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
  // 我的提问之我的问题
  getMyissue(){
    var token = wx.getStorageSync('token')
    api._get('user/my_illness_area?token=' + token).then((res)=>{
      console.log(res,"我的提问之我的问题")
      if(res.data.error == 0){
        this.setData({
          myOrder:res.data.message
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
    var token = wx.getStorageSync('token')
    api._get('user/my_illness_onlooker?token=' + token).then((res)=>{
      console.log(res,"我的问题之我的围观")
      if(res.data.error == 0){
        this.setData({
          myLooker:res.data.message
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
  // 免费咨询
  myOrder(){
    api._get('user/free_order_list?token=' + token).then((res)=>{
      console.log(res,"免费咨询")
      if(res.data.error == 0){
        this.setData({
          myLooker:res.data.message
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getOrder()
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
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
      this.myOrder()
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
  // 免费咨询详情跳转
  freeDetail(event){
    console.log(event)
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/freeDetail/freeDetail?id=' + id,
    })
  },
   // 删除免费咨询
   onClose(event) {
    var that = this
    console.log(event)
    wx.request({
      url: 'http://eryitong.zhengzhengh.top/user/free_order_delete',
      method:"POST",
      header:{
        'content-type':'multipart/form-data; boundary=XXX'
      },
      data:'\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="token"' +
      '\r\n' +
      '\r\n' + wx.getStorageSync('token') +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="consult_id"' +
      '\r\n' +
      '\r\n' + event.currentTarget.dataset.id +
      '\r\n--XXX' ,
      success:function(res){
        console.log(res)
        if(res.data.error == 0){
          wx.showToast({
            title: res.data.message,
            duration: 2000,
            icon:'none'
          });
          that.myOrder()
        }
      }
    })
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
  // 免费咨询
  myOrder(){
    var token = wx.getStorageSync('token')
    api._get('user/free_order_list?token=' + token).then((res)=>{
      console.log(res,"免费咨询")
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
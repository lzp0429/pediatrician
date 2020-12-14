// pages/chat/chat.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input:'',
  },
  // 输入框
  bindChange(event){
    console.log(event)
    this.setData({
      input: event.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 发送消息
  send(){
    var that = this
    wx.request({
      url: 'https://eryitong.zhengzhengh.top/newuser/new_message_insert',
      method:"POST",
      header:{
        'content-type':'multipart/form-data; boundary=XXX'
      },
      data:'\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="user_id"' +
      '\r\n' +
      '\r\n' + '63876' +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="order_id"' +
      '\r\n' +
      '\r\n' + '458' +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="doctor_id"' +
      '\r\n' +
      '\r\n' + '7' +
      '\r\n--XXX'+
      '\r\nContent-Disposition: form-data; name="direction"' +
      '\r\n' +
      '\r\n' + '2' +
      '\r\n--XXX'+
      '\r\nContent-Disposition: form-data; name="type"' +
      '\r\n' +
      '\r\n' + '1' +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="m_from"' +
      '\r\n' +
      '\r\n' + '4' +
      '\r\n--XXX'+
      '\r\nContent-Disposition: form-data; name="content"' +
      '\r\n' +
      '\r\n' + this.data.input +
      '\r\n--XXX'+
      '\r\nContent-Disposition: form-data; name="imgBase64"' +
      '\r\n' +
      '\r\n' + '' +
      '\r\n--XXX',
      success:function(res){
        console.log(res)
        if(res.data.error == 0){
          that.getNews()
          that.setData({
            input:''
          })
        }
      }
    })
  },
  // 获取消息列表
  getNews(){
    var that = this
    wx.request({
      url: 'https://eryitong.zhengzhengh.top/index/message',
      method:"POST",
      header:{
        'content-type':'multipart/form-data; boundary=XXX'
      },
      data:'\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="user_id"' +
      '\r\n' +
      '\r\n' + '63876' +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="order_id"' +
      '\r\n' +
      '\r\n' + '458' +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="doctor_id"' +
      '\r\n' +
      '\r\n' + '7' +
      '\r\n--XXX',
      success:function(res){
        console.log(res)
        if(res.data.error == 0){
          that.setData({
            news:res.data.message.data
          })
        }
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
    this.getNews()
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
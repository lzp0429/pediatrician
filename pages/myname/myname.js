// pages/myname/myname.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
  },
  // 修改姓名
  nickname(){
    var that = this
    var token =  wx.getStorageSync('token')
    wx.request({
      url: 'https://eryitong.zhengzhengh.top/user/user_modify_nickname',
      method:"POST",
      header:{
        'content-type':'multipart/form-data; boundary=XXX'
      },
      data:'\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="token"' +
      '\r\n' +
      '\r\n' + token +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="nickname"' +
      '\r\n' +
      '\r\n' + this.data.value 
      ,
      success:function(res){
        console.log(res)
        if(res.data.error == 0){
          wx.setStorageSync('nickname', that.data.value )
          wx.navigateTo({
            url: '/pages/myset/myset',
          })
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 1500
          })
        }else{
          
        }
      }
    })
    // api._post('/user/user_modify_nickname',{
    //   token:token,
    //   nickname:this.data.value
    // }).then((res)=>{
    //   console.log(res)
    //   if(res.status == 200 && res.data.error == 0){
    //     wx.navigateTo({
    //       url: '/pages/myset/myset',
    //     })
    //   }
    // })
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
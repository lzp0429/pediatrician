// pages/mypassword/mypassword.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sms:'',
    time:"获取",
    disabled:false,
    phone:'',
    yanzhen:'1234'
  },
  // 获取验证码
  tapLogo(){
    var phone = this.data.phone
    if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(phone))) {
      wx.showToast({
        title: '请输入正确的手机号',
        duration: 2000,
        icon:'none'
      });
    }else{

      if(phone){
        if(this.data.disabled == false){
          var timeNum = 60
          this.setData({
            time: timeNum +'s'
          })
          this.data.Time = setInterval(() => {
            this.setData({
              time: --timeNum + 's'
            })
            if (timeNum <= 0) {
              clearInterval(this.data.Time)
              this.setData({
                time: "重发",
                disabled: false
              })
            }else {
              this.setData({
                disabled: true
              })
            }
          }, 1000)
          api._get('newuser/new_sendsms?phone=' + this.data.phone).then((res)=>{
            console.log(res)
            if(res.data.error == 0){
              wx.showToast({
                title: '发送成功',
                duration: 2000,
                icon:'none'
              });
              this.setData({
                yanzhen:res.data.message
              })
            }else{
              wx.showToast({
                title: res.data.message,
                duration: 2000,
                icon:'none'
              });
            }
          })
  
        }
      }else{
        wx.showToast({
          title: '请输入手机号',
          icon:"none"
        })
      }
    }
  },
  // 下一步
  next(){
    if(!this.data.sms){
      wx.showToast({
        title: '请输入验证码',
        duration: 2000,
        icon:'none'
      });
    }else if(this.data.sms != this.data.yanzhen){
      wx.showToast({
        title: '请输入正确的验证码',
        duration: 2000,
        icon:'none'
      });
    }else{
      wx.navigateTo({
        url: '/pages/changepassword/changepassword',
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
    var phone = wx.getStorageSync('phone')
    this.setData({
      phone:phone
    })
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
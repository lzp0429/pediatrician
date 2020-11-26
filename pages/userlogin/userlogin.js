// pages/userlogin/userlogin.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    phone:'手机号',
    sms:'',
    password:'验证码',
    time:'获取',
    status:'text',
    disabled:false,
    iftime:true,
    ifpassword:false,
    idxs:0,
  },
  onChange(event){
    console.log(event)
    if(event.detail.index == 1){
      this.setData({
        password:'密码（6~18位)',
        value:'',
        sms:'',
        iftime:false,
        status:'password',
        ifpassword:true,
        idxs:1
      })
    }else{
      this.setData({
        password:'验证码',
        value:'',
        sms:'',
        iftime:true,
        status:'text',
        ifpassword:false,
        idxs:0,
        message:'1234',
      })
    }
  },
  // 登录
  Login(){
    if(this.data.idxs == 0){
      var phone = this.data.value
      if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(phone))) {
        wx.showToast({
          title: '请输入正确的手机号',
          duration: 2000,
          icon:'none'
        });
      }else if(!this.data.sms){
        wx.showToast({
          title: '请输入验证码',
          duration: 2000,
          icon:'none'
        });
      }else if(this.data.sms != this.data.message){
        wx.request({
          url: 'http://eryitong.zhengzhengh.top/newuser/new_login',
          method:"POST",
          header:{
            'content-type':'multipart/form-data; boundary=XXX'
          },
          data:'\r\n--XXX' +
          '\r\nContent-Disposition: form-data; name="type"' +
          '\r\n' +
          '\r\n' + '1' +
          '\r\n--XXX' +
          '\r\nContent-Disposition: form-data; name="phone"' +
          '\r\n' +
          '\r\n' + this.data.value +
          '\r\n--XXX' +
          '\r\nContent-Disposition: form-data; name="smscode"' +
          '\r\n' +
          '\r\n' + this.data.sms 
          ,
          success:function(res){
            console.log(res)
            if(res.data.error == 0){
              wx.setStorageSync('token',res.data.message.token)
              wx.setStorageSync('user_id',res.data.message.user_id)
              wx.setStorageSync('nickname',res.data.message.nickname)
              wx.setStorageSync('phone',res.data.message.phone)
              wx.setStorageSync('openid',res.data.message.openid)
              wx.setStorageSync('headimgurl',res.data.message.headimgurl)
              wx.switchTab({
                url:'/pages/home/home'
              })
            }else{
              wx.showToast({
                title: res.data.message,
                duration: 2000,
                icon:'none'
              });
            }
          }
        })

      }
    }else if(this.data.idxs == 1){
      var phone = this.data.value
      if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(phone))) {
        wx.showToast({
          title: '请输入正确的手机号',
          duration: 2000,
          icon:'none'
        });
      }else if(!this.data.sms){
        wx.showToast({
          title: '请输入密码',
          duration: 2000,
          icon:'none'
        });
      }else if(this.data.sms.length < 6 || this.data.sms.length > 18){
        wx.showToast({
          title: '请输入有效的密码长度',
          duration: 2000,
          icon:'none'
        });
      }else{
        wx.request({
          url: 'http://eryitong.zhengzhengh.top/user/app_login',
          method:"POST",
          header:{
            'content-type':'multipart/form-data; boundary=XXX'
          },
          data:'\r\n--XXX' +
          '\r\nContent-Disposition: form-data; name="clientid"' +
          '\r\n' +
          '\r\n' + ' ' +
          '\r\n--XXX' +
          '\r\nContent-Disposition: form-data; name="phone"' +
          '\r\n' +
          '\r\n' + this.data.value +
          '\r\n--XXX' +
          '\r\nContent-Disposition: form-data; name="password"' +
          '\r\n' +
          '\r\n' + this.data.sms 
          ,
          success:function(res){
            console.log(res)
            if(res.data.error == 0){
              wx.setStorageSync('token',res.data.message.token)
              wx.setStorageSync('user_id',res.data.message.user_id)
              wx.setStorageSync('nickname',res.data.message.nickname)
              wx.setStorageSync('phone',res.data.message.phone)
              wx.setStorageSync('openid',res.data.message.openid)
              wx.setStorageSync('headimgurl',res.data.message.headimgurl)
              wx.switchTab({
                url:'/pages/home/home'
              })
            }else{
              wx.showToast({
                title: res.data.message,
                duration: 2000,
                icon:'none'
              });
            }
          }
        })
        
      }
    }
  },
  // 获取验证码
  yanzhenma(){
    
    // console.log(this.data.value)
    var phone = this.data.value
    if (!(/^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/.test(phone))) {
      wx.showToast({
      title: '请输入正确的手机号',
      duration: 2000,
      icon:'none'
      });
    }else{
      // 验证码接口
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
          api._get('newuser/new_sendsms?phone=' + this.data.value).then((res)=>{
            console.log(res)
            if(res.data.error == 0){
              this.setData({
                message:res.data.message
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
  // 协议
  negotiated(){
    wx.navigateTo({
      url: '/pages/protocol/protocol',
    })
  },
  // 忘记密码
  forget(){
    wx.navigateTo({
      url: '/pages/forget/forget',
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
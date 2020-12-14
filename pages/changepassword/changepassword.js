// pages/changepassword/changepassword.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    value:'',
  },
  // 确认
  Login(){
    var phone = wx.getStorageSync('phone')
    if(!this.data.phone || !this.data.value){
      wx.showToast({
        title: '请输入新密码',
        duration: 2000,
        icon:'none'
      });
    }else if(this.data.phone.length < 6 || this.data.value.length < 6 || this.data.value.length > 18 || this.data.phone.length > 18){
      wx.showToast({
        title: '请输入的新密码在有效长度内',
        duration: 2000,
        icon:'none'
      });
    }else if(this.data.phone != this.data.value){
      wx.showToast({
        title: '两次密码不一致',
        duration: 2000,
        icon:'none'
      });
    }else{
      wx.request({
        url: 'https://eryitong.zhengzhengh.top/user/forget_pwd',
        method:"POST",
        header:{
          'content-type':'multipart/form-data; boundary=XXX'
        },
        data:'\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="username"' +
        '\r\n' +
        '\r\n' + phone +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="password"' +
        '\r\n' +
        '\r\n' + this.data.phone ,
        success:function(res){
          console.log(res)
          if(res.data.error == 0){
            wx.showToast({
              title: res.data.message,
              duration: 2000,
              icon:'none'
            });
            wx.navigateTo({
              url: '/pages/myset/myset',
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
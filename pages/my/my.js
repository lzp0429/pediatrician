// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nick_name:'',
    phone:wx.getStorageSync('phone'),
  },

  // 设置
  myset(){
    wx.navigateTo({
      url: '/pages/myset/myset',
    })
  },

  // 联系客服
  service(){
    wx.navigateTo({
      url: '/pages/service/service',
    })
  },
  // 用户协议
  protocol(){
    wx.navigateTo({
      url: '/pages/protocol/protocol',
    })
  },
  // 退款说明
  refund(){
    wx.navigateTo({
      url: '/pages/refund/refund',
    })
  },
  // 我的医生
  mydoctor(){
    wx.navigateTo({
      url: '/pages/mydoctor/mydoctor',
    })
  },
  //消息中心
  mynews(){
    wx.navigateTo({
      url: '/pages/mynews/mynews',
    })
  },
  // 订单管理
  myorder(){
    wx.navigateTo({
      url: '/pages/myorder/myorder',
    })
  },
  // 我的关注
  myattention(){
    wx.navigateTo({
      url: '/pages/myattention/myattention',
    })
  },
  // 我的收藏
  myfavorite(){
    wx.navigateTo({
      url: '/pages/myfavorite/myfavorite',
    })
  },

  // 健康档案
  myhealth(){
    wx.navigateTo({
      url: '/pages/myhealth/myhealth',
    })
  },
  // 优惠券
  mydiscount(){
    wx.navigateTo({
      url: '/pages/mydiscount/mydiscount',
    })
  },

  // 查看本地有没有token
  getToken(){
    // wx.setStorageSync('token','token')
    var token =  wx.getStorageSync('token')
    console.log(token)
    if(!token){
      wx.navigateTo({
        url: '/pages/login/login',
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
    // 每次点进来查看有没有token
    this.getToken()
    var nick_name = wx.getStorageSync('nick_name')
    var phone = wx.getStorageSync('phone')
    this.setData({
      nick_name:nick_name,
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
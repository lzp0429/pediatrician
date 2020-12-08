// pages/freeDetail/freeDetail.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    freeDetail:{},
    imgs:[],
  },
  getDetail(){
    var imgs = this.data.imgs
    api._post('/user/free_order_info?consult_id=' + this.data.id + '&token=' + wx.getStorageSync('token')).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          freeDetail:res.data.message,
        })
        if(res.data.message.img.length > 0){
          res.data.message.img.forEach((item)=>{
            imgs.push({url:item})
          });
          this.setData({
            imgs:imgs
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
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
    this.getDetail()
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
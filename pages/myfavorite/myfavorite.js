// pages/myfavorite/myfavorite.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myLikeL:[],
  },
  // 跳转详情页
  tapDetail(){
    var id = 1
    wx.navigateTo({
      url: '/pages/pediatricianDetail/pediatricianDetail?id=' + id
    })
  },
  // 收藏列表
  getLive(){
    const token = ''
    api._get('user/collect_list?token=' + token).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          myLike:res.data.message
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
    this.getLive()
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
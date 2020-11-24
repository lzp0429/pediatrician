// pages/handpicks/handpicks.js
const api = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_page:1,
    newsList:[],
    ifTrue:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api._get('index/eryijt_list?is_hot=' + '1' + '&page=' + this.data.current_page).then((res)=>{
      console.log(res)
      if(res.statusCode == 200 && res.data.error == 0){
        this.setData({
          newsList : res.data.message
        })
      }
    })
  },
  // 图文精选详情
  goPediatricianDetail(event){
    console.log(event)
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/pediatricianDetail/pediatricianDetail?id=' + id
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

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
      const that = this
      const pageNum = that.data.current_page +1
      api._get('index/eryijt_list?is_hot=' + '1' + '&page=' + this.data.current_page).then((res)=>{
        console.log(res)
        const dateList = that.data.newsList
        if (res.data.error == 0) {
          if(res.data.message.length <= 0){
            this.setData({
              ifTrue:true
            })
          }else {
            res.data.message.forEach(item => {
              dateList.push(item)
            })
          }
        } 
        that.setData({
          newsList: dateList,
          current_page:pageNum
        })
      }).catch(err => {
        console.log(err)
      })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
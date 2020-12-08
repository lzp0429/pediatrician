// pages/system/system.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current_page:1,
    newsList:[],
  },
  // 获取列表
  getNews(){
    api._get('/user/newslists',{
      token:wx.getStorageSync('token'),
      page:this.data.current_page,
      type:1
    }).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          newsList:res.data.message.data
        })
      }
    })
  },
  // 标为已读
  onClose() {
    console.log('aaaaaaa')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getNews()
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const that = this
    const pageNum = that.data.current_page +1
    api._get('/user/newslists',{
      token:wx.getStorageSync('token'),
      page:this.data.current_page,
      type:1
    }).then((res)=>{
      console.log(res)
      const dateList = that.data.newsList
      if (res.data.error == 0) {
        if(res.data.message.data.length <= 0){
          wx.showToast({
            title: '已经到底部了',
            duration: 2000,
            icon:'none'
          });
        }else {
          res.data.message.data.forEach(item => {
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
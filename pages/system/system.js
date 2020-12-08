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
      type:4
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
  onClose(event) {
    var that = this
    console.log(event)
    wx.request({
      url: 'http://eryitong.zhengzhengh.top//user/changeReads',
      method:"POST",
      header:{
        'content-type':'multipart/form-data; boundary=XXX'
      },
      data:'\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="token"' +
      '\r\n' +
      '\r\n' + wx.getStorageSync('token') +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="is_order_news"' +
      '\r\n' +
      '\r\n' + '0' +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="id_str"' +
      '\r\n' +
      '\r\n' + event.currentTarget.dataset.id +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="type"' +
      '\r\n' +
      '\r\n' + '4' +
      '\r\n--XXX',
      success:function(res){
        console.log(res)
        if(res.data.error == 0){
          that.getNews()
        }
      }
    })
    // api._post('/user/changeReads',{
    //   token:wx.getStorageSync('token'),
    //   is_order_news:0,
    //   id_str:event.currentTarget.dataset.id,
    //   type:4
    // }).then((res)=>{
    //   console.log(res)
    // })
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
      type:4
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
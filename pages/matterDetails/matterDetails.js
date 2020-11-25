// pages/matterDetails/matterDetails.js
const api = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (event) {
    console.log(event)
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjYzODczLCJwaG9uZSI6IjEzMTE5MTQwODI2In0=.a0ae0dfc148c6ce6b248d7f150487069f272e5b52a9ca977dbe33cbb35adda1b96e4b8b87a27b92c5d48a9fc70dc39fb0efa0c1a07ac182d8e6da87ef01509143ash14UzqG3eY2gPGEUVz1anZUdM9UqgkHuDRzTrHFqCCrkWvMGnHoe/Iud/BKHGgY0RBWA+NxqO2ragx2g8Tx1l7nRTnrjaROzJOkW8AxJK41U47/l4J+BkwbDOCBXNg77MvtI="
    api._get('index/illness_area_info',{
      token:token ,
      illness_aid:event.id
    }).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          info:res.data.message
        })
      }
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
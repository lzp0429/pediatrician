// pages/announce/announce.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'',
    fileList:[]
  },
  // 文本款
  changtetx(event){
    this.setData({
      text:event.detail.value
    })
  },
  // 上传图片
  afterRead(event) {
    console.log(event)
    var fileList = this.data.fileList
    fileList.push({url:event.detail.file.path})
    this.setData({
      fileList:fileList
    })
  },
  // 删除图片
  deleteImg(event){
    console.log(event)
    var fileList = this.data.fileList
    if(event.detail.file.url){
      fileList.splice(event.detail.index,1)
      this.setData({
        fileList:fileList
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
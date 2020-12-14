// pages/service/service.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList:[
    
    ],
    text:'',
    images:[],
    phone:'',
    imges:[],
  },
  // 上传图片
  afterRead(event) {
    var that = this
    console.log(event)
    var img = event.detail.file.path
    var fileList = this.data.fileList
    var imges = this.data.imges
    wx.getFileSystemManager().readFile({
      filePath: img,// 图片地址 本地or网络
      encoding: "base64",
      success: res => {
        // console.log(res.data)// res.data就是转换完的base64
        var image = 'data:image/jpg;base64,'+res.data
        wx.request({
          url: 'https://eryitong.zhengzhengh.top/newuser/new_imgBase64_upload',
          method:"POST",
          header:{
            'content-type':'multipart/form-data; boundary=XXX'
          },
          data:'\r\n--XXX' +
          '\r\nContent-Disposition: form-data; name="img_base64"' +
          '\r\n' +
          '\r\n' + image +
          '\r\n--XXX' ,
          success:function(res){
            console.log(res)
            if(res.data.error == 0){
              var imgs = res.data.message.src
              fileList.push({url:imgs})
              imges.push(imgs)
              that.setData({
                fileList:fileList,
                imges:imges
              })
              console.log(that.data.fileList,"999999999999999999999")
              console.log(that.data.imges,"999999999999999999999")
            }
          }
        })
      },
      fail: res => {
      }
    })
  },
  // 删除图片
  deleteImg(event){
    console.log(event)
    var fileList = this.data.fileList
    var imges = this.data.imges
    if(event.detail.file.url){
      fileList.splice(event.detail.index,1)
      imges.splice(event.detail.index,1)
      this.setData({
        fileList:fileList,
        imges:imges
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 文本输入款
  changeText(event){
    this.setData({
      text:event.detail.value
    })
  },
  onChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    this.setData({
      phone:event.detail
    })
  },
  // 确定提交
  addrecord(){
    wx.request({
      url: 'https://eryitong.zhengzhengh.top/newuser/new_feedback',
      method:"POST",
      header:{
        'content-type':'multipart/form-data; boundary=XXX'
      },
      data:'\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="phone"' +
      '\r\n' +
      '\r\n' + this.data.phone +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="user_id"' +
      '\r\n' +
      '\r\n' + wx.getStorageSync('user_id') +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="content"' +
      '\r\n' +
      '\r\n' + this.data.text +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="imgarr"' +
      '\r\n' +
      '\r\n' + this.data.imges +
      '\r\n--XXX--',
      success:function(res){
        console.log(res)
        if(res.data.error == 0){
          wx.showToast({
            title: '反馈成功',
            duration: 2000,
            icon:'none'
          });
          wx.switchTab({
            url:'/pages/my/my'
          })
        }
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
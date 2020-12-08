// pages/service/service.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [],
    a: '',
    fileList:[],
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
          url: 'http://eryitong.zhengzhengh.top/newuser/new_imgBase64_upload',
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
  // 输入框
  aaa(a) {
    this.setData({
      a: a.detail.value
    })
  },
  // 提交
  submit(){
    if(!this.data.a){
      wx.showToast({
        title: '请输入需要咨询的内容',
        duration: 2000,
        icon:'none'
      });
    }else{
      // api._post('/newuser/new_free_order',{
      //   token:wx.getStorageSync('token'),
      //   doctor_id:7,
      //   content:this.data.a,
      //   imgstr:this.data.imges
      // }).then((res)=>{
      //   console.log(res)
      // })
      wx.request({
        url: 'http://eryitong.zhengzhengh.top/newuser/new_free_order',
        method:"POST",
        header:{
          'content-type':'multipart/form-data; boundary=XXX'
        },
        data:'\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="token"' +
        '\r\n' +
        '\r\n' + wx.getStorageSync('token') +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="doctor_id"' +
        '\r\n' +
        '\r\n' + '7' +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="content"' +
        '\r\n' +
        '\r\n' + this.data.a + 
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="imgstr"' +
        '\r\n' +
        '\r\n' + this.data.imges +
        '\r\n--XXX',
        success:function(res){
          console.log(res)
          if(res.data.error == 0){
            wx.switchTab({
              url:'/pages/home/home'
            })
            wx.showToast({
              title: '提交成功',
              duration: 2000,
              icon:'none'
            });
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
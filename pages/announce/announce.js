// pages/announce/announce.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'',
    fileList:[],
    illness_class:[
      {class_name:'请选择',class_id:'0'}
    ],
    text_title:'请选择',
    show:false,
    radio: '请选择',
    id:'',
    imges:[],
  },
  // 文本款
  changtetx(event){
    this.setData({
      text:event.detail.value
    })
  },
  // 问题分类弹框
  dlogn(){
    this.setData({
      show:true,
      
    })
  },
  // 问题分类
  illness(){
    api._get('index/illness_class').then((res)=>{
      console.log(res)
      var illness_class = this.data.illness_class
      res.data.message.forEach(item => {
        illness_class.push(item)
      })
      this.setData({
        illness_class:illness_class
      })
    })
  },
  // 问题分类弹框选择
  onChange(event) {
    console.log(event,"1111111111")
    this.setData({
      radio: event.detail,
    });
  },
  onClick(event) {
    console.log(event,"2222222222")
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name,
      text_title:name,
      show:false,
      id:event.currentTarget.dataset.id
    });
  },
  // 跳转优惠券
  syscenter(){
    wx.navigateTo({
      url: '/pages/syscenter/syscenter',
    })
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
    this.illness()
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
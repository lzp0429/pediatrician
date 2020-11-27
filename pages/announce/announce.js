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
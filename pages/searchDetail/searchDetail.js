// pages/searchDetail/searchDetail.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctorList:[],
    value:'',
    type:'',
  },
  // 医生详情
  goFamousDoctors(event){
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/famousDoctors/famousDoctors?id=' + id
    })
  },
  // 根据疾病id查询列表
  getIllness(){
    api._post('/index/search_doctor_f?illness_id=' + this.data.id).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          doctorList:res.data.message
        })
      }
    })
  },
  // 搜索事件
  onClick() {
    if(!this.data.value){
      wx.showToast({
        title: '请输入搜索的内容',
        duration: 2000,
        icon:'none'
      });
    }else{
      api._post('/index/search_doctor?keyword=' + this.data.value).then((res)=>{
        console.log(res)
        if(res.data.error == 0){
          this.setData({
            doctorList:res.data.message
          })
        }
      })
    }
   console.log("88888888888")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id:options.id,
      value:options.name,
      type:options.type
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
    if(this.data.type == 0){
      this.getIllness()
    }else{
      this.onClick()
    }
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
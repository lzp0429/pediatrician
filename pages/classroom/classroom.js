// pages/classroom/classroom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    classes:[
      {id:0,title:'全部'},
      {id:1,title:'日常急救'},
      {id:2,title:'常见疾病'},
      {id:3,title:'辟谣'},
      {id:4,title:'成长发育'}
    ],
    age:[
      {id:0,title:'婴幼儿0-3'},
      {id:1,title:'学前期3-6'},
      {id:2,title:'学龄期6-12'},
      {id:3,title:'学龄期6-12'},
    ],
    illness:[
      {id:0,title:'呼吸道疾病'},
      {id:1,title:'肠道疾病'},
      {id:2,title:'皮肤疾病'},
      {id:3,title:'传染类疾病'},
    ],
    encyclopedia:0,

  },
  aaa(event){
    console.log(event)
  },
  // 跳转详情页
  tapDetail(){
    var id = 1
    wx.navigateTo({
      url: '/pages/pediatricianDetail/pediatricianDetail?id=' + id
    })
  },
  // tab栏
  onChange(event) {
    console.log(event)
    if(event.detail.title == "健康百科"){
      this.setData({
        encyclopedia:1,
      })
    }else{
      this.setData({
        encyclopedia:0,
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
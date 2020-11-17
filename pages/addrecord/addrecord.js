// pages/addrecord/addrecord.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2020/11/16',
    show: false,
    showsex:false,
    columns: ['男','女'],
    sex:'男',
    relation:['其他','自己','父母','子女','爱人'],
    showrelation:false,
    concern:'其他',
    stature:'',
    weight:'',
    blood:'正常',
    pressure:['正常','不正常'],
    showblood:false,
    allergy:'否',
    showallergy:false,
    history:['否','是'],
    surgery:'否',
    showsurgery:false,
    family:'否',
    showfamily:false,
  },
  // 确定提交
  sure(){
    wx.navigateTo({
      url: '/pages/myhealth/myhealth',
    })
  },
  // 是否有家族遗传病
  showfamily(){
    this.setData({ showfamily: true });
  },
  onfamily(){
    this.setData({ showfamily: false });
  },
  gofamily(event){
    this.setData({
      family:event.detail.value,
      showfamily:false
    })
  },
  // 是否做过手术
  showsurgery(){
    this.setData({ showsurgery: true });
  },
  onsurgery(){
    this.setData({ showsurgery: false });
  },
  gosurgery(event){
    this.setData({
      surgery:event.detail.value,
      showsurgery:false
    })
  },
  // 关系
  showrelation(){
    this.setData({ showrelation: true });
  },
  onRelation(){
    this.setData({ showrelation: false });
  },
  goRrelation(event){
    this.setData({
      concern:event.detail.value,
      showrelation:false
    })
  },
  // 血压是否正常
  showblood(){
    this.setData({ showblood: true });
  },
  onBlood(){
    this.setData({ showblood: false });
  },
  goBlood(event){
    this.setData({
      blood:event.detail.value,
      showblood:false
    })
  },
  // 是否有过敏史
  showallergy(){
    this.setData({ showallergy: true });
  },
  onAllergy(){
    this.setData({ showallergy: false });
  },
  goAllergy(event){
    this.setData({
      allergy:event.detail.value,
      showallergy:false
    })
  },
  // 性别
  showPopup() {
    this.setData({ showsex: true });
  },
  // 性别弹出框
  onCloses() {
    this.setData({ showsex: false });
  },
  // 性别取消
  onCancel(){
    this.setData({
      showsex:false,
    })
  },
  // 选择男女
  goChange(event){
    console.log(event)
    this.setData({
      sex:event.detail.value,
      showsex:false
    })
  },
  // 日期
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    console.log(date)
    date = new Date(date);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    console.log(event)
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
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
// pages/home/home.js
const api = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgUrls: [],
    doctorList:[],
    newsList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
    this.getImage()
    this.swiper()
  },
  // 轮播图
  swiper(){
    api._get('index/ad_list?pid=' + '1').then((res)=>{
      console.log(res,"轮播图")
      if(res.data.error == 0){
        this.setData({
          imgUrls:res.data.message
        })
      }
    })
  },
  // 名医推荐
  getData(){
    var that = this
    api._get('/index/doctor_list?is_hot=' + '1').then((res)=>{
      console.log(res)
      if(res.statusCode == 200 && res.data.error == 0){
        this.setData({
          doctorList : res.data.message
        })
      }
    })
  },
  // 图文精选
  getImage(){
    api._get('/index/eryijt_list?is_hot=' + '1' + '&page=' + '1').then((res)=>{
      console.log("图文精选",res)
      if (res.statusCode == 200 && res.data.error == 0) {
        this.setData({
          newsList : res.data.message
        })
      };
    })
  },
  // 搜索
  goHomeSearch(){
    wx.navigateTo({
      url: '/pages/homeSearch/homeSearch'
    })
  },
  // 图文急诊
  goWenFigure(){
    wx.navigateTo({
      url: '/pages/wenFigure/wenFigure'
    })
  },
  // 儿医在线
  goOnline(){
    wx.navigateTo({
      url: '/pages/online/online'
    })
  },
  // f免费咨询
  goFreeConsultation(){
    wx.navigateTo({
      url: '/pages/freeConsultation/freeConsultation'
    })
  },
  // 特色服务更多
  goCharacteristic(){
    wx.navigateTo({
      url: '/pages/characteristic/characteristic'
    })
  },
  // 围孕产期咨询
  goAntenatal(){
    wx.navigateTo({
      url: '/pages/antenatal/antenatal'
    })
  },
  // 心里关怀咨询
  goShowLoving(){
    wx.navigateTo({
      url: '/pages/showLoving/showLoving'
    })
  },
  //发育异常咨询
  goAbnormal(){
    wx.navigateTo({
      url: '/pages/abnormal/abnormal'
    })
  },
  // 名医咨询热榜
  goTopSearch(){
    wx.navigateTo({
      url: '/pages/topSearch/topSearch'
    })
  },
  // 儿医讲堂详情
  goPediatricianDetail(event){
    console.log(event)
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/pediatricianDetail/pediatricianDetail?id=' + id
    })
  },
  // 名医推荐
  goFamousDoctors(event){
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/famousDoctors/famousDoctors?id=' + id
    })
  },
  // 更多图文精选
  goHandpicks(){
    wx.navigateTo({
      url: '/pages/handpicks/handpicks'
    })
  }

})
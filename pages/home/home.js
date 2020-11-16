// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
<<<<<<< HEAD
      'https://fenxiang.fancyopen.com/img/eryitong/images/img/swiper.png',
      'https://fenxiang.fancyopen.com/img/eryitong/images/img/swiper.png',
      'https://fenxiang.fancyopen.com/img/eryitong/images/img/swiper.png',
      'https://fenxiang.fancyopen.com/img/eryitong/images/img/swiper.png',
      'https://fenxiang.fancyopen.com/img/eryitong/images/img/swiper.png',
=======
      '/images/banner/banner1.jpeg',
      '/images/banner/banner2.jpg',
      '/images/banner/banner3.jpg',
      '/images/banner/banner4.jpg',
      '/images/banner/banner5.jpg',
>>>>>>> ab005e5f07d6bc9eb2f76923ca4340851d1950b1
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

    

  },


  onLoad: function (options) {

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
  goPediatricianDetail(){
    wx.navigateTo({
      url: '/pages/pediatricianDetail/pediatricianDetail'
    })
  },
  // 名医推荐
  goFamousDoctors(){
    wx.navigateTo({
      url: '/pages/famousDoctors/famousDoctors'
    })
  },
  // 更多图文精选
  goHandpicks(){
    wx.navigateTo({
      url: '/pages/handpicks/handpicks'
    })
  }

})
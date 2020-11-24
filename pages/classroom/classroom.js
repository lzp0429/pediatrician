// pages/classroom/classroom.js
const api = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    status:0,
    ages:'-1',
    sick:'-1',
    classes:[
      {eyclass_id:0,eyclass_name:'全部'},
    ],
    age:[
      {id:1,title:'婴幼儿0-3'},
      {id:2,title:'学前期3-6'},
      {id:3,title:'学龄期6-12'},
      {id:4,title:'青春期12+'},
    ],
    illness:[
      {id:0,title:'呼吸道疾病'},
      {id:1,title:'肠道疾病'},
      {id:2,title:'皮肤疾病'},
      {id:3,title:'传染类疾病'},
      {id:0,title:'呼吸道疾病'},
      {id:1,title:'肠道疾病'},
      {id:2,title:'皮肤疾病'},
      {id:3,title:'传染类疾病'},
    ],
    encyclopedia:0,
    newsList:[],
    current_page:1,
    eyclass_id:0,
    age_type:'',
    illness_id:'',
    page:1,
    news_list:[],
    imgUrls:[],
    tabIndex:0,
  },
  onLoad: function (options) {
    this.getImage()
    this.getIllness()
    this.swiper()
  },
  // 轮播图
  swiper(){
    api._get('index/ad_list?pid=' + '2').then((res)=>{
      console.log(res,"轮播图")
      if(res.data.error == 0){
        this.setData({
          imgUrls:res.data.message
        })
      }
    })
  },
  // 内容分类
  checked(event){
    console.log(event)
    this.setData({
      status:event.currentTarget.dataset.id,
      eyclass_id:event.currentTarget.dataset.id,
      page :1,
      news_list:[],
    })
    this.Get_newsList()
  },
  // 年龄分段
  ageSection(event){
    console.log(event)
    if(this.data.ages == event.currentTarget.dataset.id){
      this.setData({
        ages:'-1',
        age_type:'',
        page :1,
        news_list:[],
      })
    }else{
      this.setData({
        ages:event.currentTarget.dataset.id,
        age_type:event.currentTarget.dataset.id,
        page :1,
        news_list:[],
      })
    }
    this.Get_newsList()
  },
  // 疾病
  sickness(event){
    console.log(event,'疾病类目标签')
    if(this.data.sick == event.currentTarget.dataset.id){
      this.setData({
        sick:'-1',
        illness_id:'',
        page :1,
        news_list:[],
      })
    }else{
      this.setData({
        sick:event.currentTarget.dataset.id,
        illness_id:event.currentTarget.dataset.id,
        page :1,
        news_list:[],
      })
    }
    this.Get_newsList()
  },
  // 跳转详情页
  tapDetail(event){
    console.log(event)
    var id = event.currentTarget.dataset.id
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
        tabIndex:event.detail.index
      })
      this.getClass()
      this.Get_newsList()
    }else if(event.detail.title == '我的收藏'){
      this.setData({
        encyclopedia:0,
        tabIndex:event.detail.index
      })
      api._get('user/collect_list?token=' + '').then((res)=>{
        console.log(res)
        if(res.data.error == 1){
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 1500
          })
          // wx.navigateTo({
          //   url: '/pages/login/login',
          // })
        }
      })
    }else{
      this.setData({
        encyclopedia:0,
        tabIndex:event.detail.index
      })
    }
  },
  // 推荐
  getImage(){
    api._get('/index/eryijt_list?is_hot=' + '1' + '&page=' + this.data.current_page).then((res)=>{
      console.log("图文精选",res)
      if (res.statusCode == 200 && res.data.error == 0) {
        this.setData({
          newsList : res.data.message
        })
      };
    })
  },
  // 内容分类数据
  getClass(){
    api._get('index/eyclass_list').then((res)=>{
      console.log(res,'内容分类数据')
      if(res.data.error == 0){
        const classes = this.data.classes
        res.data.message.forEach(item => {
          classes.push(item)
        })
        this.setData({
          classes:classes
        })
      }
    })
  },
  // 内容分类点击标签获取数据
  Get_newsList(){
    api._post('index/eryijt_list?type=' + '1' + '&eyclass_id=' + this.data.eyclass_id + '&age_type=' + this.data.age_type + '&illness_id=' + this.data.illness_id + '&is_choice=' + '1' + '&is_hot=' + '1' + '&page=' + this.data.page).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        if(res.data.message.length <= 0){
          wx.showToast({
            title: '暂无数据',
            icon: 'none',
            duration: 1500
          })
          this.setData({
            news_list:[]
          })
        }else{
          this.setData({
            news_list:res.data.message
          })
        }
      }
    })
  },
  // 疾病类目
  getIllness(){
    api._get('index/illness_list').then((res)=>{
      console.log(res,'疾病类目')
      if(res.data.error == 0){
        this.setData({
          illness:res.data.message
        })
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      const that = this
      
      if(this.data.tabIndex == 0){
        const pageNum = that.data.current_page +1
        api._get('index/eryijt_list?is_hot=' + '1' + '&page=' + this.data.current_page).then((res)=>{
            console.log(res)
            const dateList = that.data.newsList
            if (res.data.error == 0) {
              if(res.data.message.length <= 0){
                wx.showToast({
                  title: '已经到底了',
                  icon: 'none',
                  duration: 1500
                })
              }else {
                res.data.message.forEach(item => {
                  dateList.push(item)
                })
              }
            } 
            that.setData({
              newsList: dateList,
              current_page:pageNum
            })
          }).catch(err => {
            console.log(err)
          })
      }else if(this.data.tabIndex == 1){
        const page = that.data.page +1
        api._post('index/eryijt_list?type=' + '1' + '&eyclass_id=' + this.data.eyclass_id + '&age_type=' + this.data.age_type + '&illness_id=' + this.data.illness_id + '&is_choice=' + '1' + '&is_hot=' + '1' + '&page=' + this.data.page).then((res)=>{
          console.log(res)
          const news_list = that.data.news_list
          if(res.data.error == 0){
            if(res.data.message.length <= 0){
              wx.showToast({
                title: '已经到底了',
                icon: 'none',
                duration: 1500
              })
            }else{
              res.data.message.forEach(item => {
                  news_list.push(item)
              })
            }
          }
          that.setData({
            news_list: news_list,
            page :page
          })
        })
        
        
      }
      
  },

  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
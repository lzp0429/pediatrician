
const api = require('../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    show: false,
    tabTow: [
      { name: '已经采纳', id: '1' },
      { name: '尚未采纳', id: '0' }
    ],
    count:1,
    illness_class:[
      {class_name:'全部',class_id:'0'}
    ],
    status:'0',
    current_page:1,
    newList:[],
    ifShow:0
  },
  onLoad(){
    this.illness()
    this.getData()
  },
  // 跳转详情页
  matterDetails(event){
    console.log(event,"8888888888888888")
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/matterDetails/matterDetails?id=' + id,
    })
  },
  // 弹框判断颜色
  onClick(evert){
    console.log(evert)
    if(evert.currentTarget.dataset.id == 0){
      this.setData({
        status:evert.currentTarget.dataset.id,
        show:false,
        active:0,
        newList:[],
      })
    }else if(evert.currentTarget.dataset.id == 6){
      this.setData({
        status:evert.currentTarget.dataset.id,
        show:false,
        active:1,
        newList:[],
      })
    }else if(evert.currentTarget.dataset.id == 7){
      this.setData({
        status:evert.currentTarget.dataset.id,
        show:false,
        active:2,
        newList:[],
      })
    }else{
      this.setData({
        status:evert.currentTarget.dataset.id,
        show:false,
        active:3,
        newList:[],
      })
    }
    this.getData()
  },
  // tab栏数据
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
  // tab栏 判断回应所对应的弹框颜色
  onChange(event) {
    console.log(event)
    if(event.detail.index == 0){
      this.setData({
        status:0,
        newList:[],
      })
    }else if(event.detail.index == 1){
      this.setData({
        status:6,
        newList:[],
      })
    }else if(event.detail.index == 2){
      this.setData({
        status:7,
        newList:[]
      })
    }
    this.getData()
  },
  // 是否采纳
  switchs(e){
    console.log(e)
    let index = e.currentTarget.dataset.index
    this.setData({ 
      count: index,
      newList:[]
     });
    console.log(this.data.count)
    this.getData()
  },
  // 加号点击显示弹框
  bindShow(){
    this.setData({ show: true });
  },
  getUserInfo(event) {
    console.log(event.detail);
  },
  // 弹框消失
  onClose() {
    this.setData({ show: false });
  },

  // 获取数据
  getData(){
    api._get('index/illness_area?class_id=' + this.data.status + '&status=' + this.data.count + '&page=' + this.data.current_page).then((res)=>{
      console.log(res,"数据")
      if(res.data.error == 0){
        if(res.data.message.list.length <= 0){
          this.setData({
            newList:res.data.message.list,
            ifShow:1
          })
          wx.showToast({
            title: '暂无数据',
            icon: 'none',
            duration: 1500
          })
        }else{
          this.setData({
            newList:res.data.message.list,
            ifShow:0
          })
        }
      }
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    const that = this
    const pageNum = that.data.current_page +1
    api._get('index/illness_area?class_id=' + this.data.status + '&status=' + this.data.count + '&page=' + this.data.current_page).then((res)=>{
        console.log(res)
        const dateList = that.data.newList
        if (res.data.error == 0) {
          if(res.data.message.list.length <= 0){
            wx.showToast({
              title: '已经到底了',
              icon: 'none',
              duration: 1500
            })
          }else {
              res.data.message.list.forEach(item => {
              dateList.push(item)
            })
          }
        } 
        that.setData({
           newList: dateList,
          current_page:pageNum
        })
      }).catch(err => {
        console.log(err)
      })  
  },
  goAnnounce(){
    wx.navigateTo({
      url: '/pages/announce/announce',
    })
  }
})
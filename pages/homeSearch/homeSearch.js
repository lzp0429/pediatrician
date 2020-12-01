// pages/homeSearch/homeSearch.js
const api = require('../../utils/util')
Page({

  data: {
    value: '',
    illnessList:[],
  },

  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onSearch() {
    console.log("aaaaaaaaaaa")
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
      var name = this.data.value
      wx.navigateTo({
        url: '/pages/searchDetail/searchDetail?type=' + 1 + '&name=' + name + '&id=' + '',
      })
    }
   console.log("88888888888")
  },
  // 疾病分类
  getillness(){
    api._post('index/illness_list?is_hot=' +1).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          illnessList:res.data.message
        })
      }
    })
  },
  // 疾病分类点击事件
  onIllness(event){
    console.log(event)
    this.setData({
      value:event.currentTarget.dataset.name
    })
    var id = event.currentTarget.dataset.id
    var name = event.currentTarget.dataset.name
    wx.navigateTo({
      url: '/pages/searchDetail/searchDetail?id=' + id + '&name=' + name +'&type=' + 0,
    })
  },
  onShow(){
    this.getillness()
  }


})
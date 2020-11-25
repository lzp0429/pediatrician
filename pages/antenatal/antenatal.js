// pages/antenatal/antenatal.js
const api = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    classify_id:"43",
    doctorList:[],
  },
  onLoad(event){
    this.getData()
  },
  // 名医推荐
  goFamousDoctors(event){
    var id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/famousDoctors/famousDoctors?id=' + id
    })
  },
  // tab栏
  onChange(event) {
    console.log(event)
    if(event.detail.index == 0){
      api._get('index/offices_doctor_list?classify_id=' + '43' + '&offices_id=' + '27' + '&page=' + '1').then((res)=>{
        console.log(res)
        if(res.data.error == 0){
          this.setData({
            doctorList:res.data.message.list,
          })
        }
      })
    }else if(event.detail.index == 1){
      api._get('index/offices_doctor_list?classify_id=' + '43' + '&offices_id=' + '28' + '&page=' + '1').then((res)=>{
        console.log(res)
        if(res.data.error == 0){
          this.setData({
            doctorList:res.data.message.list,
          })
        }
      })
    }else if(event.detail.index == 2){
      api._get('index/offices_doctor_list?classify_id=' + '43' + '&offices_id=' + '29' + '&page=' + '1').then((res)=>{
        console.log(res)
        if(res.data.error == 0){
          this.setData({
            doctorList:res.data.message.list,
          })
        }
      })
    }
  },
  getData(){
    api._get('index/offices_doctor_list?classify_id=' + '43' + '&offices_id=' + '27' + '&page=' + '1').then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          doctorList:res.data.message.list,
        })
      }
    })
  },
})
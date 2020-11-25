// pages/showLoving/showLoving.js
const api = require('../../utils/util.js')
Page({

  data: {
    active: 0,
    classify_id: "45",
    doctorList:[],
  },
  // 医生详情
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
      api._get('index/offices_doctor_list?classify_id=' + '45' + '&offices_id=' + '30' + '&page=' + '1').then((res)=>{
        console.log(res)
        if(res.data.error == 0){
          this.setData({
            doctorList:res.data.message.list,
          })
        }
      })
    }else if(event.detail.index == 1){
      api._get('index/offices_doctor_list?classify_id=' + '45' + '&offices_id=' + '31' + '&page=' + '1').then((res)=>{
        console.log(res)
        if(res.data.error == 0){
          this.setData({
            doctorList:res.data.message.list,
          })
        }
      })
    }else if(event.detail.index == 2){
      api._get('index/offices_doctor_list?classify_id=' + '45' + '&offices_id=' + '32' + '&page=' + '1').then((res)=>{
        console.log(res)
        if(res.data.error == 0){
          this.setData({
            doctorList:res.data.message.list,
          })
        }
      })
    }else if(event.detail.index == 3){
      api._get('index/offices_doctor_list?classify_id=' + '45' + '&offices_id=' + '33' + '&page=' + '1').then((res)=>{
        console.log(res)
        if(res.data.error == 0){
          this.setData({
            doctorList:res.data.message.list,
          })
        }
      })
    }
  },
  onLoad(){
    this.getData()
  },
  getData(){
    api._get('index/offices_doctor_list?classify_id=' + '45' + '&offices_id=' + '30' + '&page=' + '1').then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          doctorList:res.data.message.list,
        })
      }
    })
  },
  
})
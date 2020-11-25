// pages/showLoving/showLoving.js
const api = require('../../utils/util.js')
Page({

  data: {
    active: 0,
    classify_id: "47",
    doctorList:[]
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
  },
  onLoad(){
    this.getData()
  },
  getData(){
    api._get('index/offices_doctor_list?classify_id=' + '47'+ '&page=' + '1').then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          doctorList:res.data.message.list,
        })
      }
    })
  }
})
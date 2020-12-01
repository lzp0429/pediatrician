const api = require('../../utils/util')
Page({
  data: {
    option1: [
      { text: '全部', value: 0 },
    ],
    option2: [
      { text: '全部', value: 0 },
    ],
    value1: 0,
    value2: 0,
    area_id:'0',
    classify_id:'0',
    doctorlist:[]
  },
  onLoad(){
    this.getAdress(),
    this.getClassify(),
    this.getDoctor()
  },
  onSwitch1Change({ detail }) {
    console.log(detail)
    this.setData({
      area_id:detail,
    })
    this.getDoctor()
  },
  // 改变科室所触发
  address({ detail }){
    console.log(detail)
    this.setData({
      classify_id:detail,
    })
  },
  // 地区选择
  getAdress(){
    api._get('index/area_list').then((res)=>{
      console.log(res,'地区')
      var option1 = this.data.option1
      var arr = res.data.message
      arr.forEach(item => {
        item.text = item.label
        option1.push(item)
      })
      this.setData({
        option1:option1
      })
    })
  },
  // 科室
  getClassify(){
    api._get('index/classify_list').then((res)=>{
      console.log(res,"科室")
      var option2 = this.data.option2
      var arr = res.data.message[0].children
      arr.forEach(item => {
        item.text = item.classify_name
        item.value = item.classify_id
        option2.push(item)
      })
      this.setData({
        option2:option2
      })
    })
  },
  // 科室医生
  getDoctor(){
    api._get('index/doctor_list',{
      area_id: this.data.area_id,
      classify_id: this.data.classify_id,
      is_hot: ''
    }).then((res)=>{
      console.log(res)
      if(res.data.error==0){
        this.setData({
          doctorlist:res.data.message
        })
      }
    })
  },
});
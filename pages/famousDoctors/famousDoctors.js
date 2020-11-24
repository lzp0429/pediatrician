const api = require('../../utils/util.js')
Page({
  data: {
    radio: '1',
    value:'',
    evaluateList:[],
    message:{},
    id:'',
    ifFollow:0,
  },
  // 单选框
  onChange(event) {
    this.setData({
      radio: event.detail,  
    });
  },
  // 关注
  follow(){
    api._post('/user/follow_insert?doctor_id=' + this.data.id).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          ifFollow:1
        })
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 1500
        })
      }else{
        wx.showToast({
          title: res.data.message,
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  onClick(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name,
    });
    console.log(this.data.radio)
  },
  // 输入框
  onChange1(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  onLoad(options){
    console.log(options)
    this.setData({
      id:options.id
    })
    var id = options.id
    api._post('/doctor/doctor_info?doctor_id=' + id).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          message:res.data.message
        })
      }
    }).catch((err)=>{
      console.log(err)
    })
  },
});
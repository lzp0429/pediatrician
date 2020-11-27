const api = require('../../utils/util.js')
Page({
  data: {
    radio: '1',
    value:'',
    evaluateList:[],
    message:{},
    id:'',
    ifFollow:0,
    phone:'',
  },
  // 单选框
  onChange(event) {
    this.setData({
      radio: event.detail,  
    });
  },
  // 关注
  follow(){
    var that = this
    var token = wx.getStorageSync('token')
    console.log(token)
    wx.request({
      url: 'http://eryitong.zhengzhengh.top/user/follow_insert',
      method:"POST",
      header:{
        'content-type':'multipart/form-data; boundary=XXX'
      },
      data:'\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="token"' +
      '\r\n' +
      '\r\n' + token +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="doctor_id"' +
      '\r\n' +
      '\r\n' + this.data.id +
      '\r\n--XXX',
      success:function(res){
        console.log(res)
        if(res.data.error == 0){
          
          if(res.data.message == "添加关注成功!"){
            that.setData({
              ifFollow:1
            })
          }else{
            that.setData({
              ifFollow:0
            })
          }
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
      }
    })
    // api._post('/user/follow_insert?doctor_id=' + this.data.id + '&token=' + token).then((res)=>{
    //   console.log(res)
    //   if(res.data.error == 0){
    //     this.setData({
    //       ifFollow:1
    //     })
    //     wx.showToast({
    //       title: res.data.message,
    //       icon: 'none',
    //       duration: 1500
    //     })
    //   }else{
    //     wx.showToast({
    //       title: res.data.message,
    //       icon: 'none',
    //       duration: 1500
    //     })
    //   }
    // })
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
  // 打赏医生
  goReward(){
    console.log('aaaaaaaaaaaaaaaaaaaa')
    wx.navigateTo({
      url: '/pages/RewardPage/RewardPage',
    })
  },
  // 订单支付
  paymentOrder(){
    wx.navigateTo({
      url: '/pages/paymentOrder/paymentOrder',
    })
  },
  onLoad(options){
    console.log(options)
    this.setData({
      id:options.id
    })
    var id = options.id
    
  },
  onShow(){
    var token = wx.getStorageSync('token')
    api._post('/index/doctor_info?doctor_id=' + this.data.id + '&token=' + token).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          message:res.data.message,
          ifFollow:res.data.message.is_follow
        })
        
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
});
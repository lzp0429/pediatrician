// pages/paymentOrder/paymentOrder.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    myArchive:[],
    text_title:'请选择咨询人档案',
    money:'使用优惠劵',
    surplus:'',
  },
  // 跳转创建档案页
  graphicFile(){
    wx.navigateTo({
      url: '/pages/graphicFile/graphicFile',
    })
  },
  // 使用优惠券
  useDiscount(){
    wx.navigateTo({
      url: '/pages/useDiscount/useDiscount',
    })
  },
  // 支付完成后跳转到信息页
  goDeterminePayment(){
    if(this.data.text_title == '请选择咨询人档案'){
      wx.showToast({
        title: '请选择档案~',
        duration: 2000,
        icon:'none'
      });
    }else{
      wx.redirectTo({
        url: '/pages/determinePayment/determinePayment',
      })
    }
  },
  // 点击内容旁边的地方隐藏弹框
  onClose() {
    this.setData({ show: false });
  },
  onLoad(event){
    console.log(event)
    if(event.money){
      this.setData({
        money:'-￥'+ event.money +'.00',
      })
      if(event.money > 9){
        this.setData({
          surplus: 0
        })
      }else{
        this.setData({
          surplus: 9 - event.money
        })
      }
    }else{
      this.setData({
        money:'使用优惠劵',
        surplus: '9'
      })
    }
  },
  // 弹框选择档案人
  onClick(event) {
    console.log(event,"2222222222")
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name,
      text_title:name,
      show:false,
      id:event.currentTarget.dataset.id
    });
  },
  // 获取咨询人档案
  getArchive(){
    const user_id = wx.getStorageSync('user_id')
    api._get('user/archive_list?user_id=' + user_id).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          myArchive:res.data.message
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
  // 问题分类弹框
  dlogn(){
    this.setData({
      show:true,
    })
  },
  onShow(){
    this.getArchive()
  },
})
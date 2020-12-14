// pages/pediatricianDetail/pediatricianDetail.js
var WxParse = require('../../wxParse/wxParse.js');
const api = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    content:'',
    eryijt_id:'',
    type:'',
    is_collect:'',
  },
  // 收藏
  goAnnounce(){
    var that = this
    // api._post('/user/collect_insert',{
    //   eryijt_id:this.data.eryijt_id,
    //   title:this.data.title,
    //   type:this.data.type,
    //   token:wx.getStorageSync('token')
    // }).then((res)=>{
    //   console.log(res)
    // })
    wx.request({
      url: 'https://eryitong.zhengzhengh.top/user/collect_insert',
      method:"POST",
      header:{
        'content-type':'multipart/form-data; boundary=XXX'
      },
      data:'\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="eryijt_id"' +
      '\r\n' +
      '\r\n' + this.data.eryijt_id +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="title"' +
      '\r\n' +
      '\r\n' + this.data.title +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="type"' +
      '\r\n' +
      '\r\n' + this.data.type +
      '\r\n--XXX' +
      '\r\nContent-Disposition: form-data; name="token"' +
      '\r\n' +
      '\r\n' + wx.getStorageSync('token') ,
      success:function(res){
        console.log(res)
        if(res.data.error == 0){
          if(res.data.message == "添加收藏成功～"){
            that.setData({
              is_collect:1
            })
          }else{
            that.setData({
              is_collect:0
            })
          }
          wx.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 1500
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var id = options.id
    this.setData({
      eryijt_id:options.id,
    })
    var that = this
    api._get('/index/eryijt_info?eryijt_id=' + id + '&token=' + wx.getStorageSync('token')).then((res)=>{
      console.log("图文精选详情",res)
      if(res.data.error == 0){
        WxParse.wxParse('content', 'html', res.data.message.content, that, 0);
        this.setData({
          title:res.data.message.title,
          type:res.data.message.type,
          is_collect:res.data.message.is_collect,
          // content:res.data.message.content,
        })
      }
    })
  },
 
 
})
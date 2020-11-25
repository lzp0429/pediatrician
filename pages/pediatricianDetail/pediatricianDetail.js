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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var id = options.id
    var that = this
    api._get('/index/eryijt_info?eryijt_id=' + id).then((res)=>{
      console.log("图文精选详情",res)
      if(res.data.error == 0){
        WxParse.wxParse('content', 'html', res.data.message.content, that, 0);
        this.setData({
          title:res.data.message.title,
          // content:res.data.message.content,
        })
      }
    })
  },
 
 
})
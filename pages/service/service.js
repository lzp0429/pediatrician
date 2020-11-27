// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList:[],
    text:'',
    images:[],
    phone:'',
  },
  // 上传图片
  afterRead(event) {
    console.log(event)
    var fileList = this.data.fileList
    fileList.push({url:event.detail.file.path})
    this.setData({
      fileList:fileList
    })
  },
  // 删除图片
  deleteImg(event){
    console.log(event)
    var fileList = this.data.fileList
    if(event.detail.file.url){
      fileList.splice(event.detail.index,1)
      this.setData({
        fileList:fileList
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 文本输入款
  changeText(event){
    this.setData({
      text:event.detail.value
    })
  },
  onChange(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
    this.setData({
      phone:event.detail
    })
  },
  // 确定提交
  addrecord(){
    // wx.switchTab({
    //   url: '/pages/my/my',
    // })
    var fileList = this.data.fileList
    var images = []
    if(fileList.length >= 0){

      fileList.forEach((item,index)=>{
        wx.getFileSystemManager().readFile({
          filePath: item.url,// 图片地址 本地or网络
          encoding: "base64",
          success: res => {
            // console.log(res.data)// res.data就是转换完的base64
            var img = 'data:image/jpg;base64,'+res.data
            images.push(img)
            console.log(images)
            console.log(this.data.text)
            if(index == fileList.length-1){            
              console.log("222222222222222222222")
              wx.request({
                url: 'http://eryitong.zhengzhengh.top/user/feedback',
                method:"POST",
                header:{
                  'content-type':'multipart/form-data; boundary=XXX'
                },
                // data:{
                //   imgarr:JSON.stringify(images),
                //   content:'11111111111111'
                // },
                data:'\r\n--XXX' +
                '\r\nContent-Disposition: form-data; name="phone"' +
                '\r\n' +
                '\r\n' + this.data.phone +
                '\r\n--XXX' +
                '\r\nContent-Disposition: form-data; name="user_id"' +
                '\r\n' +
                '\r\n' + wx.getStorageSync('user_id') +
                '\r\n--XXX' +
                '\r\nContent-Disposition: form-data; name="content"' +
                '\r\n' +
                '\r\n' + String(this.data.text) +
                '\r\n--XXX' +
                '\r\nContent-Disposition: form-data; name="imgarr"' +
                '\r\n' +
                '\r\n' + JSON.stringify(images) +
                '\r\n--XXX--',
                success:function(res){
                  console.log(res)
                  if(res.data.error == 0){
                    wx.showToast({
                      title: res.data.message,
                      duration: 2000,
                      icon:'none'
                    });
                    wx.switchTab({
                      url:'/pages/my/my'
                    })
                  }
                }
              })
            }
          },
          fail: res => {
          }
        })
      })
    }
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
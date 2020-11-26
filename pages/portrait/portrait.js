Page({
  data: {
    fileList: [],
    avatar:wx.getStorageSync('headimgurl'),
    image:''
  },
  openChooseImg() {
    let self = this
    wx.chooseImage({
      count: 6, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: function(res) {
        console.log(res)
        self.setData({
          avatar:res.tempFilePaths[0]
        })
      }
    });
  },
  // 确定并保存
  sure(){
    var that = this
    var token = wx.getStorageSync('token')
    wx.getFileSystemManager().readFile({
      filePath: this.data.avatar,// 图片地址 本地or网络
      encoding: "base64",
      success: res => {
        // console.log(res.data)// res.data就是转换完的base64
        this.setData({
          image:'data:image/jpg;base64,'+res.data
        })
        
        wx.request({
          url: 'http://eryitong.zhengzhengh.top/user/user_modify_headimg',
          method:"POST",
          header:{
            'content-type':'multipart/form-data; boundary=XXX'
          },
          data:'\r\n--XXX' +
          '\r\nContent-Disposition: form-data; name="imgBase64"' +
          '\r\n' +
          '\r\n' + this.data.image +
          '\r\n--XXX' +
          '\r\nContent-Disposition: form-data; name="token"' +
          '\r\n' +
          '\r\n' + token,
          success:function(res){
            console.log(res)
            if(res.data.error == 0){
              wx.showToast({
                title: res.data.message,
                duration: 2000,
                icon:'none'
              });
              wx.navigateTo({
                url: '/pages/myset/myset',
              })
              wx.setStorageSync('headimgurl',that.data.avatar )
            }
            
          }
        })
      },
      fail: res => {
      }
    })
  }
  
  
});
Page({
  data: {
    radio: '0',
    fileList:[],
    imges:[],
    is_yao:'0',
    illness_con:'',
    solve_con:'',
  },

  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  onChanges(event) {
    this.setData({
      is_yao: event.detail,
    });
  },
// 点击选是否
  onClick(event) {
    console.log(event,"选项")
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name,
    });
  },
  onClick1(event) {
    console.log(event,"选项")
    const { name } = event.currentTarget.dataset;
    this.setData({
      is_yao: name,
    });
  },
  // 病情描述
  illness(event) {
    console.log(event)
    this.setData({
      illness_con: event.detail.value
    })
  },
  particulars(event){
    this.setData({
      solve_con: event.detail.value
    })
  },
  // 上传图片
  afterRead(event) {
    var that = this
    console.log(event)
    var img = event.detail.file.path
    var fileList = this.data.fileList
    var imges = this.data.imges
    wx.getFileSystemManager().readFile({
      filePath: img,// 图片地址 本地or网络
      encoding: "base64",
      success: res => {
        // console.log(res.data)// res.data就是转换完的base64
        var image = 'data:image/jpg;base64,'+res.data
        wx.request({
          url: 'https://eryitong.zhengzhengh.top/newuser/new_imgBase64_upload',
          method:"POST",
          header:{
            'content-type':'multipart/form-data; boundary=XXX'
          },
          data:'\r\n--XXX' +
          '\r\nContent-Disposition: form-data; name="img_base64"' +
          '\r\n' +
          '\r\n' + image +
          '\r\n--XXX' ,
          success:function(res){
            console.log(res)
            if(res.data.error == 0){
              var imgs = res.data.message.src
              fileList.push({url:imgs})
              imges.push(imgs)
              that.setData({
                fileList:fileList,
                imges:imges
              })
              console.log(that.data.fileList,"999999999999999999999")
              console.log(that.data.imges,"999999999999999999999")
            }
          }
        })
      },
      fail: res => {
      }
    })
  },
  // 删除图片
  deleteImg(event){
    console.log(event)
    var fileList = this.data.fileList
    var imges = this.data.imges
    if(event.detail.file.url){
      fileList.splice(event.detail.index,1)
      imges.splice(event.detail.index,1)
      this.setData({
        fileList:fileList,
        imges:imges
      })
    }
  },
  // 跳转聊天  页面
  chat(){
    
    var that = this
    if(this.data.radio == 1 && !this.data.illness_con){
      wx.showToast({
        title: '请填写病情描述',
        duration: 2000,
        icon:'none'
      });
    }else if(this.data.is_yao == 1 && !this.data.solve_con){
      wx.showToast({
        title: '请填写疾病症状的详细信息',
        duration: 2000,
        icon:'none'
      });
    }else{
      wx.request({
        url: 'https://eryitong.zhengzhengh.top/newuser/new_order_casebook',
        method:"POST",
        header:{
          'content-type':'multipart/form-data; boundary=XXX'
        },
        data:'\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="order_id"' +
        '\r\n' +
        '\r\n' + '458' +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="illness_con"' +
        '\r\n' +
        '\r\n' + that.data.illness_con +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="solve_con"' +
        '\r\n' +
        '\r\n' + that.data.solve_con +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="is_visit"' +
        '\r\n' +
        '\r\n' + that.data.radio +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="imgstr"' +
        '\r\n' +
        '\r\n' + that.data.imges +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="imgstr"' +
        '\r\n' +
        '\r\n' + that.data.imges +
        '\r\n--XXX',
        success:function(res){
          console.log(res)
          if(res.data.error == 0){
            wx.navigateTo({
              url: '/pages/chat/chat',
            })
          }
        }
      })
    }
  },
});
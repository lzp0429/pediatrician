// pages/addrecord/addrecord.js
const api = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:"",
    // minDate: new Date(2000, 0, 1).getTime(),
    date: '2020/11/16',
    show: false,
    showsex:false,
    columns: ['男','女'],
    sex:'男',
    relation:['其他','自己','父母','子女','爱人'],
    showrelation:false,
    concern:'其他',
    stature:'',
    weight:'',
    blood:'正常',
    pressure:['正常','不正常'],
    showblood:false,
    allergy:'否',
    showallergy:false,
    history:['否','是'],
    surgery:'否',
    showsurgery:false,
    family:'否',
    showfamily:false,
    sexId:1,
    xy_is_normal:0,
    gm_is_normal:0,
    ss_is_normal:0,
    yc_is_normal:0,
    nexus:0,
    archive_id:'',
  },
  // 确定提交
  sure(){
    if(this.data.sex == '男'){
      this.setData({
        sexId:1
      })
    }else{
      this.setData({
        sexId:2
      })
    }
    if(this.data.blood == '正常'){
      this.setData({
        xy_is_normal:0
      })
    }else{
      this.setData({
        xy_is_normal:1
      })
    }
    if(this.data.allergy == '否'){
      this.setData({
        gm_is_normal:0
      })
    }else{
      this.setData({
        gm_is_normal:1
      })
    }
    if(this.data.surgery == '否'){
      this.setData({
        ss_is_normal:0
      })
    }else{
      this.setData({
        ss_is_normal:1
      })
    }
    if(this.data.family == '否'){
      this.setData({
        yc_is_normal:0
      })
    }else{
      this.setData({
        yc_is_normal:1
      })
    }
    if(this.data.concern == '其他'){
      this.setData({
        nexus:'0',
      })
    }else if(this.data.concern == '自己'){
      this.setData({
        nexus:'1',
      })
    }else if(this.data.concern == '父母'){
      this.setData({
        nexus:'2',
      })
    }else if(this.data.concern == '子女 '){
      this.setData({
        nexus:'3',
      })
    }else if(this.data.concern == '爱人'){
      this.setData({
        nexus:'4',
      })
    }

    if(!this.data.user){
      wx.showToast({
        title: '请输入建档人姓名',
        icon: 'none',
        duration: 1500
      })
    }else if(!this.data.stature){
      wx.showToast({
        title: '请输入建档人身高',
        icon: 'none',
        duration: 1500
      })
    }else if(!this.data.weight){
      wx.showToast({
        title: '请输入建档人体重',
        icon: 'none',
        duration: 1500
      })
    }else{

      wx.request({
        url: 'http://eryitong.zhengzhengh.top/user/archive_modify',
        method:"POST",
        header:{
          'content-type':'multipart/form-data; boundary=XXX'
        },
        data:'\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="name"' +
        '\r\n' +
        '\r\n' + this.data.user +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="archive_id"' +
        '\r\n' +
        '\r\n' + this.data.archive_id +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="sex"' +
        '\r\n' +
        '\r\n' + this.data.sexId +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="age"' +
        '\r\n' +
        '\r\n' + this.data.date +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="height"' +
        '\r\n' +
        '\r\n' + this.data.stature +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="weight"' +
        '\r\n' +
        '\r\n' + this.data.weight +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="xy_is_normal"' +
        '\r\n' +
        '\r\n' + this.data.xy_is_normal +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="gm_is_normal"' +
        '\r\n' +
        '\r\n' + this.data.gm_is_normal +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="ss_is_normal"' +
        '\r\n' +
        '\r\n' + this.data.ss_is_normal +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="yc_is_normal"' +
        '\r\n' +
        '\r\n' + this.data.yc_is_normal +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="nexus"' +
        '\r\n' +
        '\r\n' + this.data.nexus +
        '\r\n--XXX' +
        '\r\nContent-Disposition: form-data; name="user_id"' +
        '\r\n' +
        '\r\n' + wx.getStorageSync('user_id')+
        '\r\n--XXX' ,
        success:function(res){
          console.log(res)
          if(res.data.error == 0){
            wx.navigateTo({
              url: '/pages/myhealth/myhealth',
            })
          }
        }
      })
      
      
    }
    
  },
  // 是否有家族遗传病
  showfamily(){
    this.setData({ showfamily: true });
  },
  onfamily(){
    this.setData({ showfamily: false });
  },
  gofamily(event){
    this.setData({
      family:event.detail.value,
      showfamily:false
    })
  },
  // 是否做过手术
  showsurgery(){
    this.setData({ showsurgery: true });
  },
  onsurgery(){
    this.setData({ showsurgery: false });
  },
  gosurgery(event){
    this.setData({
      surgery:event.detail.value,
      showsurgery:false
    })
  },
  // 关系
  showrelation(){
    this.setData({ showrelation: true });
  },
  onRelation(){
    this.setData({ showrelation: false });
  },
  goRrelation(event){
    this.setData({
      concern:event.detail.value,
      showrelation:false
    })
  },
  // 血压是否正常
  showblood(){
    this.setData({ showblood: true });
  },
  onBlood(){
    this.setData({ showblood: false });
  },
  goBlood(event){
    this.setData({
      blood:event.detail.value,
      showblood:false
    })
  },
  // 是否有过敏史
  showallergy(){
    this.setData({ showallergy: true });
  },
  onAllergy(){
    this.setData({ showallergy: false });
  },
  goAllergy(event){
    this.setData({
      allergy:event.detail.value,
      showallergy:false
    })
  },
  // 性别
  showPopup() {
    this.setData({ showsex: true });
  },
  // 性别弹出框
  onCloses() {
    this.setData({ showsex: false });
  },
  // 性别取消
  onCancel(){
    this.setData({
      showsex:false,
    })
  },
  // 选择男女
  goChange(event){
    console.log(event)
    this.setData({
      sex:event.detail.value,
      showsex:false
    })
  },
  // 日期
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    console.log(date)
    date = new Date(date);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    console.log(event)
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      archive_id:options.id
    })
    api._post('/user/archive_info?archive_id=' + options.id).then((res)=>{
      console.log(res)
      if(res.data.error == 0){
        this.setData({
          user:res.data.message.name,
          date:res.data.message.age,
          stature:res.data.message.height,
          weight:res.data.message.weight,
        })
        if(res.data.message.nexus == '0'){
          this.setData({
            concern:'其他'
          })
        }else if(res.data.message.nexus == '1'){
          this.setData({
            concern:'自己'
          })
        }else if(res.data.message.nexus == '2'){
          this.setData({
            concern:'父母'
          })
        }else if(res.data.message.nexus == '3'){
          this.setData({
            concern:'子女'
          })
        }else if(res.data.message.nexus == '4'){
          this.setData({
            concern:'爱人'
          })
        }
        if(res.data.message.sex == '1'){
          this.setData({
            sex:'男'
          })
        }else if(res.data.message.sex == '2'){
          this.setData({
            sex:'女'
          })
        }
        if(res.data.message.xy_is_normal == '0'){
          this.setData({
            blood:'正常'
          })
        }else if(res.data.message.xy_is_normal == '1'){
          this.setData({
            blood:'不正常'
          })
        }
        if(res.data.message.gm_is_normal == '0'){
          this.setData({
            allergy:'否'
          })
        }else if(res.data.message.gm_is_normal == '1'){
          this.setData({
            allergy:'是'
          })
        }
        if(res.data.message.ss_is_normal == '0'){
          this.setData({
            surgery:'否'
          })
        }else if(res.data.message.ss_is_normal == '1'){
          this.setData({
            surgery:'是'
          })
        }
        if(res.data.message.yc_is_normal == '0'){
          this.setData({
            family:'否'
          })
        }else if(res.data.message.yc_is_normal == '1'){
          this.setData({
            family:'是'
          })
        }
      }
    })
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
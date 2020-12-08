// pages/RewardPage/RewardPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:'',
    money:[
      {number:'5元',title:'一点心意',id:0},
      {number:'10元',title:'白衣天使',id:1},
      {number:'20元',title:'医德高尚',id:2},
      {number:'50元',title:'医德双馨',id:3},
      {number:'其它',title:'妙手仁心',id:4},
    ],
    userName:"",
    num:'0',
    show:false,
  },

  aaa(a) {
    console.log(a)
    this.setData({
      a: a.detail.value
    })
  },
  // 点击获取多少钱
  onMoney(event){
    console.log(event)
    if(event.currentTarget.dataset.id == 4){
      this.setData({ 
        show: true,
        userName:'',
      });
    }else{
      this.setData({
        num:event.currentTarget.dataset.id
      })
    }
  },
  // 弹框
  sure(event) {
    if((/(^[0-9]*$)/.test(this.data.userName))){
      var money = this.data.money
      money[4].number = this.data.userName + '元'
      this.setData({
        num:4,
        money:money
      })
    }
  },
  onClose() {
    this.setData({ show: false });
  },
})
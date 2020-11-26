// pages/RewardPage/RewardPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:''
  },

  aaa(a) {
    console.log(a)
    this.setData({
      a: a.detail.value
    })
  },
})
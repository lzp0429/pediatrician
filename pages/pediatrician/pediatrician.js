
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    show: false,
    tabTow: [{ name: '已经采纳', id: '1' }, { name: '尚未采纳', id: '2' }],
    count:0
  },

  // tab栏
  onChange(event) {
    console.log(event)
  },
  switchs(e){
    console.log(e)
    let index = e.currentTarget.dataset.index
    
    this.setData({ count: index });
    console.log(this.data.count)
  },
  

  bindShow(){
    console.log('aaaa',this.data.show)
    this.setData({ show: true });
  },
  getUserInfo(event) {
    console.log(event.detail);
  },

  onClose() {
    this.setData({ show: false });
  },
})
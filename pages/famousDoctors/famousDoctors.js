Page({
  data: {
    radio: '1',
    value:'',
    evaluateList:[{}]
  },
  // 单选框
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },

  onClick(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name,
    });
    console.log(this.data.radio)
  },
  // 输入框
  onChange1(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
});
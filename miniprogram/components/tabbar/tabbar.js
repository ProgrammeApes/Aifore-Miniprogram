// components/tabbar/tabbar.js
Component({
  properties: {
    theme: Object,
    list: Array,
    idx: {
      type: Number,
      value: 0
    }
  },
  data: {
    isIpx: false,
  },
  ready() {
    this.getSysInfo()
  },
  methods: {
    // 获取系统信息
    getSysInfo() {
      wx.getSystemInfo({
        success: res => {
          const model = res.model.substring(0, res.model.indexOf("X")) + "X";
          this.setData({ isIpx: model == 'iPhone X' }) // 判断是否为iPhoneX 默认为值false，iPhoneX 值为true
        }
      })
    },
    itemTap(e) {
      const { index, item } = e.currentTarget.dataset
      wx.redirectTo({
        url: `/${item.pagePath}`,
      })
    }
  }
})

import tabbarData from '../../componentsData/tabbar.js'
const app = getApp()
Page({
  data: {
    showPoup: true
  },
  handlePoup () {
    let that = this
    let showPoup = !this.data.showPoup
    that.setData({
      showPoup
    })
  },
  onLoad: function (options) {},
  onReady: function () {
    const o = Object.assign(this.data, tabbarData)
    this.setData(o)
    this.setData({
      isIpx: app.isIpx
    })
  },
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
})
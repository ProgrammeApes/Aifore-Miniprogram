// pages/vip/vip.js
import tabbarData from '../../componentsData/tabbar.js'
const app = getApp()
Page({
  data: {
    canUsePoint: 0,
    point: 0,
    couponNum: 0,
    downList: ['会员权益', '积分使用规则', '用户条款', '隐私权政策']
  },
  onLoad: function (options) {
    const o = Object.assign(this.data, tabbarData)
    this.setData(o)
    this.setData({
      isIpx: app.isIpx
    })
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {}
})
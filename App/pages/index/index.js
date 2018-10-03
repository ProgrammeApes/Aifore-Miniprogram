//index.js
import tabbarData from '../../componentsData/tabbar.js'
const app = getApp()
Page({
  data: {
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    imgList: [
      '../../static/img/swiper.png'
    ]
  },
  onLoad: function () {
    const o = Object.assign(this.data, tabbarData)
    this.setData(o)
    this.setData({
      isIpx: app.isIpx
    })
  },
  onShow: function () {
  }
})

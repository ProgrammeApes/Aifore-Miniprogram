// pages/order/order.js
import tabbarData from '../../componentsData/tabbar.js'
const app = getApp()
Page({
  data: {
      aCount:0,
      aCost:0,
      currentTab:0,
      array: [
          {
               name:"新品推荐",
               icon:'../../static/img/order/new-icon.png',
               prod: ['红豆红茶','绿茶','红豆红茶','绿茶'],
               cupImage:['../../static/img/order/cup.png','../../static/img/order/cup.png','../../static/img/order/cup.png','../../static/img/order/cup.png'],
               s$:[12,10,12,10],
               b$:[14,12,14,12],
               sNum:[0,0,0,0],
               bNum:[0,0,0,0],
          },
          {
               name:'健康果茶',
               icon:'../../static/img/order/jkgc.png',
               prod: ['黑糖鲜奶','aifore'],
               cupImage:['../../static/img/order/cup.png','../../static/img/order/cup.png','../../static/img/order/cup.png','../../static/img/order/cup.png'],
               s$:[12,10],
               b$:[15,13],
               sNum:[0,0],
               bNum:[0,0]
          },
          {
              name:'原叶奶茶',
              icon:'../../static/img/order/yync.png',
              prod: [],
          },
          {
              name:'养生特饮',
              icon:'../../static/img/order/ysty.png',
              prod: [],
          },
          {
              name:'极品奶盖',
              icon:'../../static/img/order/jpng.png',
              prod: [],

          },
          ]
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
  onShareAppMessage: function () {},
  bigMin: function (e) {
      if(this.data.array[e.currentTarget.dataset.id].bNum[e.currentTarget.dataset.idx] > 0){
          this.data.array[e.currentTarget.dataset.id].bNum[e.currentTarget.dataset.idx]--;
          this.data.aCost -=this.data.array[e.currentTarget.dataset.id].b$[e.currentTarget.dataset.idx];
          this.data.aCount--;
      }
      this.setData({
          array:this.data.array,
          aCount:this.data.aCount,
          aCost:this.data.aCost,
      })
  },
  bigAdd: function (e) {
      this.data.array[e.currentTarget.dataset.id].bNum[e.currentTarget.dataset.idx]++;
      this.data.aCost +=this.data.array[e.currentTarget.dataset.id].b$[e.currentTarget.dataset.idx];
      this.data.aCount++;
        this.setData({
            array:this.data.array,
            aCount:this.data.aCount,
            aCost:this.data.aCost,

        })
  },
  smallMin: function (e) {
        if(this.data.array[e.currentTarget.dataset.id].sNum[e.currentTarget.dataset.idx] > 0){
            this.data.array[e.currentTarget.dataset.id].sNum[e.currentTarget.dataset.idx]--;
            this.data.aCost -=this.data.array[e.currentTarget.dataset.id].s$[e.currentTarget.dataset.idx];
            this.data.aCount--;
        }
        this.setData({
            array:this.data.array,
            aCount:this.data.aCount,
            aCost:this.data.aCost,
        })
  },
  smallAdd: function (e) {
        this.data.array[e.currentTarget.dataset.id].sNum[e.currentTarget.dataset.idx]++;
        this.data.aCost +=this.data.array[e.currentTarget.dataset.id].s$[e.currentTarget.dataset.idx];
        this.data.aCount++;
      this.setData({
          array:this.data.array,
          aCount:this.data.aCount,
          aCost:this.data.aCost,
        })
    },
    tap:function (e) {
        this.setData({
          currentTab:e.currentTarget.dataset.idx
        })
    },
    order:function (e) {
        wx.setStorageSync('array',this.data.array)
    }
})
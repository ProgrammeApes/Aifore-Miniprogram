// pages/recommend/recommend.js
Page({

  data: {
    isAct: false,
    label:[
        {
            name:'多糖',
            check:false
        },
        {
            name:'少糖',
            check:false
        },
        {
            name:'冷饮',
            check:false
        },
        {
            name:'奶香',
            check:false
        },
        {
            name:'热饮',
            check:false
        },
        {
            name:'多糖',
            check:false
        },
        {
            name:'少糖',
            check:false
        },
        {
            name:'多糖',
            check:false
        },
        {
            name:'少糖',
            check:false
        },
        {
            name:'冷饮',
            check:false
        },
        {
            name:'奶香',
            check:false
        },
        {
            name:'热饮',
            check:false
        },
        {
            name:'多糖',
            check:false
        },
        {
            name:'少糖',
            check:false
        },
        {
            name:'冷饮',
            check:false
        },
        {
            name:'奶香',
            check:false
        },
        {
            name:'热饮',
            check:false
        },
        {
            name:'多糖',
            check:false
        },
        {
            name:'少糖',
            check:false
        },
        {
            name:'冷饮',
            check:false
        },
        {
            name:'奶香',
            check:false
        },
        {
            name:'热饮',
            check:false
        },
        {
            name:'多糖',
            check:false
        },
        {
            name:'少糖',
            check:false
        },

    ]


  },
  handleSelect () {
    let isAct = !this.data.isAct
    this.setData({isAct})
  },
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},

  change:function (e) {
      if (this.data.label[e.currentTarget.dataset.id].check) {
          this.data.label[e.currentTarget.dataset.id].check = false;
      }
      else this.data.label[e.currentTarget.dataset.id].check = true;
      this.setData({
          label:this.data.label
      })
  }
})
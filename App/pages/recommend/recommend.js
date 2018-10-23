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

    ],
    card:{
        prod:['红豆红茶','黑糖鲜奶','原叶奶茶','养生特饮'],
        s$:[12,13,14,15],
        b$:[14,15,16,17],
        sNum:[0,0,0,0],
        bNum:[0,0,0,0],
    },
    count:0,
    cost:0,
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
  },

    smallMin: function (e) {
        if(this.data.card.sNum[e.currentTarget.dataset.idx] > 0){
            this.data.card.sNum[e.currentTarget.dataset.idx]--;
            this.data.cost -=this.data.card.s$[e.currentTarget.dataset.idx];
            this.data.count--;
        }
        this.setData({
            card:this.data.card,
            count:this.data.count,
            cost:this.data.cost,
        })
    },
    smallAdd: function (e) {
        this.data.card.sNum[e.currentTarget.dataset.idx]++;
        this.data.cost +=this.data.card.s$[e.currentTarget.dataset.idx];
        this.data.count++;
        this.setData({
            card:this.data.card,
            count:this.data.count,
            cost:this.data.cost,
        })
    },
    bigMin: function (e) {
        if(this.data.card.bNum[e.currentTarget.dataset.idx] > 0){
            this.data.card.bNum[e.currentTarget.dataset.idx]--;
            this.data.cost -=this.data.card.b$[e.currentTarget.dataset.idx];
            this.data.count--;
        }
        this.setData({
            card:this.data.card,
            count:this.data.count,
            cost:this.data.cost,
        })
    },
    bigAdd: function (e) {
        this.data.card.bNum[e.currentTarget.dataset.idx]++;
        this.data.cost +=this.data.card.b$[e.currentTarget.dataset.idx];
        this.data.count++;
        this.setData({
            card:this.data.card,
            count:this.data.count,
            cost:this.data.cost,
        })
    },
    order:function (e) {
        wx.setStorageSync('card',this.data.card)}
})
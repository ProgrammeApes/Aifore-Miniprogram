// pages/payment/payment.js
Page({
  data: {
    array:[],
    aCount:0,
    aCost:0
  },
  onLoad: function (options) {
    var data = wx.getStorageSync('array')
    var aCount = 0;
    var aCost = 0;
    wx.removeStorageSync('array')
    for(var i = 0; i < data.length; i++){
          var a = data[i].prod;
          for(var j = 0; j < a.length; j++){
              aCount = aCount+data[i].sNum[j]+data[i].bNum[j];
              aCost = aCost + data[i].sNum[j] * data[i].s$[j] +  data[i].bNum[j] * data[i].b$[j]
          }
      }
    this.setData({
        aCount: aCount,
        aCost: aCost,

    })

  },
  onReady: function () {


  },
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},

})
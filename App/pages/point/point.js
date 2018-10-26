Page({
  data: {
      coupon:[
          {
              name:"金桔柠檬",
              oldPrice: 15,
              price: 12,
              point: 45,
          },
          {
              name:"芝士奶盖",
              oldPrice: 17,
              price: 12,
              point: 55,
          }
      ]
  },
  onLoad: function (options) { },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { },
  exchange:function () {
      wx.showModal({
          title: '提示',
          content: '您是否要兑换',
          confirmText: '兑换',
          cancelText: '放弃',
          success (res) {
              if (res.confirm) {
                  console.log('用户点击兑换')
              } else if (res.cancel) {
                  console.log('用户点击放弃')
              }
          }
      })
  }
})
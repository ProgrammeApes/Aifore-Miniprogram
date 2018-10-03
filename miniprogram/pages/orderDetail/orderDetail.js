// pages/orderDetail/orderDetail.js
Page({
  data: {
    tabIndex: 0,
    paymentList: [
      {
        val: 0,
        text: '支付宝支付'
      },
      {
        val: 1,
        text: '微信支付'
      },
      {
        val: 2,
        text: '现金支付'
      }
    ]
  },
  choosePayment (e) {
    let item = e.currentTarget.dataset.item
    this.setData({
      tabIndex: item.val
    })
  },
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},

});
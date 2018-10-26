// pages/couponDetail/couponDetail.js
Page({
  data: {},
  onLoad: function (options) {},
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
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
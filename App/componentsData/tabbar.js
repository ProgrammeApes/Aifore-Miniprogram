const data = {
  tabbarData: {
    theme: {
      fontSize: '24', // 文字大小
      imgSize: '46', // 图片大小,宽=高
      normalColor: '#666', // 未选中时颜色
      selectedColor: '#9ccc65', // 选中时颜色
      borderStyle: '#f5f5f5', // 上边框颜色
      backgroundColor: 'white', // 背景色
    },
    list: [
      {
        "selectedIconPath": '../../static/img/tabbar/index-icon-select.png',
        "iconPath": '../../static/img/tabbar/index-icon.png',
        "pagePath": "pages/index/index",
        "text": "首页"
      },
      {
        "selectedIconPath": '../../static/img/tabbar/order-icon-select.png',
        "iconPath": '../../static/img/tabbar/order-icon.png',
        "pagePath": "pages/order/order",
        "text": "点餐"
      },
      {
        "selectedIconPath": '../../static/img/tabbar/health-icon-select.png',
        "iconPath": '../../static/img/tabbar/health-icon.png',
        "pagePath": "pages/health/health",
        "text": "健康"
      },
      {
        "selectedIconPath": '../../static/img/tabbar/vip-icon-select.png',
        "iconPath": '../../static/img/tabbar/vip-icon.png',
        "pagePath": "pages/vip/vip",
        "text": "VIP"
      }
    ]
  }
}

export default data
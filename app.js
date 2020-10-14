//app.js
const defaultTime = {
  defaultWorkTime: 25,
  defaultRestTime: 5
}

const defaultColor = {
  red : 150,
  green : 210,
  blue : 240
}

App({
  onLaunch: function() {
    let workTime = wx.getStorageSync('workTime')
    let restTime = wx.getStorageSync('restTime')
    let red = wx.getStorageSync('red')
    let green = wx.getStorageSync('green')
    let blue = wx.getStorageSync('blue')
    if (!workTime) {
      wx.setStorage({
        key: 'workTime',
        data: defaultTime.defaultWorkTime
      })
    }
    if (!restTime) {
      wx.setStorage({
        key: 'restTime',
        data: defaultTime.defaultRestTime
      })
    }
    if (!red) {
      wx.setStorage({
        key: 'red',
        data: defaultColor.red
      })
    }
    if (!green) {
      wx.setStorage({
        key: 'green',
        data: defaultColor.green
      })
    }
    if (!blue) {
      wx.setStorage({
        key: 'blue',
        data: defaultColor.blue
      })
    }
  }
})

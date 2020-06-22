function request(url, callback){
    wx.request({
      url: url,
      success(res){
          callback(res.data)
      }
    })
}

module.exports = {
    request:request
}
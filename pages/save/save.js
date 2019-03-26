// 调用
const httpRequest = require("../../utils/request.js").httpRequest
const upng = require('../../utils/UPNG.js')
const designPic = require("../../utils/config.js").designPic
const templatelistUrl = require("../../utils/config.js").templatelist
const stickerlistUrl = require("../../utils/config.js").stickerlist
const fontlistUrl = require("../../utils/config.js").fontlist
const showOnePhone = require("../../utils/config.js").showOnePhone
const hostName = require("../../utils/config.js").hostName
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 0,
    statusTitle: ["图片", "模板", "贴纸", "文字"],
    picList: [
      { imgUrl: '/images/banner/photo.png' },
      { imgUrl: '/images/banner/take-photo.png' },
      { imgUrl: '/images/banner/source.png' }
    ],
    picPaths: [],
    cutBoxShow: false,
    cutBox: [
      { imgUrl: '/images/icon/cut.png' },
      { imgUrl: '/images/icon/scrawl.png' },
      { imgUrl: '/images/icon/delete.png' }
    ],
    cutIndex: 3,
    phoneTxtShow: true,
    picIndex: 999,
    temIdx: 999,
    stickerIdx: 999,
    tempFilePath: '',
    canvasShow: false,
    templatelist: [],
    stickerlist: [],
    fontlist: [],
    colorList: [],
    save: false,
    startCanvas: true,
    canvasWidth: 180,
    canvasHeight: 367,
    canvasLeft: 4,
    canvasTop: 13,
    id: '',
    pathStart: '/images/banner/design-phone.png',
    pathEnd: '/images/banner/phone-slide.png',
    writeContent: '',
    fontTxtShow: false






  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      cutBoxShow: false,
      phoneTxtShow: true,
      hostName: hostName,
      id: options.id
    })
    this.getBg(this.data.id);

  },
  getTemplatelist: function () {

  },
  getBg: function (id) {
    var that = this;
    wx.showLoading({
      title: '加载中',
      success: function () {
        httpRequest(showOnePhone, { id }).then((res) => {
          console.log(res)
          if (res.data.code === 0) {
            that.setData({
              //  pathStart:
              //  pathEnd:
            })
          }

        })
      },
      complete: function () {
        wx.hideLoading()
      }
    });
    that.getCanvas();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  changeStatus: function (e) {
    // console.log(e)
    let that = this;
    let index = e.currentTarget.dataset.index;
    that.setData({
      status: index
    })
    if (index === 1) {
      wx.showLoading({
        title: '加载中',
        success: function () {
          httpRequest(templatelistUrl).then((res) => {
            console.log(res)
            if (res.data.code === 0) {
              that.setData({
                templatelist: res.data.data
              })
            }

          })
        },
        complete: function () {
          wx.hideLoading()
        }
      })
    } else if (index === 2) {
      wx.showLoading({
        title: '加载中',
        success: function () {
          httpRequest(stickerlistUrl).then((res) => {
            console.log(res)
            if (res.data.code === 0) {
              that.setData({
                stickerlist: res.data.data
              })
            }

          })
        },
        complete: function () {
          wx.hideLoading()
        }
      })
    } else if (index === 3) {
      var colorList = []
      for (var i = 0; i < 20; i++) {
        var color = that.getColor();
        colorList.push(color)
      }
      console.log(colorList)
      wx.showLoading({
        title: '加载中',
        success: function () {
          httpRequest(fontlistUrl).then((res) => {
            console.log(res)
            if (res.data.code === 0) {
              that.setData({
                fontlist: res.data.data,
                colorList: colorList,
                phoneTxtShow: false,
                fontTxtShow: true
              })
            }

          })
        },
        complete: function () {
          wx.hideLoading()
        }
      })
    }
    console.log(that.data.templatelist)
  },
  // 图片点击事件
  picSelect: function (e) {
    console.log(e)
    let that = this;
    let selecrIndex = e.currentTarget.dataset.index;
    if (selecrIndex === 0) {
      wx.chooseImage({
        count: 9, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          console.log(res)
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          let picPaths = that.data.picPaths;
          picPaths.push(tempFilePaths)
          that.setData({
            picPaths: picPaths
          })
        }
      })
    } else if (selecrIndex === 1) {
      wx.chooseImage({
        count: 9, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          console.log(res)
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          let picPaths = that.data.picPaths;
          picPaths.push(tempFilePaths)
          that.setData({
            picPaths: picPaths
          })
        }
      })
    } else if (selecrIndex === 2) {
      wx.navigateTo({
        url: '/pages/source/source',
      })
    }
  },
  // 选中图片切换背景
  choosePic: function (e) {
    var that = this;
    let index = e.currentTarget.dataset.index;
    that.setData({
      picIndex: index,
      phoneTxtShow: false
    })
    that.getCanvas();
  },

  // 保存/购买
  goSaveBuy: function () {
    this.setData({
      save: true
    })
    this.getCanvas();





  },
  // 先购买
  goBuy: function () {
    wx.navigateTo({
      url: '/pages/cart-save/cart-save?status=2',
    })
  },
  // 裁剪、涂鸦。删除按钮
  selectCutStyle: function (e) {
    let cutindex = e.currentTarget.dataset.cutindex;
    let picIndex = this.data.picIndex;
    let picPaths = this.data.picPaths;

    if (cutindex === 0) {
      console.log(1)
    } else if (cutindex === 1) {

    } else if (cutindex === 2) {
      this.data.picPaths.splice(picIndex, 1);
      this.setData({
        picPaths: picPaths,
        picIndex: 0
      })
    }
  },
  // 选择模版
  chooseTemplate: function (e) {
    var that = this;
    let idx = e.currentTarget.dataset.idx;
    this.setData({
      temIdx: idx
    })
    that.getCanvas();
  },
  // 选择贴纸
  chooseSticker: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      stickerIdx: index
    })

  },
  getColor: function () {
    var colorValue = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
    var colorArray = colorValue.split(",");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += colorArray[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  //  canvas画图
  getCanvas: function () {
    let that = this;
    let save = that.data.save;
    let canvasWidth = that.data.canvasWidth;
    let canvasHeight = that.data.canvasHeight;
    let canvasLeft = that.data.canvasLeft;
    let canvasTop = that.data.canvasTop;
    var startCanvas = that.data.startCanvas;
    const ctx = wx.createCanvasContext('myCanvas');
    let pathStart = that.data.pathStart;
    let pathEnd = that.data.pathEnd;
    ctx.drawImage(pathStart, 0, 0, canvasWidth, canvasHeight);
    if (startCanvas) {
      ctx.drawImage(pathEnd, 0, 0, canvasWidth, canvasHeight);
      that.setData({
        startCanvas: false
      })
    }
    var picIndex = that.data.picIndex;
    var picPaths = that.data.picPaths;
    var pathPic = picPaths[picIndex];
    if (picIndex !== 999 && save == false) {
      ctx.drawImage(pathPic.toString(), canvasLeft, canvasTop, canvasWidth - 2 * canvasLeft, canvasHeight - 2 * canvasTop);
      ctx.drawImage(pathEnd, 0, 0, canvasWidth, canvasHeight);
    }
    let temIdx = that.data.temIdx;
    let templatelist = that.data.templatelist;

    if (picIndex !== 999 && temIdx !== 999 && save == false) {
      let pathTem = that.data.hostName + templatelist[temIdx].mtUrl
      ctx.drawImage(pathPic.toString(), canvasLeft, canvasTop, canvasWidth - 2 * canvasLeft, canvasHeight - 2 * canvasTop);
      ctx.drawImage(pathTem.toString(), canvasLeft, canvasTop, canvasWidth - 2 * canvasLeft, canvasHeight - 2 * canvasTop);
      ctx.drawImage(pathEnd, 0, 0, canvasWidth, canvasHeight);
    }
    let writeContent = that.data.writeContent;
    if (writeContent !== '') {
      ctx.strokeStyle = "#d92f32";
      ctx.lineWidth = 1;
      ctx.rect(50, 180, 80, 30);
      ctx.stroke();
      ctx.fillText(writeContent, 55, 190)
      ctx.drawImage(pathEnd, 0, 0, canvasWidth, canvasHeight);
    }
    ctx.draw();
    if (save) {
      let pathTem = that.data.hostName + templatelist[temIdx].mtUrl
      ctx.drawImage(pathPic.toString(), canvasLeft, canvasTop, canvasWidth - 2 * canvasLeft, canvasHeight - 2 * canvasTop);
      ctx.drawImage(pathTem.toString(), canvasLeft, canvasTop, canvasWidth - 2 * canvasLeft, canvasHeight - 2 * canvasTop);
      ctx.drawImage(pathEnd, 0, 0, canvasWidth, canvasHeight);
      wx.showLoading({
        title: '正在保存图片',
        success: function () {
          ctx.draw(false, () => {
            wx.canvasGetImageData({
              canvasId: 'myCanvas',
              x: 0,
              y: 0,
              width: canvasWidth,
              height: canvasHeight,
              success(res) {
                console.log(res)
                let pngData = upng.encode([res.data.buffer], res.width, res.height)
                let base64 = wx.arrayBufferToBase64(pngData)
                // console.log(base64)
                httpRequest(designPic, { openId: 12, base64 }).then((res) => {
                  console.log(res)
                  if (res.data.code == 0) {
                    wx.navigateTo({
                      url: '/pages/cart-save/cart-save?status=0',
                    })
                  }
                })
              },
              complete: function () {
                wx.hideLoading()
              }
            })
          })
        },

      })
    }



  },
  // 点击canvas
  changeCanvas: function () {
    let cutBoxShow = this.data.cutBoxShow
    this.setData({
      cutBoxShow: !cutBoxShow
    })
  },
  blurEvent: function (e) {
    console.log(e)
    this.setData({
      writeContent: e.detail.value,
      fontTxtShow: false
    })
    this.getCanvas()
  }

})
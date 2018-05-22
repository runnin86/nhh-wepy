import wepy from 'wepy'
import {IMG_URL} from '@/utils/config'

export default class shareMixin extends wepy.mixin {
  data = {
    showQuickIcon: 'hide',
    imgPath: IMG_URL
  }
  methods = {
    showQuickIconTap() {
      this.showQuickIcon = 'show'
      this.$apply()
    },
    closeQucik() {
      this.showQuickIcon = 'hide'
      this.$apply()
    },
    toNavigate(e) {
      wepy.navigateTo({
        url: e.currentTarget.dataset.url
      })
    },
    toSwitchTab(e) {
      // 跳转到tabBar页面，并关闭其他所有tabBar页面
      wepy.switchTab({
        url: e.currentTarget.dataset.url
      })
    },
    backPage() {
      // 返回上一页面或多级页面
      wepy.navigateBack({delta: 1})
    },
    // 分享按钮
    switchPatch() {
      this.$invoke('qrPatchLayer', 'switchPatch')
    }
  }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }
}
// 只有管理员才有权限访问，如果不是管理员，就删除dom
import store from '@/store'

export default {
  // 当被绑定的元素插入到 DOM 中时…… el 指令所绑定的元素，可以用来直接操作 DOM。
  inserted(el) {
    // 判断它是否是管理员
    const isSupperMan = store.getters.account === 1
    // 移出dom节点
    if (!isSupperMan) {
      // 如果当前节点有父节点
      if (el.parentNode) {
        // 通过父节点移出当点节点
        el.parentNode.removeChild(el)
      }
    }
  }
}

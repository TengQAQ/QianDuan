// 通用字典查询混入
import { findByDictNameAPI } from '@/api/dict.js'
export default {
  data() {
    return {
      // 存放下拉列表，复选框数据
      dicts: {}
    }
  },
  methods: {
    fetchDictData(arrvalue) {
      const arr = {
        'dicts': arrvalue
      }
      findByDictNameAPI(arr).then(resp => {
        this.dicts = resp.data
      })
    }
  },
  created() {
    // 判断真正的子类页面，必须要有参数过来
    const optionsDicts = this.$options.dicts
    console.log(this)
    // console.log(this.$myOption.massage)
    if (optionsDicts && optionsDicts.length > 0) {
      this.fetchDictData(optionsDicts)
    }
  }
}

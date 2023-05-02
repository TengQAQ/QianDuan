<template>
  <span>
    <el-tag
      v-for="item in dataArray"
      v-if="item.value==value"
      :key="item.value"
      :type="item.listClass?item.listClass:tagClass(item.value)"
    >{{ item.label }}</el-tag>
  </span>
</template>

<script>
export default {
  // 自定义对象，公开属性
  props: {
    dataArray: {
      type: Array,
      required: true
    },
    value: {
      // type: String,
      required: true
    }
  },
  created() {

  },
  methods: {
    tagClass(value) {
      const classArr = ['', 'success', 'info', 'warning', 'danger']
      return value < classArr.length ? classArr[value] : ''
    }
  }
}
</script>

<style>
</style>

// 分页混入对象
export default {
  data() {
    return {
      // 创建时间绑定的对象
      createTimeValue: [],
      // 表单查询条件对象
      queryParam: {
        page: 1,
        size: 10
      },
      // 分页表格分页的结果对象
      tableData: {
        total: 0,
        rows: []
      },
      // 编辑用的
      // 表格选中的对象
      mutilrows: [],
      // 表格选中对象的主键的值
      ids: [],
      // 主键的值
      primaryKey: undefined,
      // 编辑按钮禁用
      single: true,
      // 删除按钮禁用
      multiple: true,
      loading: false
    }
  },
  methods: {
    // 查询按钮
    handleQuery() {
      this.queryParam.page = 1
      this.fetchData()
    },
    // 每页几笔发生变化
    handleSizeChange(val) {
      this.queryParam.page = 1
      this.queryParam.size = val
      // 重新查询
      this.fetchData()
    },
    // 当前页发生变化
    handleCurrentChange(val) {
      this.queryParam.page = val
      // 重新查询
      this.fetchData()
    },
    // 表格选择变化 rows=[]
    handleSelectionChange(rows) {
      this.mutilrows = rows

      this.ids = rows.map(p => p[this.primaryKey])

      this.single = !(rows.length === 1)
      this.multiple = !(rows.length > 0)
    },
    // 查询数据
    fetchData() {
      // 解决日期的问题  beginTime,  endTime
      delete this.queryParam.beginTime
      delete this.queryParam.endTime
      if (this.createTimeValue && this.createTimeValue.length === 2) {
        this.queryParam.beginTime = this.createTimeValue[0]
        this.queryParam.endTime = this.createTimeValue[1]
      }

      // 自定义 Hook钩子函数 (在java叫 接口interface)
      if (this.fetchDataApi) {
        this.fetchDataApi(this.queryParam).then(resp => {
          this.tableData = resp.data
        })
      } else {
        this.$message.error('必须在data中定义fetchDataApi')
      }
    }
  },
  //  生命周期钩子
  created() {
    // 已经为主键赋值
    if (this.primaryKey) {
      this.fetchData()
    } else {
      this.$message.error('必须在data中定义primaryKey主键信息')
    }
  }
}

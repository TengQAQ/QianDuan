<template>
  <div class="app-container">
    <el-row style="margin-bottom: 20px">
      <el-button type="primary" @click="dialogFormVisible = true">新增商品</el-button>
      <el-button type="primary" @click="deletedialogFormVisible = true">删除商品</el-button>
      <el-button type="primary" @click="changedialogFormVisible = true">修改商品</el-button>
    </el-row>
    <el-table
      :data="tableData"
      border
      style="width: 80%"
    >
      <el-table-column
        prop="goodsId"
        label="编号"
        width="50"
      />
      <el-table-column
        prop="goodsName"
        label="名称"
        width="200"
      />
      <el-table-column
        prop="goodsSerial"
        label="货号"
        width="100"
      />

      <el-table-column
        prop="marketPrice"
        label="市场价"
        width="100"
      />

      <el-table-column
        prop="shopPrice"
        label="售价"
        width="100"
      />

      <el-table-column
        prop="storeNumber"
        label="库存"
        width="100"
      />

      <el-table-column
        prop="selledNumber"
        label="已售"
        width="100"
      />

      <el-table-column
        prop="warnNumber"
        label="警告数量"
        width="100"
      />
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <!-- scope.row 当前操作的行-->
          <el-button type="text" size="small" @click="handleClick(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :current-page="pageNum"
      :page-size="pageSize"
      :total="total"
      @current-change="changePageNum"
    />
    <el-dialog title="商品信息" :visible.sync="dialogFormVisible" @close="resetForm">
      <el-form ref="goodsForm" :model="goodsForm" label-width="80px" :rules="rules">
        <el-form-item label="商品名称" prop="goodsName">
          <el-input v-model="goodsForm.goodsName" placeholder="请输入商品名称" />
        </el-form-item>
        <el-form-item label="商品货号" prop="goodsSerial">
          <el-input v-model="goodsForm.goodsSerial" placeholder="请输入商品货号" />
        </el-form-item>
        <el-form-item>
          <el-tree
            :data="dataTree"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps"
            @node-click="handleNodeClick"
          />
        </el-form-item>
        <el-form-item label="排序值" prop="goodsSort">
          <el-input-number v-model="goodsForm.goodsSort" :min="1" />
        </el-form-item>
        <el-form-item label="库存数量" prop="storeNumber">
          <el-input v-model.number="goodsForm.storeNumber" placeholder="请输入库存数量" />
        </el-form-item>
        <el-form-item label="已售数量">
          <el-input v-model.number="goodsForm.selledNumber" placeholder="请输入已售数量" />
        </el-form-item>
        <el-form-item label="警告数量">
          <el-input v-model.number="goodsForm.warnNumber" placeholder="请输入警告数量" />
        </el-form-item>
        <el-form-item label="市场售价" prop="marketPrice">
          <el-input v-model.number="goodsForm.marketPrice" placeholder="请输入市场售价" />
        </el-form-item>
        <el-form-item label="上架状态">
          <el-radio v-model="goodsForm.goodsEnable" :label="1">上架</el-radio>
          <el-radio v-model="goodsForm.goodsEnable" :label="0">下架</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" :loading="goodsFormIsLoading" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="删除商品" :visible.sync="deletedialogFormVisible" @close="resetForm">
      <el-form ref="goodsForm" :model="goodsForm" label-width="80px" :rules="rules">
        <el-form-item label="商品货号" prop="goodId">
          <el-input v-model="goodsForm.goodsId" placeholder="请输入商品Id" />
        </el-form-item>
        <el-form-item>
          <el-button @click="deletedialogFormVisible = false">取消</el-button>
          <el-button type="primary" :loading="deletegoodsFormIsLoading" @click="deleteonSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

</template>

<script>
import { deleteGoodsByPK, selectGoods, submitGoodsInfo } from '@/api/goodsInfo'
// import { title } from '@/settings'
export default {
  name: 'Index',
  data() {
    return {
      tableData: [],
      pageNum: 1,
      pageSize: 5,
      total: 0,
      // 初始化对话框不可见
      dialogFormVisible: false,
      deletedialogFormVisible: false,
      deletegoodsFormIsLoading: false,
      changedialogFormVisible: false,
      goodsFormIsLoading: false,
      dataTree: [
        {
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        },
        {
          id: 2,
          label: '一级 2'
        },
        {
          id: 3,
          label: '一级 3' }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      // 对话框数据
      goodsForm: {
        goodsId: '',
        // 商品名称
        goodsName: '',
        goodsSerial: '',
        goodsSort: 1,
        storeNumber: '',
        selledNumber: '',
        warnNumber: '',
        marketPrice: '',
        goodsEnable: 0
      },
      rules: {
        // 一个属性的校验可以包含多个规则，每个规则为一个对象
        goodsName: [
          // required: 属性不能为空
          // message: 当属性为空的提示信息
          // trigger: 如果触发表单校验, blur是一个js中事件名，当文本框失去焦点时触发
          { required: true, message: '商品名称不能为空', trigger: 'blur' }
        ],
        goodsSerial: [
          { required: true, message: '货号不能为空', trigger: 'blur' }
        ],
        goodsSort: [
          { required: true, message: '排序值不能为空', trigger: 'blur' }
        ],
        storeNumber: [
          { required: true, message: '库存数量不能为空', trigger: 'blur' }
        ],
        marketPrice: [
          { required: true, message: '市场售价不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    this.fetchList()
  },
  methods: {
    handleClick(row) {
      console.log('第', row, '行的表单查看被点击')
    },
    changePageNum(pageNum) {
      console.log('当前页码', pageNum)
      this.pageNum = pageNum
      this.fetchList()
    },
    deleteonSubmit() {
      console.log('已经发起一次删除商品请求')
      this.deletegoodsFormIsLoading = true
      deleteGoodsByPK(this.goodsForm).then((resp) => {
        console.log('得到服务器的响应结果', resp)
        // 调用弹框组件提示新增成功
        this.$notify({
          title: '成功',
          message: '成功被删除',
          type: 'success',
          position: 'bottom-right'
        })
        this.fetchList()
      }).finally(() => {
        this.deletegoodsFormIsLoading = false
        this.deletedialogFormVisible = false
      })
    },
    onSubmit() {
      console.log('你点击了提交按钮')
      this.goodsFormIsLoading = true
      const title = this.goodsForm.goodsId ? '修改' : '新增'
      submitGoodsInfo(this.goodsForm).then((resp) => {
        console.log('得到服务器的响应结果', resp)
        // 调用弹框组件提示新增成功
        this.$notify({
          title: '成功',
          message: title + '成功',
          type: 'success',
          position: 'bottom-right'
        })
        this.fetchList()
      }).finally(() => {
        this.goodsFormIsLoading = false
        this.dialogFormVisible = false
      })
    },
    fetchList() {
      selectGoods({ pageNum: this.pageNum, pageSize: this.pageSize }).then((resp) => {
        console.log('通过ajax请求的数据', resp)
        const { data } = resp
        this.pageNum = data.pageNum
        this.pageSize = data.pageSize
        this.total = data.total
        this.tableData = data.list
      })
    },
    handleEdit(row) {
      console.log('当前', row, '行编辑被点击。显示对话框')
      this.dialogFormVisible = !this.dialogFormVisible
      this.goodsForm = { ...row }
    },
    handleNodeClick(data) {
      console.log(data)
      this.dataTree.children = data.children
      this.dataTree.label = data.label
    },
    resetForm() {
      console.log('对话框关闭触发的close事件')
      // 重置表单校验状态
      // $refs： 获取页面中带有ref属性的组件
      // console.log(this.$refs)
      this.$refs['goodsForm'].resetFields()
      // 重置goodsForm对象中的属性
      this.goodsForm = {
        goodsId: '',
        // 商品名称
        goodsName: '',
        goodsSerial: '',
        goodsSort: 1,
        storeNumber: '',
        selledNumber: '',
        warnNumber: '',
        marketPrice: '',
        goodsEnable: 0
      }
    }
  }

}
</script>

<style scoped>

</style>

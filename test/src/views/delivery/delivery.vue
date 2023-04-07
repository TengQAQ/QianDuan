<template>
  <div class="app-container">
    <el-row>
      <el-row>
        <el-button style="background-color: #67C23A;color: white" size="small" @click="addDel">新增</el-button>
      </el-row>
      <el-row>
        <el-table
          :data="delivery"
          style="width: 100%;margin-top: 20px;"
        >
          <el-table-column prop="id" label="序号" />
          <el-table-column prop="userId" label="联系人" />
          <el-table-column prop="contactsName" label="联系电话" />
          <el-table-column prop="addr" label="配送地址" />
          <el-table-column fixed="right" label="操作">
            <template scope="scope">
              <el-button style="background-color: white;color: black;border: 1px solid #2b2f3a" type="text" size="mini" @click="editer(scope.row)">编辑</el-button>
              <el-button style="background-color: #67C23A;color: white" type="text" size="mini">查看详细信息</el-button>
              <el-button style="background-color: #1482f0;color: white" type="text" size="mini">删除</el-button>
              <!--              <el-button type="text" @click="editer(scope.row)" size="small">查看配偶</el-button>-->
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="seachFrom.pageNum"
          :page-size="seachFrom.pageSize"
          :total="seachFrom.total"
          @current-change="changePageNum"
        />
      </el-row>
    </el-row>
    <el-dialog width="50%" title="新增/编辑" :visible.sync="dialogFormVisible" @close="resetForm">
      <el-form ref="ruleForm" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="收货人" prop="contactsName">
          <el-input v-model="form.contactsName" />
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.contactsTel" />
        </el-form-item>
        <el-form-item label="是否为默认地址(红色为是)" label-width="200px">
          <el-switch
            v-model="form.isChoose"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </el-form-item>
        <el-form-item label="配送地址">
          <el-cascader
            v-model="form.topAddr"
            :options="allCategory"
            :props="{ value:'addrId', label:'addrInfo' }"
          />
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.addr" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { addDel, allDel } from '@/api/delivery'
import { allAddr } from '@/api/addr'

export default {
  name: 'Delivery',
  data() {
    return {
      seachFrom: {
        pageNum: undefined,
        pageSize: undefined,
        total: undefined
      },
      rules: {
        contactsName: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }]
      },
      delivery: [],
      allCategory: undefined,
      dialogFormVisible: false,
      form: {
        userId: 42,
        isChoose: undefined,
        firstAddr: undefined,
        secondAddr: undefined,
        contactsName: undefined,
        contactsTel: undefined,
        isDefault: undefined,
        thridAddr: undefined,
        topAddr: undefined,
        addr: undefined
      },
      multipleSelection: []
    }
  },
  methods: {
    feach() {
      allDel(this.seachFrom).then(resp => {
        const { pageNum, pageSize, total, list } = resp.data
        this.delivery = list
        this.seachFrom.pageNum = pageNum
        this.seachFrom.pageSize = pageSize
        this.seachFrom.total = total
      })
    },
    resetForm() {
      this.form = {
        contactsName: undefined,
        contactsTel: undefined,
        isDefault: undefined,
        thridAddr: undefined,
        addr: undefined
      }
    },
    submitForm() {
      console.log('按钮已经被提交')
      if (this.form.isChoose) {
        this.form.isDefault = 1
      } else {
        this.form.isDefault = 0
      }
      const delete_ids = this.form.topAddr.map(item => item)
      this.form.firstAddr = delete_ids[0]
      this.form.secondAddr = delete_ids[1]
      this.form.thridAddr = delete_ids[2]
      this.dialogFormVisible = false
      addDel(this.form).then(resp => {
        console.log(resp)
        this.$notify({
          title: '成功',
          message: '新增数据成功',
          type: 'success',
          position: 'top-right'
        })
        this.refresh()
      })
    },
    addDel() {
      allAddr().then(resp => {
        this.allCategory = resp.data
      })
      this.dialogFormVisible = true
    },
    changePageNum(num) {
      this.seachFrom.pageNum = num
      this.feach()
    }
  },
  created() {
    this.feach()
  }
}
</script>

<style scoped>

</style>

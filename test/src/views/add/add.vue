<template>
  <div class="app-container">
    <el-row>
      <el-col>
        <el-input v-model="inlineData.name" style="width: 200px" size="small" prefix-icon="el-icon-search" placeholder="请输入地址" />
        <el-button style="background-color: #1482f0;color: white" size="small" @click="searchButton">查询</el-button>
<!--        <el-button style="background-color: #1482f0;color: white" size="small">高级查询</el-button>-->
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="addrData"
        stripe
        row-key="addrId"
        :tree-props="{children: 'children'}"
        header-row-class-name="data_tab_header"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="50"
        />
        <el-table-column
          prop="addrInfo"
          label="名称"/>
        <el-table-column
          label="操作"
          width="300">
          <template scope="scope">
            <el-button type="primary" plain v-if="scope.row.children != null" @click="addAddr(scope.row)" size="mini">添加子类目</el-button>
            <el-button type="primary" plain size="mini" @click="update(scope.row)">编辑</el-button>
            <el-button type="danger" plain size="mini" @click="deletAddr(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-dialog ref="title" :visible.sync="addDialogVisible">
      <el-form ref="dialog" title="新增/编辑" :model="addInfo" :rules="addRules" @close="dialogClose">
        <el-row>
          <el-form-item label="上级目录" prop="name">
            <el-input v-model="addInfo.addrPreName" prefix-icon="el-icon-edit" style="width: 300px" :disabled="isdisplay" />
          </el-form-item>
          <el-form-item label="类目名称" prop="name">
            <el-input v-model="addInfo.addrInfo" prefix-icon="el-icon-edit" style="width: 300px" placeholder="请输入" />
          </el-form-item>
        </el-row>
        <el-row :span="24">
          <el-col :offset="18">
            <el-button type="primary" @click="addSubmitButton">提交</el-button>
            <el-button type="primary" @click="addCancelButton">取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { addAddr, allAddr, deleteAddr, updateAddr } from '@/api/addr'

export default {
  name: 'Add',
  data() {
    return {
      inlineData: {
        name: undefined
      },
      addDialogVisible: false,
      addrData: [],
      addInfo: {
        addrId: undefined,
        addrInfo: undefined,
        addrPreId: undefined,
        addrPreName: undefined,
        lev: undefined
      },
      isdisplay: true,
      addRules: {
        addInfo: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }]
      },
      isUpdata: false
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
      // const delete_ids = this.multipleSelection.map(item => item.elementaryId)
      console.log('多选列表', this.multipleSelection)
    },
    dialogClose() {
      this.$refs['dialog'].resetFields()
      this.addInfo = {
        addInfo: undefined,
        addrPreId: undefined
      }
    },
    getallAddr() {
      allAddr().then(resp => {
        this.addrData = resp.data
        console.log(resp)
      })
    },
    addAddr(row) {
      console.log(row)
      this.addInfo.addrPreName = row.addrInfo
      this.addInfo.addrPreId = row.addrId
      this.addInfo.lev = row.lev + 1
      this.addDialogVisible = true
    },
    update(row) {
      this.addInfo = row
      this.isUpdata = true
      this.addDialogVisible = true
    },
    deletAddr(row) {
      deleteAddr(row.addrId).then(resp => {
        this.$notify({
          title: '成功',
          message: '删除数据成功',
          type: 'success',
          position: 'top-right'
        })
        this.refresh()
      })
    },
    searchButton() {
      console.log('搜索按钮被点击')
    },
    refresh() {
      this.getallAddr()
      this.$refs['dialog'].resetFields()
      this.addInfo = {
        addInfo: undefined,
        addrPreId: undefined
      }
    },
    addSubmitButton() {
      this.$refs['dialog'].validate(va => {
        if (va) {
          if (!this.isUpdata) {
            addAddr(this.addInfo).then(resp => {
              console.log(resp)
              // 调用弹框组件提示新增成功
              this.$notify({
                title: '成功',
                message: '数据新增成功',
                type: 'success',
                position: 'top-right'
              })
              this.addDialogVisible = false
              this.$refs['dialog'].resetFields()
              this.refresh()
            })
          } else {
            updateAddr(this.addInfo).then(resp => {
              console.log(resp)
              this.$notify({
                title: '成功',
                message: '数据修改成功',
                type: 'success',
                position: 'top-right'
              })
              this.addDialogVisible = false
              this.$refs['dialog'].resetFields()
              this.refresh()
            })
          }
        } else {
          this.$notify({
            title: '失败',
            message: '操作失败，请重新尝试',
            type: 'error',
            position: 'top-right'
          })
        }
      })
    },
    addCancelButton() {

    }
  },
  created() {
    this.refresh()
  }
}
</script>

<style scoped>

</style>

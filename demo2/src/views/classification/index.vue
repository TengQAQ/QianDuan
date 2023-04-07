<template>
  <div class="app-container">
    <el-row class="tac">
      <el-col :span="3">
<!--        <h5>默认颜色</h5>-->
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>分类管理</span>
            </template>
            <el-menu-item index="1">商品分类</el-menu-item>
            <el-menu-item index="2">其他分类</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <el-row class="el-row-nav">
          <el-button type="primary" style="margin:20px; background-color: #4E9DFC;border:1px solid #4E9DFC"  @click="buttonForAddClassify">添加</el-button>
          <el-button type="primary" style="margin:20px; background-color: red;border:1px solid red"  @click="buttonForDelClassify">批量删除</el-button>
        </el-row>
        <el-row class="el-row-nav" style="margin-top: 20px">
          <el-table
            :data="classifyDataForShop"
            stripe
            row-key="id"
            :tree-props="{children: 'children'}"
            header-row-class-name="data_tab_header"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="50"
            />
            <el-table-column
              prop="name"
              label="名称"/>
            <el-table-column
              label="操作"
              width="300">
              <template slot-scope="scope">
                <el-button type="primary" plain v-if="scope.row.children != null" @click="addClassify(scope.row)" size="mini">添加子类目</el-button>
                <el-button type="primary" plain size="mini">编辑</el-button>
                <el-button type="danger" plain size="mini">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="addDialog" title="新增分类" @close="resetForm">
      <el-form ref="addClassify" :model="addDialogData" :rules="addClassifyRules">
        <el-form-item label="上级分类" prop="parentId">
          <el-col :span="8">
            <el-input v-model="addDialogData.parentName" :disabled="true">
            </el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="类目名称" prop="name">
          <el-col :span="8">
            <el-input v-model="addDialogData.name" :min="0" placeholder="请输入"/>
          </el-col>
        </el-form-item>
        <el-form-item>
          <template>
            <el-button type="primary" size="small" @click="submitAddClassifyFrom">确认</el-button>
            <el-button type="primary" size="small">取消</el-button>
          </template>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { addCate, selectCate, refreshData, DelCate } from '@/api/classify'

export default {
  name: 'Classification',
  data() {
    return {
      classifyDataForShop: [],
      multipleSelection: [],
      addDialog: false,
      addDialogData: {
        parentId: undefined,
        parentName: undefined,
        name: undefined
      },
      addClassifyRules: {
        name: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(index, i) {
      console.log(index, i)
    },
    buttonForAddClassify(row) {
      this.addDialog = true
      this.addDialogData.parentId = 0
      selectCate(this.addDialogData).then(resp => {
        this.addDialogData.parentName = resp.data.name
        console.log(resp)
      })
    },
    submitAddClassifyFrom() {
      this.$refs['addClassify'].validate(va => {
        if (va) {
          addCate(this.addDialogData).then(resp => {
            console.log('addDialogData', this.addDialogData)
            this.refresh()
            this.addDialog = false
          })
        }
      })
    },
    resetForm() {
      this.$refs['addClassify'].resetFields()
      this.addDialogData = {
        parentId: undefined,
        name: undefined
      }
    },
    refresh() {
      refreshData().then(resp => {
        // console.log(resp)
        this.classifyDataForShop = resp.data
      })
    },
    addClassify(row) {
      this.addDialog = true
      console.log(row)
      this.addDialogData.parentName = row.name
      this.addDialogData.parentId = row.id
    },
    handleSelectionChange(val) {
      console.log(val)
      this.multipleSelection = val
    },
    buttonForDelClassify() {
      const delete_ids = this.multipleSelection.map(item => item.id)
      console.log(delete_ids)
      DelCate(delete_ids).then(resp => {
        console.log('删除成功数据返回', resp.data)
        this.refresh()
      })
    }
  },
  created() {
    this.refresh()
  }
}
</script>

<style scoped>
  .el-row-nav{
    background-color: white;
    margin-left: 10px;
  }
</style>

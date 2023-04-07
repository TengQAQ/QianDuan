<template>
  <div class="app-container">
    <el-row>
      <el-row>
        <el-button type="primary" style="margin:20px; background-color: #4E9DFC;border:1px solid #4E9DFC"  @click="buttonForAddCom">添加</el-button>
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
        >
          <el-table-column
            type="selection"
            width="50"
          />
          <el-table-column
            prop="id"
            label="商品编号"/>
          <el-table-column
            prop="name"
            label="商品名称"/>
          <el-table-column
            prop="intro"
            label="商品简介"/>
          <el-table-column
            prop="unit"
            label="商品库存"/>
          <el-table-column
            prop="salePrice"
            label="商品售价">
            <template slot-scope="scope">{{'￥' + scope.row.salePrice}}</template>
          </el-table-column>
          <el-table-column
            prop="isDel"
            label="上架状态">
            <template scope="scope">
              <p v-if="scope.row.isDel == '0'">销售中</p>
              <p v-if="scope.row.isDel =='1'">已下架</p>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="300">
            <template slot-scope="scope">
              <el-button type="primary" plain size="mini" @click="editorShop(scope.row)">编辑</el-button>
              <el-button type="danger" plain size="mini" @click="deleteShop(scope.row)">下架</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-row>
    <el-dialog :visible.sync="addDialog" title="新增商品" @close="resetForm">
      <el-form ref="addClassify" :model="addDialogData" :rules="addClassifyRules">
        <el-form-item label="类目分类" prop="categoryId">
          <el-col :span="8">
            <el-cascader
              v-model="addDialogData.categoryId"
              :options="option"
              :props="{ value: 'id', label:'name',emitPath: false}"
              @change="handleChange"></el-cascader>
          </el-col>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-col :span="8">
            <el-input v-model="addDialogData.name" :min="0" placeholder="请输入">
            </el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="商品简介" prop="intro">
          <el-col :span="8">
            <el-input v-model="addDialogData.intro" :min="0" placeholder="请输入"/>
          </el-col>
        </el-form-item>
        <el-form-item label="商品价格" prop="salePrice">
          <el-col :span="8">
            <el-input v-model="addDialogData.salePrice" :min="0" placeholder="请输入"/>
          </el-col>
        </el-form-item>
        <el-form-item label="购买商品价格" prop="buyPrice">
          <el-col :span="8">
            <el-input v-model="addDialogData.buyPrice" :min="0" placeholder="请输入"/>
          </el-col>
        </el-form-item>
        <el-form-item label="商品库存" prop="unit">
          <el-col :span="8">
            <el-input v-model="addDialogData.unit" :min="0" placeholder="请输入"/>
          </el-col>
        </el-form-item>
        <el-form-item label="商品标签" prop="standard">
          <el-col :span="8">
            <el-input v-model="addDialogData.standard" :min="0" placeholder="请输入"/>
          </el-col>
        </el-form-item>
        <el-form-item label="上架状态" prop="isDel">
          <el-col :span="8">
            <template>
              <el-radio v-model="addDialogData.isDel" label="0">售卖中</el-radio>
              <el-radio v-model="addDialogData.isDel" label="1">已下架</el-radio>
            </template>
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

import { insertCom, selectCom } from '@/api/commodity'
import { refreshData } from '@/api/classify'

export default {
  data() {
    return {
      tableData: {
        pageSize: undefined,
        pageNum: undefined
      },
      addDialogData: {
        categoryId: undefined,
        name: undefined,
        intro: undefined,
        salePrice: undefined,
        isDel: undefined,
        unit: undefined,
        standard: undefined,
        buyPrice: undefined
      },
      addDialog: false,
      total: undefined,
      elvalue: undefined,
      option: []
    }
  },
  methods: {
    fachList() {
      selectCom().then(resp => {
        this.tableData = resp.data
        refreshData().then(resp => {
          // console.log(resp)
          this.option = resp.data
          this.option.label = resp.data.name
        })
      })
    },
    buttonForAddCom() {
      this.addDialog = true
    },
    submitAddClassifyFrom() {
      this.addDialog = true
      insertCom(this.addDialogData).then(resp => {
        console.log('数据新增返回结果', resp)
        this.addDialog = false
        this.fachList()
      })
    },
    handleChange(value) {
      console.log(value)
    }
  },
  created() {
    this.fachList()
  }
}
</script>

<style scoped>

</style>

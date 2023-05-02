<template>
  <div class="app-container">

    <!-- 搜索区 -->
    <el-form :model="queryParam" ref="queryForm" size="small" :inline="true">

      <el-form-item label="商品名称" prop="name">
        <el-input v-model="queryParam.name" placeholder="请输入商品名称" clearable style="width: 240px" @keyup.enter.native="handleQuery"/>
      </el-form-item>
      <el-form-item label="是否上架 1：上架 ，0：没上架" prop="isgrounding">
        <el-input v-model="queryParam.isgrounding" placeholder="请输入是否上架 1：上架 ，0：没上架" clearable style="width: 240px" @keyup.enter.native="handleQuery"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
      </el-form-item>
    </el-form>

    <!--功能区-->
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd()"
        >新增
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate()"
        >修改
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete()"
        >删除
        </el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExcel()"
        >导出
        </el-button>
      </el-col>
    </el-row>

    <el-table :data="tableData.rows" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"/>
      <el-table-column prop="id" label="商品编号"/>
      <el-table-column prop="name" label="商品名称"/>
      <el-table-column prop="price" label="商品价格"/>
      <el-table-column label="商品图片" width="220">
        <template slot-scope="scope">
          <img :src="scope.row.picture" width="150">
        </template>
      </el-table-column>
      <el-table-column prop="score" label="商品综合评分"/>
      <el-table-column prop="bId" label="商家id"/>
      <el-table-column prop="mId" label="商品分类"/>
      <el-table-column prop="isgrounding" label="是否上架 1：上架 ，0：没上架"/>
      <el-table-column prop="createTime" label="创建时间"/>

      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button size="mini" type="text" icon="el-icon-edit" v-shop @click="handleUpdate(scope.row)">修改
          </el-button>
          <el-button size="mini" type="text" icon="el-icon-delete" v-shop @click="handleDelete(scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页条 -->
    <el-pagination
      v-if="tableData.total>0"
      :current-page="queryParam.page"
      :page-sizes="[1, 5, 10, 20,30,50,100]"
      :page-size="queryParam.size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>

    <!-- 新增和修改对话框-->
    <el-dialog
      :title="title"
      :visible.sync="open"
      width="500px"
      append-to-body
      :close-on-click-modal="false"
      :before-close="cancelForm">
      <el-form ref="form" :model="form" label-width="100px">

        <el-form-item label="商品名称" prop="name" :rules="[  { required: true, message: '该值不能为空', trigger: 'blur' }]">
          <el-input v-model="form.name" placeholder="请输入商品名称"/>
        </el-form-item>

        <el-form-item label="商品价格" prop="price" :rules="[  { required: true, message: '该值不能为空', trigger: 'blur' }]">
          <el-input v-model="form.price" placeholder="请输入商品价格"/>
        </el-form-item>

        <el-form-item label="商品图片" prop="picture" :rules="[  { required: true, message: '该值不能为空', trigger: 'blur' }]">
          <el-upload
            class="avatar-uploader"
            :action="imageUploadUrl"
            :headers="headers"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.picture" :src="form.picture" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="商品综合评分" prop="score" :rules="[  { required: true, message: '该值不能为空', trigger: 'blur' }]">
          <el-input v-model="form.score" placeholder="请输入商品综合评分"/>
        </el-form-item>

        <el-form-item label="商家id" prop="bId" :rules="[  { required: true, message: '该值不能为空', trigger: 'blur' }]">
          <el-input v-model="form.bId" placeholder="请输入商家id"/>
        </el-form-item>

        <el-form-item label="商品分类" prop="mId" :rules="[  { required: true, message: '该值不能为空', trigger: 'blur' }]">
          <el-input v-model="form.mId" placeholder="请输入商品分类"/>
        </el-form-item>

        <el-form-item label="是否上架 1：上架 ，0：没上架" prop="isgrounding" :rules="[  { required: true, message: '该值不能为空', trigger: 'blur' }]">
          <el-input v-model="form.isgrounding" placeholder="请输入是否上架 1：上架 ，0：没上架"/>
        </el-form-item>

      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancelForm">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import PageMixin from '@/mixins/PageMixin.js'
import AddOrEditMixin from '@/mixins/AddOrEditMixin.js'
import DictMixin from '@/mixins/DictMixin.js'
import { dataApi, addApi, editApi, findByIdApi, downloadExcel } from '@/api/merchandise.js'
export default {
  mixins: [DictMixin, PageMixin, AddOrEditMixin],
  dicts: [],
  data() {
    return {
      // 查询函数
      fetchDataApi: dataApi,
      // 新增函数
      addApi: addApi,
      // 新增函数
      editApi: editApi,
      // 新增函数
      findByIdApi: findByIdApi,
      primaryKey: 'id',
      // 头像放到表单哪个字段里面
      uploadField: 'picture'
    }
  },
  methods: {
    // 重置表单
    initFormValue() {
      // 头像必须要有定义
      this.form = {
        picture: undefined
      }
    },
    handleExcel() {
      this.download('/api/merchandise/download', this.queryParam, 'merchandise_data.xlsx')
    }

  },
  created() {
    this.initFormValue()
  }

}
</script>

<style>
</style>

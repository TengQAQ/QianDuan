<template>
  <div class="app-container">
    <!-- 顶部搜索区 -->
    <el-form ref="queryForm" :model="queryParam" size="small" :inline="true">
      <el-form-item label="账户名称" prop="loginName">
        <el-input
          v-model="queryParam.loginName"
          placeholder="请输入账户名称"
          clearable
          style="width: 240px"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
      </el-form-item>
    </el-form>
    <!--    顶部按钮区-->
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd()"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate()"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete()"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExcel()"
        >导出</el-button>
      </el-col>
    </el-row>
    <!--    数据表格区-->
    <el-table :data="tableData.rows" align="center" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="100" align="center" />
      <el-table-column prop="id" label="编号" />
      <el-table-column prop="loginName" label="账户" />
      <el-table-column label="性别" width="180">
        <template slot-scope="scope">
          <!--          <el-tag v-if="scope.row.gender===1" type="primary">男</el-tag>-->
          <!--          <el-tag v-else type="success">女</el-tag>-->
          <DictTag :data-array="dicts.sex" :value="scope.row.gender" />
        </template>
      </el-table-column>

      <el-table-column label="状态">
        <template slot-scope="scope">
          <!--          <el-tag v-if="scope.row.status===0" type="primary">正常</el-tag>-->
          <!--          <el-tag v-else type="danger">停用</el-tag>-->
          <DictTag :data-array="dicts.status" :value="scope.row.status" />
        </template>
      </el-table-column>

      <el-table-column label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" width="150" alt="图片">
        </template>
      </el-table-column>

      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column label="操作" fixed="right" align="center" width="200" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button size="mini" type="text" icon="el-icon-edit" @click="editApi(scope.row)">修改</el-button>
          <el-button size="mini" type="text" icon="el-icon-delete">删除</el-button>
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
      @current-change="handleCurrentChange"
    />
    <!-- 新增和修改对话框-->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body :close-on-click-modal="false" :before-close="cancelForm">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="登录名" prop="loginName" :rules="[ { required: true, message: '该值不能为空', trigger: 'blur' }]">
          <el-input v-model="form.loginName" placeholder="请输入登录名称(唯一)" :disabled="form[primaryKey]" />
        </el-form-item>

        <el-form-item v-if="!form[primaryKey]" label="密码" prop="loginPwd" :rules="[ { required: true, message: '该值不能为空', trigger: 'blur' }]">
          <el-input v-model="form.loginPwd" type="password" placeholder="请输入密码" />
        </el-form-item>

        <el-form-item v-if="!form[primaryKey]" label="确认密码" class="is-required" prop="loginPwdConfirm" :rules="[ {validator:validatePassConfirm, trigger: 'blur' }]">
          <el-input v-model="form.loginPwdConfirm" type="password" placeholder="请再次输入密码" />
        </el-form-item>

        <el-form-item label="头像" prop="avatar" :rules="[ { required: true, message: '该值不能为空', trigger: 'blur' }]">

          <el-upload
            class="avatar-uploader"
            :action="imageUploadUrl"
            :headers="headers"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="form.avatar" :src="form.avatar" class="avatar" alt="图片">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
          </el-upload>
        </el-form-item>

        <el-form-item label="性别" :rules="[ { required: true, message: '该值不能为空', trigger: 'blur' }]">
          <el-radio-group v-model="form.gender">
            <el-radio
              v-for="dict in dicts.sex"
              :key="dict.value"
              :label="dict.value"
            >{{ dict.label }}</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="状态" :rules="[{ required: true, message: '该值不能为空', trigger: 'blur' }]">
          <el-radio-group v-model="form.status">
            <el-radio
              v-for="dict in dicts.status"
              :key="dict.value"
              :label="dict.value"
            >{{ dict.label }}</el-radio>
          </el-radio-group>
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
import PageMixin from '../../mixins/PageMixin'
import DictMixin from '../../mixins/DictMixin'
import AddOrEditMixin from '../../mixins/AddOrEditMixin'
import { dataApi, addApi, editApi, findByIdApi, downloadExcel } from '@/api/employee.js'
export default {
  mixins: [DictMixin, PageMixin, AddOrEditMixin],
  dicts: ['sex', 'status'],
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
      downloadExcel: downloadExcel,
      primaryKey: 'id',
      // 头像放到表单哪个字段里面
      uploadField: 'avatar'
    }
  },
  created() {
    this.initFormValue()
  },
  methods: {
    // 重置表单
    initFormValue() {
      // 头像必须要有定义
      this.form = {
        avatar: undefined,
        gender: 0,
        status: 0
      }
    },
    validatePassConfirm(rule, value, callback) {
      console.log(value)
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.loginPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    },
    handleExcel() {
      this.download('/api/employee/download', this.queryParam, 'employee_data.xlsx')
    }
  }
}
</script>

<style>

</style>

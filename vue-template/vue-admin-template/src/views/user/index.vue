<template>
  <div class="app-container">
    <el-row>
      <el-form ref="searchForm" class="el_row_item" :inline="true" :model="inlineFormData">
        <el-form-item label="登录名称">
          <el-input v-model="inlineFormData.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="inlineFormData.phone" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="用户状态">
          <el-select v-model="inlineFormData.status" clearable placeholder="请选择状态">
            <el-option
              label="所有"
              :value="''"
            />
            <el-option
              label="正常"
              :value="1"
            />
            <el-option
              label="离职"
              :value="0"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="inlineFormData.startTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="开始时间"
          />
          -
          <el-date-picker
            v-model="inlineFormData.endTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="结束时间"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            style="background-color: #1AB394;color: #FFF;border-color:#1AB394 "
            icon="el-icon-search"
            round
            size="medium"
            @click="handleSearch"
          >搜索
          </el-button>
          <el-button
            style="background-color: #1AB394;color: #FFF;border-color:#1AB394 "
            icon="el-icon-refresh"
            round
            size="medium"
            @click="resetInlineFormData"
          >重置
          </el-button>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row style="margin-bottom: 20px">
      <el-button type="primary" style="background-color: #1C84C6;border: 1px solid #1C84C6" @click="addDialogFormVisible = true">新增用户</el-button>
      <el-button type="primary" style="background-color: #F59DA6;border:1px solid #F59DA6" :disabled="isEditEnabled" @click="modifyDialogFromVisible = true">修改用户</el-button>
      <el-button type="primary" style="background-color: #6DD9C3;border:1px solid #6DD9C3" :disabled="isDeleteEnabled" @click="handleDelete">删除用户</el-button>
    </el-row>
    <el-row>
      <el-table
        class="el_row_item"
        :data="tableData"
        stripe
        style="width: 100%"
        header-row-class-name="data_tab_header"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          prop="id"
          label="用户ID"
          width="180"
        />
        <el-table-column
          prop="username"
          label="登录名称"
          width="180"
        />
        <el-table-column
          prop="name"
          label="用户名称"
          width="180"
        />
        <el-table-column
          prop="phone"
          label="手机"
          width="180"
        />
        <el-table-column
          prop="status"
          label="用户状态"
          width="180">
          <template slot-scope="scope">
            <!--
              active-color: 设置启用时的颜色
              active-value： 自定义启用的值
              inactive-value: 自定义关闭的值
              disabled: 禁用滑块
            -->
            <el-switch
              v-model="scope.row.status"
              active-color="#13ce66"
              :active-value="1"
              :inactive-value="0"
              disabled
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="entryTime"
          label="创建时间"
          width="180"
        />
        <el-table-column
          label="操作"
        >
          <template scope>
            <!--
               active-color: 设置启用时的颜色
               active-value： 自定义启用的值
               inactive-value: 自定义关闭的值
               disabled: 禁用滑块
             -->
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="inlineFormData.pageNum"
        :page-size="inlineFormData.pageSize"
        :total="total"
        @current-change="changePageNum"
      />
    </el-row>
    <el-dialog title="新增用户" :visible.sync="addDialogFormVisible" @close="resetDialogForm">
      <el-form ref="addUserForm" :model="userAddForm" label-width="80px" :rules="rules">
        <el-form-item label="用户名称" prop="username">
          <el-input v-model="userAddForm.username" placeholder="请输入用户登录名称" />
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input v-model="userAddForm.password" placeholder="请输入用户密码" />
        </el-form-item>
        <el-form-item label="用户姓名" prop="name">
          <el-input v-model="userAddForm.name" placeholder="请输入用户姓名" />
        </el-form-item>
        <el-form-item label="用户电话" prop="phone">
          <el-input v-model="userAddForm.phone" placeholder="请输入用户电话" />
        </el-form-item>
        <el-form-item label="用户状态">
          <el-radio v-model="userAddForm.status" :label="1">正常</el-radio>
          <el-radio v-model="userAddForm.status" :label="0">离职</el-radio>
        </el-form-item>
        <el-form-item label="所属部门" prop="ofDepartment">
          <el-input v-model="userAddForm.ofDepartment" placeholder="请输入用户所属部门" />
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker
            v-model="userAddForm.entryTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="开始时间"
          />
          -
          <el-date-picker
            v-model="userAddForm.updateTime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="结束时间"
          />
        </el-form-item>
        <el-form-item label="职位" prop="position">
          <!--          <el-input v-model="userAddForm.position" placeholder="请输入用户职位" />-->
          <el-radio v-model="userAddForm.position" :label="1">员工</el-radio>
          <el-radio v-model="userAddForm.position" :label="0">负责人</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button @click="addDialogFormVisible = false">取消</el-button>
          <el-button type="primary" :loading="userAddFormIsLoading" @click="onSubmit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { addEmployee, deleteEmployeeByPK, selectAllEmployees } from '@/api/goodsInfo'

export default {
  name: 'Index',
  data() {
    return {
      inlineFormData: {
        username: null,
        phone: null,
        status: null,
        startTime: null,
        endTime: null,
        pageNum: 1,
        pageSize: 5
      },
      tableData: [],
      total: 0,
      userAddForm: {},
      addDialogFormVisible: false,
      userAddFormIsLoading: false,
      multipleSelection: [],
      // isEditEnabled: false,
      // isDeleteEnabled: false,
      rules: {
        // required: 属性不能为空
        // message: 当属性为空的提示信息
        // trigger: 如果触发表单校验, blur是一个js中事件名，当文本框失去焦点时触发
        username: [{ required: true, message: '登录名称不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '登录密码不能为空', trigger: 'blur' }],
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        phone: [{ required: true, message: '电话不能为空', trigger: 'blur' }],
        status: [{ required: true, message: '状态不能为空', trigger: 'blur' }],
        ofDepartment: [{ required: true, message: '所属部门不能为空', trigger: 'blur' }],
        entryTime: [{ required: true, message: 'entryTime不能为空', trigger: 'blur' }],
        updateTime: [{ required: true, message: 'updateTime不能为空', trigger: 'blur' }]
      }
    }
  },
  computed: {
    isEditEnabled() {
      // 修改按钮是否启用由用户的多选决定
      // 如果用户没有多选，或者选择了多个，则不允许修改，如果选择了一个，则允许修改
      return this.multipleSelection.length !== 1
    },
    isDeleteEnabled() {
      // 如果没有选择数据，则不启用删除按钮
      return this.multipleSelection.length === 0
    }
  },
  methods: {
    handleSearch() {
      // 搜索框呗单击调用查询方法返回
      this.fetchList()
    },
    resetInlineFormData() {
      this.inlineFormData = {
        username: undefined,
        phone: undefined,
        status: undefined,
        startTime: undefined,
        endTime: undefined,
        pageNum: 1,
        pageSize: 5
      }
      this.$refs['searchForm'].resetFields()
    },
    changePageNum(pageNum) {
      this.inlineFormData.pageNum = pageNum
      this.fetchList()
    },
    fetchList() {
      console.log('发起请求重载数据', this.inlineFormData.pageNum)
      selectAllEmployees(this.inlineFormData).then((resp) => {
        console.log('正在更新页面数据', resp)
        const { list, pageSize, pageNum, total } = resp.data
        this.tableData = list
        this.inlineFormData.pageNum = pageNum
        this.inlineFormData.pageSize = pageSize
        this.total = total
      }).catch(() => {
        this.$notify({
          title: '无法连接到服务器',
          message: '无法连接到服务器，请确认网络连接是否可用',
          type: 'error',
          position: 'top-right'
        })
      })
    },
    onSubmit() {
      this.userAddFormIsLoading = true
      addEmployee(this.userAddForm).then((resp) => {
        console.log('成功，新增用户数据：', resp)
        const { data } = resp
        this.$notify({
          title: '成功',
          message: data.goodsId + '新增成功',
          type: 'success',
          position: 'top-right'
        })
        this.fetchList()
      }).catch((resp) => {
        console.log('失败，新增用户数据：', resp)
      }).finally(() => {
        this.userAddFormIsLoading = false
        this.addDialogFormVisible = false
      })
    },
    modifyDialogFromVisible() {
      console.log('修改按钮')
    },
    handleDelete() {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => { // 点击确定后执行的回调函数
        // 批量删除的方法
        const delete_ids = this.multipleSelection.map(item => item.id)
        console.log('要删除的数据的id：', delete_ids)
        deleteEmployeeByPK(delete_ids).then(
          this.$notify({
            title: '成功',
            message: '删除成功',
            type: 'success',
            position: 'top-right'
          }),
          this.fetchList()
        )
      }).catch(
        console.log('删除数据发生异常')
      )
    },
    resetDialogForm() {
      this.$refs['addUserForm'].resetFields()
      this.addUserForm = {
        username: '',
        password: '',
        name: '',
        phone: '',
        status: '',
        ofDepartment: '',
        entryTime: '',
        updateTime: ''
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  },
  created() {
    // 当页面的vue实例化后，执行查询数据的方法
    this.fetchList()
  }
}
</script>
<style scoped>
.el_row_item{
  background: #fff;
  padding: 20px 20px 0px 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 5px #ddd7d7;
  margin-bottom: 15px;
}
/*.data_tab_header{*/
/*  background-color: #1482f0;*/
/*}*/
</style>

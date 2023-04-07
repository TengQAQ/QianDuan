<template>
  <div class="app-container">
    <el-row class="row">
      <el-row>
        <el-button type="primary" icon="el-icon-plus">新增</el-button>
        <el-button type="primary" icon="el-icon-edit">修改</el-button>
      </el-row>

      <el-row>
        <el-table
          :data="tableData"
          :tree-props="{ children: 'children' }"
          style="width: 100%;margin-top: 20px;"
          stripe
          header-row-class-name="data_tab_header"
          row-key="rowKey"
          @selection-change="handleSelectionChange"
        >
          <el-table-column prop="name" label="部门名称" width="200"/>
          <el-table-column prop="level" label="排序" width="200"/>
          <el-table-column prop="status" label="状态" width="200">
            <template slot-scope="scope">
              {{ scope.row.status === 1 ? "正常":"异常" }}
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="200"/>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="isUpdateClicked">修改</el-button>
              <el-button type="text" size="small">删除</el-button>
              <el-button type="text" size="small" v-if="!scope.row.rowKey.startsWith('dept:')" @click="isClicked(scope.row)">新增下级分类</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-dialog title="新增" :visible.sync="formDialog" @close="resetForm">
        <el-form ref="form" :rules="commonFormRules" :model="AddSubmitData" label-width="80px">
          <el-form-item label="上级">
            <el-input v-model="AddSubmitData.parentName" disabled />
          </el-form-item>
          <el-form-item label="名称" prop="name">
            <el-input v-model="AddSubmitData.name" />
          </el-form-item>
          <el-form-item label="状态">
            <el-radio-group v-model="AddSubmitData.status">
              <el-radio :label="1">正常</el-radio>
              <el-radio :label="0">异常</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="创建时间" prop="createTime">
            <el-date-picker
              v-model="AddSubmitData.createTime"
              type="date"
              value-format="yyyy-MM-dd"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="排序" prop="level">
            <el-input-number v-model="AddSubmitData.level" :min="0" label="值越大排序越靠后" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="commonFormIsLoading" @click="submitForm">立即创建</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-row>
  </div>
</template>

<script>
import { selectAllDepartments } from '@/api/department'
export default {
  name: 'Index',
  data() {
    return {
      tableData: [],
      handleSelectionChange: [],
      AddSubmitData: {
        name: undefined,
        status: 1,
        createTime: undefined,
        level: 1,
        parentName: undefined,
        parentId: undefined,
        parentRowKey: undefined
      },
      formDialog: false,
      commonFormIsLoading: false,
      commonFormRules: {
        name: [
          { required: true, message: '名称不能为空', trigger: 'blur' }
        ],
        createTime: [
          { required: true, message: '创建日期不能为空', trigger: 'blur' }
        ],
        level: [{ required: true, message: '排序不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    fetchList() {
      selectAllDepartments().then(resp => {
        this.tableData = resp.data
      })
    },
    isClicked(row) {
      // console.log(row)
      this.formDialog = true
      this.AddSubmitData.parentName = row.name
      this.commonFormIsLoading = true
      this.AddSubmitData.parentRowKey = row.rowKey
      // 具体操作
      this.commonFormIsLoading = false
    },
    isUpdateClicked() {
      console.log('修改被点击')
    },
    submitForm() {
      console.log('提交')
    },
    resetForm() {
      this.AddSubmitData = {
        name: undefined,
        status: 1,
        createTime: undefined,
        level: 1,
        parentName: undefined,
        parentId: undefined,
        parentRowKey: undefined
      }
      //  重置表单状态
      this.$refs['form'].resetFields()
    }
  },
  created() {
    this.fetchList()
  }
}
</script>

<style scoped>
.row {
  background: #fff;
  padding: 20px 20px 0px 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 5px #ddd7d7;
  margin-bottom: 15px;
}

/*
 >>> vue中的深度选择器
 当前页面中需要对element-ui组件的样式进行自定义
*/
.el-table >>> .data_tab_header th {
  background: rgb(239, 243, 248);
}
</style>

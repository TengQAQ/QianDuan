<template>
  <div class="app-container">
    <el-row>
      <el-row>
        <el-col :span="20">
          <el-input v-model="inlineData.name" style="width: 200px" size="small" prefix-icon="el-icon-search" placeholder="请输入员工姓名进行搜索" />
          <el-button style="background-color: #1482f0;color: white" size="small" @click="searchButton">查询</el-button>
          <el-button style="background-color: #1482f0;color: white" size="small">高级查询</el-button>
        </el-col>
        <el-col :span="4">
          <el-button style="background-color: #67C23A;color: white" size="small">导入数据</el-button>
          <el-button style="background-color: #67C23A;color: white" size="small">导出数据</el-button>
          <el-button style="background-color: #1482f0;color: white" size="small" @click="addEmp">新增用户</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-table
          :data="EmpData"
          style="width: 100%;margin-top: 20px;"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            type="selection"
            width="55"
          />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="id" label="工号" />
          <el-table-column prop="gender" label="性别" />
          <el-table-column prop="idcard" width="180" label="身份证号" />
          <el-table-column prop="wedlock" label="婚姻状态" />
          <el-table-column prop="nName" label="民族" />
          <el-table-column prop="nativeplace" label="籍贯" />
          <el-table-column prop="pName" label="政治面貌" />
          <el-table-column prop="email" width="170" label="邮箱" />
          <el-table-column prop="phone" width="170" label="电话号码" />
          <el-table-column prop="address" width="170" label="联系地址" />
          <el-table-column prop="dName" label="所属部门" />
          <el-table-column prop="jName" label="职称" />
          <el-table-column prop="posid" label="职位" />
          <el-table-column prop="engageform" label="聘用形式" />
          <el-table-column prop="tiptopdegree" label="最高学历" />
          <el-table-column prop="specialty" width="180" label="所属专业" />
          <el-table-column prop="school" label="毕业院校" />
          <el-table-column prop="begindate" width="180" label="入职日期" />
          <el-table-column prop="workstate" label="在职状态" />
          <el-table-column prop="workid" label="工号" />
          <el-table-column prop="contractterm" label="合同期限" />
          <el-table-column prop="conversiontime" width="180" label="转正日期" />
          <el-table-column prop="notworkdate" label="离职日期" />
          <el-table-column prop="begincontract" width="180" label="合同起始日期" />
          <el-table-column prop="endcontract" width="180" label="合同终止日期" />
          <el-table-column prop="workage" label="工龄" />
          <el-table-column fixed="right" width="200" label="操作">
            <template scope="scope">
              <el-button style="background-color: white;color: black;border: 1px solid #2b2f3a" type="text" size="mini" @click="editer(scope.row)">编辑</el-button>
              <el-button style="background-color: #67C23A;color: white" type="text" size="mini">查看高级资料</el-button>
              <el-button style="background-color: #1482f0;color: white" type="text" size="mini">删除</el-button>
              <!--              <el-button type="text" @click="editer(scope.row)" size="small">查看配偶</el-button>-->
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="inlineData.pageNum"
          :page-size="inlineData.pageSize"
          :total="total"
          @current-change="changePageNum"
        />
      </el-row>
    </el-row>
    <el-dialog ref="title" :visible.sync="addDialogVisible">
      <el-form ref="dialog" :model="addInfo" :rules="addRules" @close="dialogClose">
        <el-row>
          <el-col :span="6">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="addInfo.name" prefix-icon="el-icon-edit" style="width: 150px" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="性别" prop="gender">
              <template>
                <el-select v-model="addInfo.gender" style="width: 120px" placeholder="请选择">
                  <el-option key="男" value="男" />
                  <el-option key="女" value="女" />
                </el-select>
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="出生日期">
              <el-date-picker
                v-model="addInfo.birthday"
                style="width: 120px"
                type="date"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="政治面貌">
              <el-select v-model="addInfo.politicid" style="width: 100px" placeholder="请选择">
                <el-option
                  v-for="item in politics"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="民族">
              <el-select v-model="addInfo.nName" style="width: 100px" placeholder="请选择">
                <el-option
                  v-for="item in nations"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="籍贯">
              <el-input v-model="addInfo.nativeplace" style="width: 100px" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="电子邮件">
              <el-input v-model="addInfo.email" prefix-icon="el-icon-edit" style="width: 100px" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="联系地址">
              <el-input v-model="addInfo.address" prefix-icon="el-icon-edit" style="width: 100px" placeholder="请输入" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="职位">
              <el-input v-model="addInfo.posid" style="width: 100px" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="职称">
              <el-select v-model="addInfo.jName" style="width: 100px" placeholder="请选择">
                <el-option
                  v-for="item in jobs"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="所属部门">
              <el-select v-model="addInfo.departmentid" style="width: 100px" placeholder="请选择">
                <el-option
                  v-for="item in depts"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="电话号码">
              <el-input v-model="addInfo.phone" prefix-icon="el-icon-phone" style="width: 100px" placeholder="请输入" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="工号">
              <el-input v-model="addInfo.workid" style="width: 100px" placeholder="请勿输入" :disabled="true" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="学历">
              <el-input v-model="addInfo.tiptopdegree" style="width: 100px" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="毕业院校">
              <el-input v-model="addInfo.school" style="width: 100px" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="专业名称">
              <el-input v-model="addInfo.specialty" style="width: 100px" placeholder="请输入" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="入职日期">
              <el-date-picker
                v-model="addInfo.begindate"
                style="width: 120px"
                type="date"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="转正日期">
              <el-date-picker
                v-model="addInfo.begindate"
                style="width: 120px"
                type="date"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同起始日期">
              <el-date-picker
                v-model="addInfo.begindate"
                style="width: 120px"
                type="date"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="合同终止日期">
              <el-date-picker
                v-model="addInfo.begindate"
                style="width: 120px"
                type="date"
                placeholder="选择日期"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="身份证号码">
              <el-input v-model="addInfo.idcard" style="width: 100px" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="聘用形式">
              <template>
                <el-radio v-model="addInfo.engageform" label="劳动合同">劳动合同</el-radio>
                <el-radio v-model="addInfo.engageform" label="劳务合同">劳务合同</el-radio>
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="婚姻状况">
              <template>
                <el-radio v-model="addInfo.wedlock" label="未婚">未婚</el-radio>
                <el-radio v-model="addInfo.wedlock" label="已婚">已婚</el-radio>
                <el-radio v-model="addInfo.wedlock" label="离异">离异</el-radio>
              </template>
            </el-form-item>
          </el-col>
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
import { addEmp, allDept, allEmpInfo, allJob, allNation, allPolit, updateEmp } from '@/api/emp'

export default {
  name: 'Employee',
  data() {
    return {
      inlineData: {
        name: undefined,
        pageNum: undefined,
        pageSize: undefined
      },
      EmpData: [],
      total: undefined,
      multipleSelection: [],
      addDialogVisible: false,
      politics: [],
      nations: [],
      isUpdata: false,
      jobs: [],
      depts: [],
      addInfo: {
        name: undefined,
        departmentid: undefined,
        gender: undefined,
        birthday: undefined,
        idcard: undefined,
        wedlock: undefined,
        nName: undefined,
        nativeplace: undefined,
        politicid: undefined,
        pName: undefined,
        email: undefined,
        phone: undefined,
        address: undefined,
        dName: undefined,
        jName: undefined,
        posid: undefined,
        engageform: undefined,
        tiptopdegree: undefined,
        specialty: undefined,
        school: undefined,
        begindate: undefined,
        workstate: undefined,
        workid: undefined,
        contractterm: undefined,
        conversiontime: undefined,
        notworkdate: undefined,
        begincontract: undefined,
        endcontract: undefined,
        workage: undefined
      },
      addRules: {
        name: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        departmentid: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        gender: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        birthday: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        idcard: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        wedlock: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        nativeplace: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        politicid: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        email: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        phone: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        address: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        posid: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        engageform: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        tiptopdegree: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        specialty: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        school: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        begindate: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        workstate: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        workid: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        contractterm: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        conversiontime: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        notworkdate: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        begincontract: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        endcontract: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }],
        workage: [{ required: true, message: '商品名称不能为空', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.refresh()
  },
  methods: {
    changePageNum(row) {
      console.log('页码发生变化', row)
      this.inlineData.pageNum = row
      this.refresh()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      // const delete_ids = this.multipleSelection.map(item => item.elementaryId)
      console.log('多选列表', this.multipleSelection)
    },
    searchButton() {
      allEmpInfo(this.inlineData).then(resp => {
        this.EmpData = resp.data
        this.inlineData.pageNum = resp.data.pageNum
        this.inlineData.pageSize = resp.data.pageSize
        this.total = resp.data.total
        console.log(resp.data)
      })
    },
    addEmp() {
      // addEmp()
      this.addDialogVisible = true
      console.log('新增用户')
    },
    addSubmitButton() {
      console.log('提交新用户数据')
      this.$refs['dialog'].validate(va => {
        if (va) {
          if (!this.isUpdata) {
            addEmp(this.addInfo).then(resp => {
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
            updateEmp(this.addInfo).then(resp => {
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
            message: '新增失败，请重新尝试',
            type: 'error',
            position: 'top-right'
          })
        }
      })
    },
    editer(row) {
      this.isUpdata = true
      this.addDialogVisible = true
      this.$refs['title'].title = '修改员工信息'
      console.log(row)
      this.addInfo = row
    },
    addCancelButton() {
      this.$refs['title'].title = '新增员工信息'
      this.addDialogVisible = false
      this.$refs['dialog'].resetFields()
      this.addInfo = {
        name: undefined,
        departmentid: undefined,
        gender: undefined,
        birthday: undefined,
        idcard: undefined,
        wedlock: undefined,
        nName: undefined,
        nativeplace: undefined,
        politicid: undefined,
        pName: undefined,
        email: undefined,
        phone: undefined,
        address: undefined,
        dName: undefined,
        jName: undefined,
        posid: undefined,
        engageform: undefined,
        tiptopdegree: undefined,
        specialty: undefined,
        school: undefined,
        begindate: undefined,
        workstate: undefined,
        workid: undefined,
        contractterm: undefined,
        conversiontime: undefined,
        notworkdate: undefined,
        begincontract: undefined,
        endcontract: undefined,
        workage: undefined
      }
    },
    dialogClose() {
      this.$refs['dialog'].resetFields()
      this.addInfo = {
        name: undefined,
        departmentid: undefined,
        gender: undefined,
        birthday: undefined,
        idcard: undefined,
        wedlock: undefined,
        nName: undefined,
        nativeplace: undefined,
        politicid: undefined,
        pName: undefined,
        email: undefined,
        phone: undefined,
        address: undefined,
        dName: undefined,
        jName: undefined,
        posid: undefined,
        engageform: undefined,
        tiptopdegree: undefined,
        specialty: undefined,
        school: undefined,
        begindate: undefined,
        workstate: undefined,
        workid: undefined,
        contractterm: undefined,
        conversiontime: undefined,
        notworkdate: undefined,
        begincontract: undefined,
        endcontract: undefined,
        workage: undefined
      }
    },
    refresh() {
      allEmpInfo(this.inlineData).then(resp => {
        this.EmpData = resp.data.list
        this.inlineData.pageNum = resp.data.pageNum
        this.inlineData.pageSize = resp.data.pageSize
        this.total = resp.data.total
        console.log(resp.data)
      })
      allPolit().then(resp => {
        this.politics = resp.data
      })
      allNation().then(resp => {
        this.nations = resp.data
      })
      allDept().then(resp => {
        this.depts = resp.data
      })
      allJob().then(resp => {
        this.jobs = resp.data
      })
    }
  }
}
</script>

<style scoped>

</style>

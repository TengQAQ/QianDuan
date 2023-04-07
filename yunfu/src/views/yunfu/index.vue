<template>
  <div class="app-container">
    <el-row>
      <el-form :inline="true" :model="inlineData">
          <el-form-item label="职业">
          <el-select v-model="inlineData.occupation" placeholder="请选择">
            <el-option
              v-for="item in occupation"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="婚姻">
          <el-select v-model="inlineData.marriageOtherId" placeholder="请选择">
            <el-option
              v-for="item in marriage"
              :key="item.otherId"
              :label="item.otherName"
              :value="item.otherId"
            />
          </el-select>
        </el-form-item>
        <el-button style="background-color: #1482f0;color: white" @click="searchButton">查询</el-button>
      </el-form>
    </el-row>
    <el-row style="margin-bottom: 20px">
      <el-button type="primary" style="background-color: #67C23A;border:1px solid #67C23A"  @click="addInformationButton()">新增孕妇信息</el-button>
      <el-button type="primary" style="background-color: red;border:1px solid red" :disabled="isDeleteEnabled">批量删除</el-button>
    </el-row>
    <el-row>
      <el-table
        :data="womanData"
        style="width: 100%;margin-top: 20px;"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="numberId" label="身份证" />
        <el-table-column prop="occupation" label="职业"/>
        <el-table-column prop="age" label="年龄"/>
        <el-table-column prop="smokingOtherId" label="是否吸烟"/>
        <el-table-column prop="marriageOtherId" label="婚姻状态">
          <template scope="scope">
            <p v-if="scope.row.marriageOtherId=='45'">已婚</p>
            <p v-if="scope.row.marriageOtherId=='44'">未婚</p>
          </template>
        </el-table-column>
        <el-table-column prop="drinkOtherId" label="是否饮酒"/>
        <el-table-column prop="hrOtherId" label="HR类型"/>
        <el-table-column label="操作">
          <template scope="scope">
              <el-button type="text" @click="viewSpouse(scope.row)" size="small">查看配偶</el-button>
            <el-button type="text" size="small">详情</el-button>
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
    <el-dialog title="新增孕妇信息" :visible.sync="addDialogFormVisible">
      <el-form :model="addInformation">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名">
              <el-input v-model="addInformation.name" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="身份证">
              <el-input v-model="addInformation.numberId" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="年龄">
              <el-input v-model="addInformation.age" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="结婚年龄">
              <el-input v-model="addInformation.marriageAge" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="民族">
              <el-input v-model="addInformation.nation" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="籍贯">
              <el-input v-model="addInformation.place" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="职业">
              <el-input v-model="addInformation.occupation" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="文化水平">
              <el-input v-model="addInformation.culture" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别">
              <el-select v-model="addInformation.gender">
                <el-option
                  v-for="item in gender"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                  />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item label="孕前身高">
              <el-input v-model="addInformation.progestationHeight" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="孕前体重">
              <el-input v-model="addInformation.progestationWeight" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="孕后体重">
              <el-input v-model="addInformation.rearWeight" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="孕前BMI">
              <el-input v-model="addInformation.progestationBmi" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="孕后BMI">
              <el-input v-model="addInformation.rearBmi" style="width: 100px" placeholder="请输入"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="婚姻状态">
              <el-select placeholder="请选择" v-model="addInformation.marriageOtherId">
                <el-option
                  v-for="item in marriage"
                  :key="item.otherId"
                  :label="item.otherName"
                  :value="item.otherId"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="血型">
              <el-select placeholder="请选择" v-model="addInformation.bloodOtherId">
                <el-option
                  v-for="item in bloods"
                  :key="item.otherId"
                  :label="item.otherName"
                  :value="item.otherId"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="HR">
              <el-select placeholder="请选择" v-model="addInformation.bloodOtherId">
                <el-option
                  v-for="item in bloodtypes"
                  :key="item.otherId"
                  :label="item.otherName"
                  :value="item.otherId"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item placeholder="请选择" label="是否抽烟">
              <el-select placeholder="请选择" v-model="addInformation.smokingOtherId">
                <el-option
                  v-for="item in generals"
                  :key="item.otherId"
                  :label="item.otherName"
                  :value="item.otherId"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="是否饮酒">
              <el-select placeholder="请选择" v-model="addInformation.drinkOtherId">
                <el-option
                  v-for="item in generals"
                  :key="item.otherId"
                  :label="item.otherName"
                  :value="item.otherId"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :span="24">
          <el-col :offset="18">
            <el-button type="primary" @click="addSubmitButton">提交</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { insertEle, selectAllElement, selectOccupation, selectTableName, viewScope } from '@/api/Element'

export default {
  name: 'Index',
  data() {
    return {
      inlineData: {
        occupation: undefined,
        marriageOtherId: undefined,
        pageNum: 1,
        pageSize: 5
      },
      womanData: [],
      total: undefined,
      marriage: [],
      occupation: [],
      bloods: [],
      bloodtypes: [],
      generals: [],
      gender: [
        {
          id: 1,
          name: '男'
        },
        {
          id: 0,
          name: '女'
        }
      ],
      addDialogFormVisible: false,
      addInformation: {
        name: undefined,
        numberId: undefined,
        age: undefined,
        marriageAge: undefined,
        nation: undefined,
        place: undefined,
        occupation: undefined,
        culture: undefined,
        gender: undefined,
        progestationHeight: undefined,
        progestationWeight: undefined,
        rearWeight: undefined,
        progestationBmi: undefined,
        rearBmi: undefined,
        marriageOtherId: undefined,
        bloodOtherId: undefined,
        hrOtherId: undefined,
        smokingOtherId: undefined,
        drinkOtherId: undefined
      },
      multipleSelection: []
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
    refreshList() {
      console.log(this.inlineData.marriageOtherId)
      selectAllElement(this.inlineData).then((resp) => {
        console.log(resp)
        this.womanData = resp.data.list
        this.inlineData.pageNum = resp.data.pageNum
        this.inlineData.pageSize = resp.data.pageSize
        this.total = resp.data.total
      }).catch(
        console.log('获取数据失败')
      )
    },
    changePageNum(row) {
      // console.log(row)
      this.inlineData.pageNum = row
      this.refreshList()
    },
    selectSearch() {
      selectTableName('marriage').then(resp => {
        this.marriage = resp.data
        console.log('测试', this.marriage)
      })
      selectOccupation('occupation').then(resp => {
        this.occupation = resp.data
        console.log('测试', this.occupation)
      })
      selectTableName('blood').then(resp => {
        this.bloods = resp.data
        console.log('测试', this.bloods)
      })
      selectTableName('bloodtype').then(resp => {
        this.bloodtypes = resp.data
        console.log('测试', this.bloodtypes)
      })
      selectTableName('general').then(resp => {
        this.generals = resp.data
        console.log('测试', this.bloodtypes)
      })
    },
    searchButton() {
      this.refreshList()
    },
    addInformationButton() {
      this.addDialogFormVisible = true
    },
    addSubmitButton() {
      insertEle(this.addInformation).then(resp => {
        console.log(resp)
      })
      this.addDialogFormVisible = !this.addDialogFormVisible
      this.refreshList()
    },
    viewSpouse(row) {
      console.log(row.elementaryId)
      viewScope(row.elementaryId).then(resp => {
        console.log(resp.data)
      }).catch(
        console.log('数据请求失败')
      )
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
      const delete_ids = this.multipleSelection.map(item => item.elementaryId)
      console.log(delete_ids)
    }
  },
  created() {
    this.refreshList()
    this.selectSearch()
  }
}
</script>

<style scoped>

</style>

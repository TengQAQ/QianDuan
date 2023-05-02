<template>
  <div class="app-container">

    <el-row :gutter="20">
      <el-col :span="6">
        数据库列表

        <ul class="tablelist">
          <li
            v-for="item in tableNameList"
            :key="item.ROWNUM"
            :class="{active: currentItem && currentItem.ROWNUM===item.ROWNUM }"
            @click="showTableColumns(item)"
          >
            {{ item.TABLENAME }}
            <br>
            {{ item.COMMENTS }}
          </li>
        </ul>
      </el-col>

      <el-col :span="18">

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>选择要生成的代码文件</span>
          </div>
          <div class="text item">

            <el-button v-if="currentItem" type="success" @click="btnTplSave">保存配置信息</el-button>

            <el-tooltip
              v-if="allowdownload"
              class="item"
              effect="dark"
              content="修改生成列先要保存,方可生效"
              placement="bottom"
            >
              <el-button type="primary" @click="downloadZip">下载代码文件</el-button>
            </el-tooltip>

          </div>
        </el-card>

        <el-table :data="columnList" border style="width: 100%" :row-class-name="rowClassName">
          <el-table-column prop="num" label="编号" width="80" />
          <el-table-column prop="comments" label="说明" />
          <el-table-column prop="columnName" label="列名" />

          <el-table-column prop="columnName" label="数据库类型">
            <template slot-scope="scope">
              {{ scope.row.dataType }}({{ scope.row.dataLength }})
            </template>
          </el-table-column>

          <el-table-column label="java字段" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.javaField" />
            </template>
          </el-table-column>

          <el-table-column label="java类型">
            <template slot-scope="scope">
              <el-select v-model="scope.row.javaDataType" placeholder="请选择">
                <el-option
                  v-for="item in javaType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </template>
          </el-table-column>

          <el-table-column label="查询字段" align="center">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.searchField" />
            </template>
          </el-table-column>

          <el-table-column label="vue表格字段" align="center">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.tableField" />
            </template>
          </el-table-column>

          <el-table-column label="vue显示类型" align="center">
            <template slot-scope="scope">

              <el-select v-model="scope.row.vueType" placeholder="请选择">
                <el-option
                  v-for="item in vueTypeList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>

            </template>
          </el-table-column>

          <el-table-column label="vue自定义判断" align="center">
            <template slot-scope="scope">
              <el-input
                v-if="scope.row.vueType===3"
                v-model="scope.row.convertValue"
                placeholder="0=男:1=女"
              />
            </template>
          </el-table-column>

        </el-table>

      </el-col>
    </el-row>

  </div>
</template>

<script>
import { tablesAPI, columnByTableAPI, tplSaveAPI } from '@/api/autocode.js'

export default {
  data() {
    return {
      // 当前选中的哪一个数据库表
      currentItem: null,
      tableNameList: [],
      columnList: [],
      allowdownload: false,
      javaType: [
        { lable: 'Short', value: 'Short' },
        { lable: 'Integer', value: 'Integer' },
        { lable: 'Long', value: 'Long' },
        { lable: 'BigDecimal', value: 'BigDecimal' },
        { lable: 'Date', value: 'Date' },
        { lable: 'String', value: 'String' }
      ],
      vueTypeList: [
        { label: '文字', value: 1 },
        { label: '图片', value: 2 },
        { label: '标签判断', value: 3 }
      ]
    }
  },
  created() {
    this.initAllTables()
  },
  methods: {
    initAllTables() {
      tablesAPI().then(resp => {
        this.tableNameList = resp.data
      })
    },
    // 点击表，显示表明细
    showTableColumns(item) {
      console.log(item)
      this.currentItem = item
      columnByTableAPI(item.TABLENAME).then(resp => {
        const map = resp.data
        this.columnList = map.data
        this.allowdownload = map.allowdownload
      })
    },
    // 为element-ui 表格添加行号
    rowClassName({ row, rowIndex }) {
      if (!row.num) {
        // 脏数据  https://v2.cn.vuejs.org/v2/api/#Vue-set
        // row.num = rowIndex+1;
        this.$set(row, 'num', rowIndex + 1)
      }
    },
    // 保存配置模板信息
    btnTplSave() {
      this.$confirm('确定要保存配置信息吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        tplSaveAPI(this.currentItem.TABLENAME, this.columnList).then(resp => {
          this.$message('操作成功')
        })
      }).catch(() => {

      })
    },
    // 下载代码zip包
    downloadZip() {
      console.log('下载按钮被点击')
      const data = {
        'tableName': this.currentItem.TABLENAME,
        'tableDesc': this.currentItem.COMMENTS
      }
      this.download('/api/code/gen', data, this.currentItem.TABLENAME + '.zip')
    }
  }
}
</script>

<style scoped="scoped">
.tablelist {
  list-style: none;
}

.tablelist li {
  margin: 5px 0;
  padding: 5px 0;
}

.tablelist li:hover {
  background-color: #dfe6ec;
}

.tablelist li.active {
  background-color: #dfe6ec;
}
</style>

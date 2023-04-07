<template>
  <el-row>
    <el-form ref="searchForm" class="el_row_item" :inline="true" :model="YunfuData">
      <el-form-item label="登录名称">
        <el-input v-model="YunfuData.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="YunfuData.phone" placeholder="请输入手机号码" />
      </el-form-item>
      <el-form-item label="用户状态">
        <el-select v-model="YunfuData.status" clearable placeholder="请选择状态">
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
          v-model="YunfuData.startTime"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="开始时间"
        />
        -
        <el-date-picker
          v-model="YunfuData.endTime"
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
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style scoped>

</style>

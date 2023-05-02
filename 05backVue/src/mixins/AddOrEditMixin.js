import { getToken } from '@/utils/auth'

export default {
  computed: {
    headers() {
      return { 'Authorization': 'Bearer ' + getToken() }
    }
  },
  data() {
    return {
      // 新增或修改用表单
      title: undefined,
      form: {},
      open: false,
      // rules: {},
      // 显示详情
      openDetail: false,
      detailTitle: '详情显示',
      formDetail: {},
      // 头像上传url
      imageUploadUrl: process.env.VUE_APP_BASE_API + '/api/upload/image',
      // 头像上传后的form表单的字段名
      uploadField: undefined
    }
  },
  methods: {
    // 表单重置
    cancelForm() {
      this.open = false
      this.rest()
    },
    // 清空表单的值
    rest() {
      // element-ui内置方法
      if (this.$refs['form']) {
        this.$refs['form'].resetFields()
      }
      // 自定义初始化值
      this.initFormValue()
    },
    // 初始化值
    initFormValue() {
    },
    // 上传图片之前的验证
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt1M = file.size / 1024 / 1024 < 1

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG、PNG 格式!')
      }
      if (!isLt1M) {
        this.$message.error('上传图片大小不能超过 1MB!')
      }
      return isJPG && isLt1M
    },
    // 上传成功以后赋值
    handleAvatarSuccess(res, file) {
      if (res.code === 200) {
        if (this.uploadField) {
          this.form[this.uploadField] = res.data.image_url
        } else {
          this.$message.error('必须先创建名为uploadField变量，声明给form表单哪个字段赋值')
        }
      } else {
        this.$message.error(res.msg)
      }
    },
    // 新增
    handleAdd() {
      this.title = '新增数据'

      console.log('---添加新增之前的钩子函数,preAddHandler()------')
      // 如果有这个变量
      if (this.preAddHandler && this.preAddHandler instanceof Function) {
        this.preAddHandler()
      }

      this.open = true

      console.log('---添加新增之后的钩子函数,postAddHandler()------')
      // 如果有这个变量
      if (this.postAddHandler && this.postAddHandler instanceof Function) {
        this.postAddHandler()
      }
    },
    // 修改
    handleUpdate(row) {
      this.title = '编辑数据'
      // 得到要编辑的主键
      const id = row ? row[this.primaryKey] : this.ids[0]

      // 查询数据
      if (this.findByIdApi) {
        this.open = true

        console.log('---定义修改之前的钩子函数,preEditHandler(id)------')
        // 如果有这个变量
        if (this.preEditHandler && this.preEditHandler instanceof Function) {
          this.preEditHandler(id)
        }

        // 查询数据库的值
        this.findByIdApi(id).then(resp => {
          this.form = resp.data

          console.log('---定义修改之后的钩子函数,postEditHandler(id)------')
          // 如果有这个变量
          if (this.postEditHandler && this.postEditHandler instanceof Function) {
            this.postEditHandler(id)
          }
        }).catch(e => {
          this.open = false
        })
      } else {
        this.$message.error('必须先创建名为findByIdApi变量，根据主键查询数据')
        return
      }
    },
    // 查看详情
    handleView(row) {
      // 查询数据
      if (this.findByIdApi) {
        console.log('---定义显示详情之前的钩子函数,preViewHandler(id)------')
        if (this.preViewHandler && this.preViewHandler instanceof Function) {
          this.preViewHandler(row[this.primaryKey])
        }

        this.findByIdApi(row[this.primaryKey]).then(resp => {
          this.formDetail = resp.data
          this.openDetail = true
        })
      } else {
        this.$message.error('必须先创建名为findByIdApi的变量，根据主键查询数据')
      }
    },
    // 表单保存
    submitForm() {
      // 验证数据有效性
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if (this.form[this.primaryKey]) {
            this.editSave()
          } else {
            this.addSave()
          }
        }
      })
    },
    // 新增保存
    addSave() {
      console.log('---定义新增保存之前的钩子函数,preAddSaveHandler()------')
      if (this.preAddSaveHandler && this.preAddSaveHandler instanceof Function) {
        this.preAddSaveHandler()
      }

      this.addApi(this.form).then(resp => {
        this.$message('操作成功')
        this.cancelForm()
        this.fetchData()
      })
    },
    // 修改保存
    editSave() {
      console.log('---定义修改保存之前的钩子函数,preEditSaveHandler()------')
      if (this.preEditSaveHandler && this.preEditSaveHandler instanceof Function) {
        this.preEditSaveHandler()
      }

      this.editApi(this.form).then(resp => {
        this.$message('操作成功')
        this.cancelForm()
        this.fetchData()
      })
    },
    // 删除
    handleDelete(row) {
      // 表格点击的删除
      this.$confirm('确定要删除数据吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let ids = []
        if (row) {
          ids.push(row[this.primaryKey])
        } else {
          ids = this.ids
        }

        console.log(ids)
        this.deleteByIdApi(ids).then(resp => {
          this.$message({ type: 'success', message: '操作成功!' })
          // 重新查询数据
          this.fetchData()
        })
      }).catch(() => {
      })
    }

  }
}

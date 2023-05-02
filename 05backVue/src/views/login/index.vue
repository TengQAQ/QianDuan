<template>
  <div class="login-container">

    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <el-form-item prop="loginName">
        <el-input
          ref="loginName"
          v-model="loginForm.loginName"
          placeholder="loginName"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="loginPwd" class="pwdposition">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.loginPwd"
          :type="passwordType"
          placeholder="Password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-form-item prop="code" class="codeposition">
        <el-input
          v-model="loginForm.code"
          auto-complete="off"
          placeholder="验证码"
          style="width: 63%"
          @keyup.enter.native="handleLogin"
        />

        <div class="login-code">
          <img :src="base64Image" title="看不清,点击重新加载" class="login-code-img" @click="refreshCode">
        </div>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登 录</el-button>

      <div class="tips">
        <router-link :to="{path:'recruit'}" target="_blank" class="el-link">商家申请入住</router-link>
      </div>

      <div class="tips_nopass">
        <router-link :to="{path:'recruitedit'}" target="_blank" class="el-link">商家入住审核不通过点这里</router-link>
      </div>

    </el-form>
  </div>
</template>

<script>
import { airth } from '@/api/captcha.js'
export default {
  name: 'Login',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('密码长度不能小于3个字符'))
      } else {
        callback()
      }
    }
    return {
      base64Image: 'data:image/gif;base64,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',
      loginForm: {
        loginName: 'admin',
        loginPwd: 'admin8888',
        code: undefined,
        uuid: undefined
      },
      loginRules: {
        loginName: [{ required: true, trigger: 'blur' }],
        loginPwd: [{ required: true, trigger: 'blur', validator: validatePassword }],
        code: [{ required: true, trigger: 'blur' }],
        uuid: [{ required: true, trigger: 'blur' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    this.refreshCode()
  },
  methods: {
    // 加载验证码
    refreshCode() {
      airth().then(resp => {
        this.loginForm.uuid = resp.data.uuid
        this.base64Image = resp.data.image
      })
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 点击登录按钮
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          // vuex的action方法('模块/action的方法')
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#000;
$cursor: #000000;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  //background-image: url(../../assets/bg.jpg); 修改为动态引入即可
  background-image: url(~@/assets/bg.jpg);
  background-repeat: no-repeat;
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    color: #000;
  }

  .pwdposition{
    margin-top: 45px;
  }

  .codeposition {
    margin-top: 50px;
  }
  .login-code-img{
    width: 98%;
  }
  .login-code {
    width: 33%;
    height: 38px;
    position: absolute;
    top: 3px;
    right: 0;
    img {
      cursor: pointer;
      vertical-align: middle;
    }
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  position:relative;

  .login-form {
    position: absolute;
    width: 375px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    top: 365px;
    left: 280px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>

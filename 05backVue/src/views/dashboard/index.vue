<template>
  <div class="app-container">
    <h1>
      欢迎你 {{ $store.state.user.name }}
    </h1>
  </div>
</template>
<script>
export default {
  created() {
    console.log('页面加载启动')
  }
}

</script>

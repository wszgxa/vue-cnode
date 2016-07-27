<style lang="styl" src='../../assets/styl/login.styl' scoped></style>
<template>
  <section class="content">
    <div class="banner">
      <img src="../../assets/img/cnodejs_light.svg" alt="">
    </div>
    <div class="login">
      <div class="i-wrap">
        <input type="text" name="access" placeholder="Access Token">
      </div>
      <div class="b-wrap">
        <!-- TODO 扫描二维码 -->
        <a>登陆</a>
      </div>
      <div class="tip">
        <a>如何获取Access_Token?</a>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
  }
</script>
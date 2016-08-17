<style lang='styl' src='../../assets/styl/edit.styl' scoped></style>
<template>
  <section class="edit">
    <div class="item">
      <div>
        <span>选择分类：</span>
        <select class="select">
          <option value="">分享</option>
          <option value="">问答</option>
          <option value="">招聘</option>     
        </select>
        <i class="icon i-down"></i>
      </div>
      <a class="pub">发布</a>
    </div>
    <div class="item">
      <input class="title-i" type="text" name="title" placeholder="标题，字数10字以上">
    </div>
    <div class="edit-area">
      <textarea class="text" placeholder="说点啥.."></textarea>
    </div>
  </section>
</template>
<script>
  export default {
    data () {
      return {
        tag: 1
      }
    }
  }
</script>
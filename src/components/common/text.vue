<style lang='styl' src='../../assets/styl/common/text.styl' scoped></style>
<style lang='styl'>
@import '../../assets/styl/partial/variables'
.markdown-text
  font-size size-text
  h1, h2, h3, h4
    color color-highlight
    margin: 0.5em 0;
  h1
    font-size font-header-lg
  h2
    font-size font-header-md
  h3, h4
    font-size font-header-sm
  blockquote
    border-left 0.3em solid color-border
    p
      padding-left 0.1rem
  ul
    padding-left 1.5em
    li
      list-style circle
  a
    border-bottom 1px solid color-font
    color color-font
    &:hover
      color color-highlight
      border-color color-highlight
  pre
    overflow-x scroll
    background-color color-background-deep    
  code
    font-size (26/75)rem
    background-color color-background-deep
  table
    margin 1em auto
    width 70%
    table-layout fixed
    th, td
      padding 0.2em
      background-color color-background-shallow
    th
      padding 0.2em
      background-color color-background-deep
    td
      background-color color-background-shallow
  p
    margin 0.3rem 0
    text-align justify
  img
    display block
    margin 0 auto
    max-width 90%
</style>
<template>
  <div class="text">
    {{{ text }}}
  </div>
</template>
<script>
  export default {
    props: {
      text: String
    }
  }
</script>
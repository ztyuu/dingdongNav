<!--
 * @Author: 左太宇
 * @Date: 2020-11-30 17:57:00
 * @LastEditTime: 2020-11-30 18:35:20
 * @LastEditors: 左太宇
 * @message:
-->
<template>
  <div>
    <div class="gbanner" @click="changeTheme('theme-white')"></div>
    <div class="gbanner-r" @click="changeTheme('theme-black')"></div>
    <div class="gbanner-e" @click="changeTheme('theme-black')"></div>
  </div>
</template>

<script>
export default {
  methods: {
    changeTheme(theme) {
      document.body.setAttribute("class", theme);
    },
  },
};
</script>

<style lang="less" scoped>
// @import "../assets/less/theme.less";
.theme(@bg-color,@theme-color,@font-color,@color-activa,@link-activa) {
  .gbanner {
    width: 300px;
    height: 300px;
    background: @bg-color;
  }
  .gbanner-r {
    width: 300px;
    height: 300px;
    background: @theme-color;
  }
  .gbanner-e {
    width: 300px;
    height: 300px;
    background:@font-color;
  }
}
.setTheme();
</style>

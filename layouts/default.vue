<!--
 * @Author: 左太宇
 * @Date: 2020-07-27 14:22:09
 * @LastEditTime: 2020-12-01 12:37:44
 * @LastEditors: 左太宇
 * @message:
-->
<template>
  <div id="layout-container" :class="theme" v-show="theme">
    <Nuxt />
  </div>
</template>


<script>
import layoutMixin from "@/mixins/layout";
export default {
  mixins: [layoutMixin],
};
</script>



<style lang="less">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
.theme(@bg-color,@theme-color,@font-color,@color-activa,@link-activa) {
  #layout-container {
    background-color: @bg-color;
  }
  a {
    text-decoration: none;
    color: @font-color;
    transition: all 0.2s;
  }
  a:hover {
    color: #00a1ee;
  }
}
.setTheme();
</style>

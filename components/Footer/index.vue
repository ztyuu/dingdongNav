<!--
 * @Author: 左太宇
 * @Date: 2020-08-04 18:14:20
 * @LastEditTime: 2020-12-27 19:12:31
 * @LastEditors: 左太宇
 * @message:
-->
<template>
  <div class="footer">
    <footer>
      <div>© ZTYUU.COM,2017 - {{year}}</div>
      <a href="https://beian.miit.gov.cn/#/">湘ICP备19023485号-1</a>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yaer: "",
    };
  },
  created() {
    this.year = new Date().getFullYear();
  },
};
</script>
<style lang="less" scoped>
.theme(@bg-color,@theme-color,@font-color,@color-activa,@link-activa) {
  footer {
    padding: 10px;
    padding-top: 200px;
    display: flex;
    opacity: 0.35;
    font-size: 12px;
    justify-content: space-between;
    a {
      color: inherit;
      text-decoration: none;
    }
    a:hover {
    color: #00a1ee;
  }
  }
}
.setTheme();
</style>

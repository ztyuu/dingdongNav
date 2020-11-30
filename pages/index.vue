<!--
 * @Author: 左太宇
 * @Date: 2020-08-05 10:03:04
 * @LastEditTime: 2020-11-30 18:46:40
 * @LastEditors: 左太宇
 * @message:
-->
<template>
  <div>
    <div class="index">
      <!-- <el-button type="primary" @click="colorChange">切换主题</el-button> -->
      <SearchBar />
      <Link @handleChangeComponent="handleChangeComponent" />
      <transition mode="out-in" name="fade">
        <component :is="componentName" :label="label" />
      </transition>
      <Footer />
    </div>
  </div>
</template>

<script>
import HotTopic from "../components/HotTopic";
import Common from "../components/Common";
export default {
  head() {
    return {
      title: "叮咚导航",
    };
  },
  data() {
    return {
      // 标识
      label: "inCommonUse",
      componentName: "",
    };
  },
  methods: {
    colorChange() {
      const test = document.body.getAttribute("class");
      if (test === "theme-white") {
        document.body.setAttribute("class", 'theme-black');
      } else {
        document.body.setAttribute("class", 'theme-white');
      }
    },
    /**
     * @name handleChangeComponent 处理改变组件
     * @param {String} componentName 组件名字
     */
    handleChangeComponent(el) {
      this.componentName = el.component;
      this.label = el.label || "inCommonUse";
    },
  },
  components: {
    HotTopic,
    Common,
  },
};
</script>
<style scoped lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


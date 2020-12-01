<!--
 * @Author: 左太宇
 * @Date: 2020-08-05 10:03:04
 * @LastEditTime: 2020-12-01 12:02:37
 * @LastEditors: 左太宇
 * @message:
-->
<template>
  <div>
    <div class="index">
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

.theme(@bg-color,@theme-color,@font-color,@color-activa,@link-activa) {
  .index {
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


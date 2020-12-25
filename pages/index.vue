<!--
 * @Author: 左太宇
 * @Date: 2020-08-05 10:03:04
 * @LastEditTime: 2020-12-25 09:52:44
 * @LastEditors: 左太宇
 * @message:
-->
<template>
  <div>
    <div v-if="show" id="snowMask"></div>
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
      show:false,
    };
  },
  created(){
    if (new Date().getTime() < 1608912000000) {
      this.show = true
    }
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

@-webkit-keyframes snow {
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 500px 500px, 1000px 500px;
  }
}
@keyframes snow {
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 500px 500px, 1000px 500px;
  }
}
.container {
  box-shadow: 0 0 4px 3px rgba(0, 0, 0, 0.05);
}
#snowMask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(../assets/images/snow1.png), url(../assets/images/snow1.png);
  -webkit-animation: 10s snow linear infinite;
  animation: 10s snow linear infinite;
  pointer-events: none;
  z-index: 9999;
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


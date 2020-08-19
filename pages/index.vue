<template>
  <div>
    <div class="index">
      <el-button type="primary"
                 @click="colorChange">切换主题</el-button>
      <SearchBar />
      <Link @handleChangeComponent="handleChangeComponent" />
      <transition mode="out-in"
                  name="fade">
        <component :is="componentName"
                   :label='label' />
      </transition>
      <Footer />
    </div>
  </div>
</template>

<script>
import HotTopic from '../components/HotTopic'
import Common from '../components/Common'
import less from 'less'
export default {
  head () {
    return {
      title: '叮咚导航',
    }
  },
  data () {
    return {
      // 标识
      label: 'inCommonUse',
      componentName: ""
    }
  },
  methods: {
    colorChange () {
      console.log(less);
      less.modifyVars({
        "@bg-color": "#f3f3f3",
        "@theme-color": "#ffffff",
        "@font-color": "#000000",
        "@color-activa": "#252121",
        "@link-activa": "#e1e1e1",
      })
    },
    /**
     * @name handleChangeComponent 处理改变组件
     * @param {String} componentName 组件名字
     */
    handleChangeComponent (el) {
      this.componentName = el.component
      this.label = el.label || 'inCommonUse'
    }
  },
  components: {
    HotTopic,
    Common
  }
}
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


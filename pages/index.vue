<template>
  <div>
    <div class="index">
      <SearchBar />
      <Link @handleChangeComponent="handleChangeComponent" />
      <transition mode="out-in" name="fade">
        <component :is="componentName" />
      </transition>
    </div>
  </div>
</template>

<script>
import HotTopic from '../components/HotTopic'
import Common from '../components/Common'
export default {
  head () {
    return {
      title: '叮咚导航',
    }
  },
  data () {
    return {
      componentName: "HotTopic"
    }
  },
  methods: {
    sayHi: function () {
      alert('Hi!')
    },
    /**
     * @name handleChangeComponent 处理改变组件
     * @param {String} componentName 组件名字
     */
    handleChangeComponent (el) {
      this.componentName = el.component
    }
  },
  components: {
    HotTopic,
    Common
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


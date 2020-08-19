<template>
  <div class="link">
    <div class="tab">
      <ul>
        <li :class="{activa:item.isActiva}"
            v-for="item in list"
            :key="item.id"
            @click="handleNav(item.id)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { id: 1, name: "实时热门", isActiva: false, component: 'HotTopic', label: "" },
        { id: 2, name: "常用", isActiva: false, component: 'Common', label: "inCommonUse" },
        { id: 3, name: "娱乐", isActiva: false, component: 'Common', label: "recreation" },
        { id: 4, name: "学习", isActiva: false, component: 'Common', label: "learn" },
        { id: 5, name: "生活", isActiva: false, component: 'Common', label: "life" },
        { id: 6, name: "技术", isActiva: false, component: 'Common', label: "technology" },
        { id: 7, name: "设计", isActiva: false, component: 'Common', label: "design" },
      ]
    }
  },
  mounted () {
    if (process.client) {
      const id = JSON.parse(localStorage.getItem('link'))
      if (id === null) {
        this.handleNav(1)
      } else {
        this.handleNav(id)
      }
    }
  },
  methods: {
    /**
     * @name handleNav 处理点击导航
     */
    handleNav (id) {
      this.list.map(e => {
        e.isActiva = false
        if (e.id === id && process.client) {
          this.$emit("handleChangeComponent", e)
          e.isActiva = true
          localStorage.setItem("link", JSON.stringify(id))
        }
      })
    }
  }
}
</script>
<style scoped lang="less">
.link {
  width: 66%;
  margin: 0 auto;
  padding: 0 100px;
}
.tab {
  padding: 40px 100px;
}
.tab ul {
  display: flex;
  justify-content: space-between;
}
.tab ul li {
  display: inline-block;
  padding: 6px 10px;
  color: @font-color;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;
}
.activa {
  background-color: @link-activa;
}
.tab ul li:hover {
  background-color: @link-activa;
}
@media (max-width: 1200px) {
  .link {
    width: 90%;
    padding: 0;
  }
  .tab ul li {
    padding: 2px 4px;
    color: @font-color;
  }
}
@media (max-width: 992px) {
  .link {
    width: 90%;
    padding: 0;
  }
  .tab {
    padding: 20px 0px;
  }
  .tab ul li {
    padding: 2px 4px;
    color: @font-color;
  }
}
</style>
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
        { id: 1, name: "实时热门", isActiva: true, component: 'HotTopic' },
        { id: 2, name: "常用", isActiva: false, component: 'Common' },
        { id: 3, name: "娱乐", isActiva: false, component: 'Common' },
        { id: 4, name: "学习", isActiva: false, component: 'Common' },
        { id: 5, name: "生活", isActiva: false, component: 'Common' },
        { id: 6, name: "技术", isActiva: false, component: 'Common' },
        { id: 7, name: "设计", isActiva: false, component: 'Common' },
      ]
    }
  },
  methods: {
    /**
     * @name handleNav 处理点击导航
     */
    handleNav (id) {
      this.list.map(e => {
        e.isActiva = false
        if (e.id === id) {
          this.$emit("handleChangeComponent",e)
          e.isActiva = true
        }
      })
    }
  }
}
</script>
<style scoped>
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
  color: #666;
  border-radius: 4px;
  transition: all 0.3s;
  cursor: pointer;
}
.activa {
  background-color: #e1e1e1;
}
.tab ul li:hover {
  background-color: #e1e1e1;
}
@media (max-width: 1200px) {
  .link {
    width: 90%;
    padding: 0;
  }
  .tab ul li {
    padding: 2px 4px;
    color: #666;
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
    color: #666;
  }
}
</style>
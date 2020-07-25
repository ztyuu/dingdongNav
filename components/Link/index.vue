<template>
  <div class="link">
    <div class="tab">
      <ul>
        <li class="activa">实时热门</li>
        <li>常用</li>
        <li>娱乐</li>
        <li>学习</li>
        <li>生活</li>
        <li>技术</li>
        <li>设计</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

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
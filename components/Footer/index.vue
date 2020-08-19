<template>
  <div class="footer">
    <span>© 2020</span>
    <!-- <span>
      <a href="/about">网站声明</a>
    </span> -->
    <div class="author" @mouseenter="isShow = true" @mouseleave="isShow = false">
      <img v-show="isShow" src="../../static/dd.png"
           alt="公众号咚咚宇宙">
      <span>关于作者</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  }
}
</script>
<style lang="less" scoped>
.footer {
  padding-top: 100px;
  padding-bottom: 20px;
  text-align: center;
  font-size: 14px;
  color: @font-color;
  display: flex;
  justify-content: center;
  align-items: center;
}

.author > span {
  padding-left: 20px;
  color: #00a1ee;
  cursor: pointer;
}
.author > img {
  position: fixed;
  bottom: 60px;
  width: 300px;
  transform: translateX(-50%);
  transition: 0.3s all;
}

a {
  color: #00a1ee;
}
</style>
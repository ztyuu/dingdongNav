<template>
  <div class="container">
    <div class="headline-content">
      <div class="tab-nav">
        <ul>
          <li>百度</li>
          <li>谷歌</li>
          <li>必应</li>
          <li>图片</li>
          <li>种子</li>
          <li>学术</li>
        </ul>
      </div>
      <div class="input-box">
        <input type="text"
               placeholder="百度一下，你就知道。">
        <div>搜索</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  background: #fff;
  width: 66%;
  margin: 0 auto;
}
.headline-content {
  max-width: 650px;
  margin: 0 auto;
  padding: 60px 0;
}
.tab-nav ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 470px;
  height: 34px;
  margin: 0 0 20px;
  color: #666;
  border-bottom: 1px solid #e9e9e9;
}
.tab-nav ul li {
  display: inline-block;
  height: 34px;
  cursor: pointer;
  padding: 0 10px;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.tab-nav ul li:hover {
  color: #000;
  border-bottom: 2px solid #444;
}
.input-box {
  display: flex;
  align-items: center;
}
.input-box > input {
  padding: 0 10px;
  display: block;
  width: 470px;
  height: 46px;
  font-size: 16px;
  background-color: #f3f3f3;
  outline: none;
  border: none;
  -webkit-border-radius: 0px;
  -moz-border-radius: 0px;
  border-radius: 0px;
}
.input-box > input:focus {
  border: none;
}
.input-box > div {
  max-width: 136px;
  width: 34%;
  height: 46px;
  line-height: 46px;
  margin-left: 40px;
  color: #fff;
  background-color: #3c3c3c;
  text-align: center;
  cursor: pointer;
  transition: all .3s;
}
.input-box > div:hover {
  background-color: #000;
 
}
@media (max-width: 1200px) {
  .container {
    width: 90%;
  }
  .input-box > div {
    margin-left: 0px;
  }
}
</style>
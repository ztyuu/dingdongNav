<template>
  <div class="common">
    <div class="link-list">
      <span>发现</span>
      <ul>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
      </ul>
    </div>
    <div class="link-list">
      <span>发现</span>
      <ul>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
      </ul>
    </div>
    <div class="link-list">
      <span>发现</span>
      <ul>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
        <li>
          <a href='https://nav.ztyuu.com'>煎蛋</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped>
.common {
  width: 50%;
  margin: 0 auto;
}
.link-list {
  display: flex;
  padding-bottom: 20px;
}
.link-list > span {
  width: 100px;
  padding: 6px 10px;
  color: #000;
  font-weight: 500;
}
.link-list ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.link-list ul li {
  padding: 6px 10px;
  border-radius: 4px;
}
.link-list ul li a {
  color: #666;
}
.link-list ul li:hover {
  background-color: #e1e1e1;
}
@media (max-width: 1600px) {
  .common {
    width: 60%;
  }
}
@media (max-width: 1200px) {
  .common {
    width: 80%;
  }
}
@media (max-width: 992px) {
  .common {
    width: 90%;
  }
  .link-list ul {
    justify-content: start;
  }
}
</style>

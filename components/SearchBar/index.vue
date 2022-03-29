<template>
  <div class="container">
    <div class="header">
      <div @click="handleRefresh">
        <i :class="[
            'icon',
            'iconfont',
            'icon-shuaxin',
            isActivaTheme ? 'icon-shuaxin' : 'icon-shuaxin-active',
          ]"></i>
      </div>
      <div>
        <i :class="[
            'icon',
            'iconfont',
            isActivaTheme ? 'icon-taiyang' : 'icon-yueliang',
          ]"
           @click="changeTheme"></i>
      </div>
    </div>
    <div class="headline-content">
      <div class="tab-nav">
        <ul>
          <li :class="{ activa: item.isActiva }"
              v-for="(item, index) in list"
              :key="item.id"
              @click="changeSearchMode(index)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="input-box">
        <input type="text"
               ref="searchBox"
               autofocus="autofocus"
               v-model="text"
               :placeholder="placeholder"
               @keyup.enter="handleSeacrch" />
        <div @click="handleSeacrch">搜索</div>
      </div>
    </div>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      isActivaTheme: true,
      list: [
        {
          id: 1,
          name: '百度',
          placeholder: '百度一下，你就知道！',
          isActiva: false,
          request: 'https://www.baidu.com/s?word=',
        },
        {
          id: 2,
          name: '谷歌',
          placeholder: 'Google 搜索',
          isActiva: false,
          request: 'https://www.google.com/search?q=',
        },
        {
          id: 3,
          name: '必应',
          placeholder: '微软Bing 搜索',
          isActiva: false,
          request: 'https://www.bing.com/search?q=',
        },
        {
          id: 4,
          name: '图片',
          placeholder: '海量图片搜索',
          isActiva: false,
          request: 'https://image.baidu.com/search/index?tn=baiduimage&word=',
        },
        {
          id: 5,
          name: '种子',
          placeholder: '磁力链种子搜索',
          isActiva: false,
          request: 'https://torrentz2eu.org/index.html?q=',
        },
        {
          id: 6,
          name: '学术',
          placeholder: '中英文文献搜索',
          isActiva: false,
          request: 'https://xueshu.baidu.com/s?wd=',
        },
      ],
      text: '',
      placeholder: '',
      request: '',
    }
  },
  created () {
    if (process.client) {
      const theme = localStorage.getItem('theme')
      if (theme === 'theme-black') {
        this.$store.commit('setTheme', 'theme-black')
        this.isActivaTheme = false
      } else {
        this.isActivaTheme = true
        this.$store.commit('setTheme', 'theme-white')
      }
    }
  },
  mounted () {
    if (process.client) {
      const index = JSON.parse(localStorage.getItem('index'))
      console.log(index)
      if (index === null) {
        this.changeSearchMode(0)
      } else {
        this.changeSearchMode(index)
      }
    }
  },
  methods: {
    /**
     * @name handleRefresh 处理刷新
     */
    handleRefresh () {
      if (process.client) {
        window.location.reload()
      }
    },
    handleSd () {
      this.$notify({
        message: '🎅  祝你圣诞快乐呀！～',
        position: 'top-left',
      })
    },
    /**
     * @name changeTheme 切换主题
     */
    changeTheme () {
      const className = document
        .querySelector('#layout-container')
        .getAttribute('class')
      console.log('className', className)
      if (className === 'theme-white') {
        this.$store.commit('setTheme', 'theme-black')
        this.isActivaTheme = false
      } else {
        this.$store.commit('setTheme', 'theme-white')
        this.isActivaTheme = true
      }
    },
    /**
     * @name changeSearchMode 改变搜索方式
     */
    changeSearchMode (index) {
      console.log(index)
      this.list.map((e, i) => {
        e.isActiva = false
        if (i === index && process.client) {
          e.isActiva = true
          this.placeholder = e.placeholder
          this.request = e.request
          this.$refs['searchBox'].focus()
          localStorage.setItem('index', JSON.stringify(index))
        }
      })
    },
    /**
     * @name handleSeacrch 处理搜索
     */
    handleSeacrch () {
      window.open(this.request + this.text)
    },
  },
}
</script>
<style scoped lang="less">
.theme(@bg-color,@theme-color,@font-color,@color-activa,@link-activa) {
  .container {
    background: @theme-color;
    width: 100%;
    margin: 0 auto;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div:nth-child(1) {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      position: relative;
      transform: rotate(0deg);
      transition: 0.6s all;
      .icon {
        font-size: 32px;
        cursor: pointer;
      }

      .icon-shuaxin:hover {
        transform: rotate(180deg);
        // font-size: 100px;
      }
      .icon-shuaxin-active {
        color: #fff;
      }
      img {
        position: absolute;
        top: 50%;
        left: 0%;
        width: 50px;
        transform: translate(-50%, -50%);
      }
    }
    > div:nth-child(1):hover {
      transform: rotate(360deg);
    }

    > div:nth-child(2) {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      position: relative;
      .icon {
        font-size: 32px;
        cursor: pointer;
      }
      .icon-yueliang {
        color: #fff;
      }
      img {
        position: absolute;
        top: 50%;
        left: 0%;
        width: 50px;
        transform: translate(-50%, -50%);
      }
    }
  }

  .headline-content {
    max-width: 650px;
    margin: 0 auto;
    padding-bottom: 60px;
  }
  .tab-nav ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 470px;
    height: 34px;
    margin: 0 0 20px;
    color: @font-color;
    border-bottom: 1px solid #e9e9e9;
  }
  .tab-nav ul li {
    display: inline-block;
    height: 34px;
    cursor: pointer;
    padding: 0 10px;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .activa {
    color: @font-color;
    border-bottom: 2px solid @color-activa;
  }
  .tab-nav ul li:hover {
    color: @font-color;
    border-bottom: 2px solid @color-activa;
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
    color: @theme-color;
    background-color: @color-activa;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
  }
  @media (max-width: 1200px) {
    .input-box > div {
      margin-left: 0px;
    }
  }
  @media (max-width: 992px) {
    .container {
      padding: 10px;
    }
    .input-box > div {
      margin-left: 0px;
    }
  }
}
.setTheme();
</style>

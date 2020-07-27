<template>
  <div class="hot-list">
    <ul>
      <li v-for="platform in listData"
          :key='platform.name'>
        <div class="tab">
          <div>
            <img :src="platform.logoUrl"
                 alt="">
            <span>{{platform.name}}</span>
          </div>
          <div>
            {{platform.description}}
          </div>
        </div>
        <div class="info-content">
          <div class="top-list"
               v-for="(itme,index) in platform.list"
               :key="itme.id">
            <span :class="{'index-color': index+1 < 4 }">{{index+1}}</span>
            <span> <a :href="itme.Url"
                 target="_blank">{{itme.Title}}</a></span>
            <span>{{itme.hotDesc|mapHeat}}</span>
          </div>
        </div>
      </li>
    </ul>
    <span class="fish"><a href="https://mo.fish/"
         target="_blank">查看更多热榜到鱼塘热榜</a></span>
  </div>
</template>

<script>
import { getHotTopipTop } from "../../api/hot-topic";
export default {
  head () {
    return {
      title: "叮咚导航",
    };
  },
  data () {
    return {
      listData: [
        {
          id: 58,
          logoUrl:
            "https://file.ipadown.com/tophub/assets/images/media/s.weibo.com.png_50x50.png",
          name: "微博",
          description: "热搜榜",
          list: [],
        },
        {
          id: 1,
          logoUrl:
            "https://file.ipadown.com/tophub/assets/images/media/zhihu.com.png_50x50.png",
          name: "知乎",
          description: "热榜",
          list: [],
        },
        {
          id: 83,
          logoUrl:
            "https://file.ipadown.com/tophub/assets/images/media/baidu.com.png_50x50.png",
          name: "百度",
          description: "实时热点",
          list: [],
        },
        {
          id: 11,
          logoUrl:
            "https://file.ipadown.com/tophub/assets/images/media/mp.weixin.qq.com.png_50x50.png",
          name: "微信",
          description: "24h热文榜",
          list: [],
        },
      ],
    };
  },
  filters: {
    mapHeat: function (value) {
      // try {
      //   return Math.floor(value.split("热度")[0] / 10000) + "万";
      // } catch (error) {
      //   throw new Error(error);
      // }
    },
  },
  created () {
    this.getData();
  },
  methods: {
    /**
     * @name getData 获取数据
     */
    getData () {
      this.listData.map(async (e) => {
        const result = await getHotTopipTop(e.id);
        e.list = result.Data.data;
      });
    },
  },
};
</script>

<style scoped>
.hot-list {
  width: 90%;
  margin: 0 auto;
}
ul {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
}
ul li {
  padding: 20px 0px;
  width: 24%;
  background-color: #fff;
  margin-bottom: 40px;
}
.tab {
  padding: 0 20px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-items: center;
  justify-content: space-between;
}
.tab > div {
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 10px;
}
.tab > div:first-child img {
  height: 25px;
  vertical-align: middle;
  border-radius: 50%;
  display: inline-block;
}
.tab > div:first-child span {
  vertical-align: middle;
  font-size: 18px;
}
.tab > div:nth-of-type(2) {
  border-bottom: 2px solid #8d8e8f;
}
.info-content {
  overflow-y: auto;
  height: 400px;
}
.top-list {
  padding-top: 20px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: #666;
}
.top-list > span:first-child {
  margin: 0 20px;
}
.top-list > span:nth-of-type(2) {
  flex: 1;
  color: #000;
}
.top-list > span:last-child {
  text-align: right;
  margin: 0 20px;
}
.index-color {
  color: red;
}
.info-content::-webkit-scrollbar-track-piece {
  background-color: #fff;
  border-left: 1px solid rgba(0, 0, 0, 0);
}
.info-content::-webkit-scrollbar {
  width: 4px;
  height: 8px;
  -webkit-border-radius: 17px;
  -moz-border-radius: 17px;
  border-radius: 0;
}
.info-content::-webkit-scrollbar-thumb {
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0;
  min-height: 28px;
  transition: all 0.3s;
}
ul li:hover .info-content::-webkit-scrollbar-thumb {
  background-color: #000;
}
.fish {
  font-size: 14px;
  color: #666;
}
.fish > a {
  color: #666;
}

@media (max-width: 1600px) {
  ul li {
    padding: 20px 0px;
    width: 30%;
    background-color: #fff;
  }
}
@media (max-width: 1200px) {
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
  }
  ul li {
    padding: 20px 0px;
    width: 40%;
    background-color: #fff;
  }
}
@media (max-width: 992px) {
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
  }
  ul li {
    padding: 20px 0px;
    width: 98%;
    background-color: #fff;
  }
}
</style>
/*
 * @Author: 左太宇
 * @Date: 2020-12-01 10:45:33
 * @LastEditTime: 2020-12-01 12:11:06
 * @LastEditors: 左太宇
 * @message:
 */
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["theme"])
  },
};

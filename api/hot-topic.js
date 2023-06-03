/*
 * @Author: 左太宇
 * @Date: 2020-07-27 14:28:47
 * @LastEditTime: 2020-11-22 13:32:05
 * @LastEditors: 左太宇
 * @message:
 */
import request from "@/utils/request";
/**
 * @name getWeiboHotTopipTop 获取热榜
 * @id 1:知乎、2:微博、3:百度、4:微信
 */
export function getHotTopipTop(id) {
  return request({
    url: `/getData?id=${id}`,
    method: "get"
  });
}

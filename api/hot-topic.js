import request from "@/utils/request";
/**
 * @name getWeiboHotTopipTop 获取热榜
 * @id 1:知乎、58:微博、11:微信、83:百度
 */
export function getHotTopipTop(id) {
  return request({
    url: `/GetAllInfoGzip?id=${id}&page=0`,
    method: "get"
  });
}

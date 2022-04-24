import http from '../utils/http';



/**
 * 获取首页列表
 */
export function getArticleList(params = 0){
  return  http("get",'/api/hot?page=' + params);
}

export function getOthoerList(params = 0) {
  return  http("get",'/api/other?page=' + params);
}

// export {
//    getArticleList
// }

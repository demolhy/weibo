import React from 'react'
// import { renderRoutes } from "react-router-config";

function Home(props) {
  // const { route } = props
  // construter(props) {

  // }
  return (
    <div>
      {/* <div className='content'>
        {renderRoutes(route.routes)}
      </div> */}
      <div className='footer_fixed'>
        <div className='nav'>
          <i className='iconfont icon-homepage_fill'></i>
          <div>首页</div>
        </div>
        <div className='nav'>
          <i className='iconfont icon-search'></i>
          <div>热搜</div>
        </div>
        <div className='nav'>
          <i className='iconfont icon-message'></i>
          <div>消息</div>
        </div>
        <div className='nav'>
          <i className='iconfont icon-mine'></i>
          <div>我</div>
        </div>
      </div>
    </div>
  )
}

export default Home
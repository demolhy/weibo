import React from 'react'
import { Link } from 'react-router-dom'
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
        <Link to='/index'>
          <div className='nav'>
            <i className='iconfont icon-homepage_fill'></i>
            <div>首页</div>
          </div>
        </Link>
        <Link to='/index1'>
          <div className='nav'>
            <i className='iconfont icon-search'></i>
            <div>热搜</div>
          </div>
        </Link>
        <Link to='/index2'>
          <div className='nav'>
            <i className='iconfont icon-message'></i>
            <div>消息</div>
          </div>
        </Link>
        <Link to='/index3'>
          <div className='nav'>
            <i className='iconfont icon-mine'></i>
            <div>我</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home

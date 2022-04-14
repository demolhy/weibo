import React from 'react'
import { renderRoutes } from "react-router-config";

function Home(props) {
  const { route } = props
  // construter(props) {

  // }
  return (
    <div>
      <div className='content'>
        {renderRoutes(route.routes)}
      </div>
      <div className='footer'>
        <div activeClassName='active'>
          <span>首页</span>
        </div>
        <div activeClassName='active'>
          <span>热搜</span>
        </div>
        <div activeClassName='active'>
          <span>消息</span>
        </div>
        <div activeClassName='active'>
          <span>我</span>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Home)
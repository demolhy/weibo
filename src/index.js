import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import './style/icon.css'
class Layout extends React.Component {
  render() {
    return (
      <div className='header'><i class="iconfont icon-setup_fill"></i></div>
    )
  }
}


ReactDOM.render(<Layout />, document.getElementById('root'))

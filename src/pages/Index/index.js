/* eslint-disable */
import React from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import './index.scss'
SwiperCore.use([Pagination])
class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  sonRef = (ref) => {
    this.child = ref
  }
  getChild = () => {
    console.log(this.child)
  }
  renderBullet = (index, className) => {
    let text
    switch (index) {
      case 0:
        text = '热门'
        break
      case 1:
        text = '同城'
        break
      case 2:
        text = '搞笑'
        break
      case 3:
        text = '军事'
        break
    }
    return '<span class="' + className + '">' + text + '</span>'
  }
  render() {
    return (
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: this.renderBullet
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='content'>
            <Son onRefChild={this.sonRef}></Son>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='content'>
            <Son onRefChild={this.sonRef}></Son>
            <div onClick={this.getChild}>click me</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='content'>
            <Son onRefChild={this.sonRef}></Son>
            <div onClick={this.getChild}>click me</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='content'>
            <Son onRefChild={this.sonRef}></Son>
            <div onClick={this.getChild}>click me</div>
          </div>
        </SwiperSlide>
      </Swiper>
    )
  }
}

class Son extends React.Component {
  componentDidMount() {
    this.props.onRefChild(this)
  }
  state = {
    info: 'lisa'
  }
  render() {
    return (
      <div>
        <div className='list'>
          <div className='list-header'>
            <div className='icon'>
              <img
                src='https://tvax1.sinaimg.cn/crop.0.0.690.690.180/002TLsr9ly8gzemrotb6xj60j60j6js602.jpg?KID=imgbed,tva&Expires=1650458200&ssig=SC2NOKBf%2FB'
                alt=''
              />
            </div>
            <div className='text'>
              <div className='title'>央视新闻</div>
              <div className='time'>昨天 19:02</div>
            </div>
          </div>
          <div className='list-content'>
            在微博发了一张图，被男朋友说了一顿
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
          </div>
          <div className='list-footer'>
            <div className='f-item'>
              <i className='iconfont icon-share'></i>
              <span>100</span>
            </div>
            <div className='f-item'>
              <i className='iconfont icon-interactive'></i>
              <span>100</span>
            </div>
            <div className='f-item'>
              <i className='iconfont icon-praise'></i>
              <span>100</span>
            </div>
          </div>
        </div>
        <div className='list'>
          <div className='list-header'>
            <div className='icon'>
              <img
                src='https://tvax1.sinaimg.cn/crop.0.0.690.690.180/002TLsr9ly8gzemrotb6xj60j60j6js602.jpg?KID=imgbed,tva&Expires=1650458200&ssig=SC2NOKBf%2FB'
                alt=''
              />
            </div>
            <div className='text'>
              <div className='title'>央视新闻</div>
              <div className='time'>昨天 19:02</div>
            </div>
          </div>
          <div className='list-content'>
            在微博发了一张图，被男朋友说了一顿
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
          </div>
          <div className='list-footer'>
            <div className='f-item'>
              <i className='iconfont icon-share'></i>
              <span>100</span>
            </div>
            <div className='f-item'>
              <i className='iconfont icon-interactive'></i>
              <span>100</span>
            </div>
            <div className='f-item'>
              <i className='iconfont icon-praise'></i>
              <span>100</span>
            </div>
          </div>
        </div>
        <div className='list'>
          <div className='list-header'>
            <div className='icon'>
              <img
                src='https://tvax1.sinaimg.cn/crop.0.0.690.690.180/002TLsr9ly8gzemrotb6xj60j60j6js602.jpg?KID=imgbed,tva&Expires=1650458200&ssig=SC2NOKBf%2FB'
                alt=''
              />
            </div>
            <div className='text'>
              <div className='title'>央视新闻</div>
              <div className='time'>昨天 19:02</div>
            </div>
          </div>
          <div className='list-content'>
            在微博发了一张图，被男朋友说了一顿
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
          </div>
          <div className='list-footer'>
            <div className='f-item'>
              <i className='iconfont icon-share'></i>
              <span>100</span>
            </div>
            <div className='f-item'>
              <i className='iconfont icon-interactive'></i>
              <span>100</span>
            </div>
            <div className='f-item'>
              <i className='iconfont icon-praise'></i>
              <span>100</span>
            </div>
          </div>
        </div>
        <div className='list'>
          <div className='list-header'>
            <div className='icon'>
              <img
                src='https://tvax1.sinaimg.cn/crop.0.0.690.690.180/002TLsr9ly8gzemrotb6xj60j60j6js602.jpg?KID=imgbed,tva&Expires=1650458200&ssig=SC2NOKBf%2FB'
                alt=''
              />
            </div>
            <div className='text'>
              <div className='title'>央视新闻</div>
              <div className='time'>昨天 19:02</div>
            </div>
          </div>
          <div className='list-content'>
            在微博发了一张图，被男朋友说了一顿
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
            <img
              src='https://wx3.sinaimg.cn/orj360/006ehT1Ygy1gznnrpvyfrj30j614m40b.jpg'
              alt=''
            />
          </div>
          <div className='list-footer'>
            <div className='f-item'>
              <i className='iconfont icon-praise'></i>
              <span>100</span>
            </div>
            <div className='f-item'>
              <i className='iconfont icon-praise'></i>
              <span>100</span>
            </div>
            <div className='f-item'>
              <i className='iconfont icon-praise'></i>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index

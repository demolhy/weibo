import React from 'react'
import SwiperCore, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PullRefresh, Toast, List } from 'react-vant'
import { getArticleList } from '~/api/index'
import { Player } from 'video-react'
// import dayjs from 'dayjs'
import '../../../node_modules/video-react/dist/video-react.css' // import css
import 'swiper/swiper-bundle.min.css'
import './index.scss'
import dayjs from 'dayjs'
SwiperCore.use([Pagination])
class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    finished: false
  }
  onRefresh = (showToast) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (showToast) {
          Toast.info('刷新成功')
        }
        // setCount(count + 1);
        resolve(true)
      }, 1000)
    })
  }
  onLoad = () => {
    Toast.info('触发')

    this.setState({
      finished: true
    })
    console.log(11, this.state.finished)
    // const data = await getData();
    // if (unmountedRef.current) return;
    // setList((v) => [...v, ...data]);
    // if (list.length >= 30) {
    //   setFinished(true);
    // }
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
            <PullRefresh headHeight='50' onRefresh={() => this.onRefresh(true)}>
              {/* <Skeleton avatar /> */}
              <List
                offset='50'
                finished={this.state.finished}
                onLoad={this.onLoad}
              >
                <Son onRefChild={this.sonRef}></Son>
              </List>
            </PullRefresh>
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
  // componentDidMount() {
  //   this.props.onRefChild(this)
  // }
  state = {
    hotList: [],
    info: 'lisa'
  }
  componentDidMount() {
    this.getConetent()
  }
  componentWillUnmount = () => {
    this.setState = () => {
      return
    }
  }
  getConetent = async () => {
    await getArticleList().then(
      (res) => {
        console.log('get article response:', res.data.cards)
        // console.log(res.data.cards[0].mblog.page_info.content2)
        this.setState({
          hotList: res.data.cards
        })
      },
      () => {
        console.log('get response failed!')
      }
    )
  }
  render() {
    return (
      <div>
        {this.state.hotList.map((item) => (
          <div className='list' key={item.itemid}>
            <div className='list-header'>
              <div className='icon'>
                <img src={item.mblog.user.profile_image_url} alt='' />
              </div>
              <div className='text'>
                <div className='title'>{item.mblog.user.screen_name}</div>
                <div className='time'>
                  {console.log(typeof(new Date(item.mblog.created_at).getTime()), new Date(item.mblog.created_at).getTime())}
                  {dayjs(new Date(item.mblog.created_at).getTime()).format('YYYY-MM-DD')} <span>来自 {item.mblog.source}</span>
                </div>
              </div>
            </div>
            <div className='list-content'>
              <div
                dangerouslySetInnerHTML={{ __html: item?.mblog?.text }}
              ></div>
              <div className='imgs'>
                {item?.mblog?.pics &&
                  item?.mblog?.pics.map((imgItem) => (
                    <img
                      src={imgItem.url}
                      alt=''
                      key={imgItem.url.toString()}
                    />
                  ))}
              </div>
              <div className='player-content'>
                {/* {console.log(item.mblog.page_info.urls.mp4_720p_mp4)} */}
                {item?.mblog?.page_info?.urls && (
                  <div className='player'>
                    <Player videoId='myplayer-container'>
                      <source
                        src={item?.mblog?.page_info?.urls?.mp4_720p_mp4}
                      />
                    </Player>
                  </div>
                )}
              </div>
              {/* {item?.mblog?.text} */}
            </div>
            <div className='list-footer'>
              <div className='f-item'>
                <i className='iconfont icon-share'></i>
                <span>{item.mblog.reposts_count}</span>
              </div>
              <div className='f-item'>
                <i className='iconfont icon-interactive'></i>
                <span>{item.mblog.comments_count}</span>
              </div>
              <div className='f-item'>
                <i className='iconfont icon-praise'></i>
                <span>{item.mblog.attitudes_count}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Index

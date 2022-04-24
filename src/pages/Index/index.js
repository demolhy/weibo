import React from 'react'
// import SwiperCore, { Pagination } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'
import { PullRefresh, Toast, List, Tabs, ImagePreview } from 'react-vant'
import { getArticleList, getOthoerList } from '~/api/index'
import { Player } from 'video-react'
import PropTypes from 'prop-types'
// import dayjs from 'dayjs'
import '../../../node_modules/video-react/dist/video-react.css' // import css
// import 'swiper/swiper-bundle.min.css'
import './index.scss'
import dayjs from 'dayjs'
// SwiperCore.use([Pagination])
class Index extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  state = {
    navs: [
      {
        name: '热门',
        key: 'hotList'
      },
      {
        name: '科技',
        key: 'scienceList'
      },
      {
        name: '游戏',
        key: 'gameList'
      },
      {
        name: '军事',
        key: 'militaryList'
      }
    ]
  }

  sonRef = (ref) => {
    this.child = ref
  }
  getChild = () => {
    console.log(this.child)
    return this.child
  }
  renderBullet = (index, className) => {
    let text
    switch (index) {
      case 0:
        text = '热门'
        break
      case 1:
        text = '科技'
        break
      case 2:
        text = '游戏'
        break
      case 3:
        text = '军事'
        break
    }
    return '<span class="' + className + '">' + text + '</span>'
  }

  onChangeSilde = (event) => {
    console.log(event)
    // const index = event.activeIndex
    // switch (index) {
    //   case 1:
    //     // scienceList
    //     break
    //   case 2:
    //     // gameList
    //     break
    //   case 3:
    //     // militaryList
    //     break
    //   default:
    //     // hotList
    //     break
    // }
  }
  render() {
    return (
      <Tabs
        sticky
        swipeable
        animated='false'
        color='rgb(239, 112, 14)'
        titleActiveColor='rgb(239, 112, 14)'
        onClickTab={this.onChangeSilde}
      >
        {this.state.navs.map((item) => (
          <Tabs.TabPane name={item.name} key={item.key} title={item.name}>
            {/* 内容 {index + 1} */}
            <Middle data={item.key}></Middle>
          </Tabs.TabPane>
        ))}
      </Tabs>
    )
  }
}

class Middle extends React.Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    data: PropTypes.string
  }
  componentDidMount() {
    this.getConetent(this.state.page)
  }
  state = {
    finished: true,
    page: 0,
    hotList: [],
    scienceList: [],
    gameList: [],
    militaryList: []
  }

  onRefresh = (showToast) => {
    // return new Promise((resolve) => {
    this.getConetent(this.state.page)
    setTimeout(() => {
      if (showToast) {
        Toast.info('刷新成功')
      }
      // setCount(count + 1);
      // resolve(true)
    }, 1000)

    // })
  }
  onLoad = () => {
    // Toast.info('触发')
    console.log('触发' + this.state.page)
    const pageNum = this.state.page + 1
    this.setState({
      page: pageNum
    })
    this.getConetent(this.state.page)
  }
  setFinishState = (data) => {
    console.log(data)
    this.setState({
      finished: data
    })
  }
  // 获取内容
  getConetent = async (event) => {
    this.setFinishState(true)
    console.log(this.props.data)
    if (this.props.data !== false) {
    // if (this.props.data === 'hotList') {
      await getArticleList(event).then(
        (res) => {
          // console.log('get article response:', res.data.cards)
          // console.log(res.data.cards[0].mblog.page_info.content2)
          const hotArr = this.state.hotList.concat(res.data.cards)
          this.setState({
            hotList: hotArr
          })
          // this.setFinishState(false)
        },
        () => {
          console.log('get response failed!')
        }
      )
    } else {
      await getOthoerList().then(
        (res) => {
          // console.log('get article response:', res.data.cards)
          // console.log(res.data.cards[0].mblog.page_info.content2)
          const hotArr = this.state.hotList.concat(res.data.statuses)
          this.setState({
            hotList: hotArr
          })
          // this.setFinishState(false)
        },
        () => {
          console.log('get response failed!')
        }
      )
    }
  }

  render() {
    return (
      <div className='content'>
        <PullRefresh onRefresh={() => this.onRefresh(true)}>
          {/* <Skeleton avatar /> */}
          <List
            loading={this.state.finished}
            immediateCheck='false'
            onLoad={this.onLoad}
          >
            <Son
              datas={this.state.hotList}
              getPageState={this.setFinishState}
            ></Son>
          </List>
        </PullRefresh>
      </div>
    )
  }
}

class Son extends React.Component {
  // componentDidMount() {
  //   this.props.onRefChild(this)
  // }
  static propTypes = {
    datas: PropTypes.array
  }

  state = {
    info: 'lisa'
  }
  componentWillUnmount = () => {
    this.setState = () => {
      return
    }
  }

  render() {
    return (
      <div>
        {this.props.datas.map((item) => (
          <div className='list' key={item.itemid}>
            <div className='list-header'>
              <div className='icon'>
                <img src={item?.mblog?.user?.profile_image_url} alt='' />
              </div>
              <div className='text'>
                <div className='title'>{item?.mblog?.user?.screen_name}</div>
                <div className='time'>
                  {/* {console.log(typeof(new Date(item.mblog.created_at).getTime()), new Date(item.mblog.created_at).getTime())} */}
                  {dayjs(new Date(item.mblog.created_at).getTime()).format(
                    'MM-DD'
                  )}{' '}
                  <span>来自 {item.mblog.source}</span>
                </div>
              </div>
            </div>
            <div className='list-content'>
              <div
                dangerouslySetInnerHTML={{ __html: item?.mblog?.text }}
              ></div>
              <div className='imgs'>
                {item?.mblog?.pics &&
                  item.mblog.pics.map((imgItem) => (
                    <img
                      src={imgItem.url}
                      alt=''
                      key={imgItem.url.toString()}
                      onClick={() =>
                        ImagePreview.open({
                          images: [imgItem.url],
                          closeable: true
                        })
                      }
                    />
                  ))}
              </div>
              <div className='player-content'>
                {/* {console.log(item.mblog.page_info.urls.mp4_720p_mp4)} */}
                {item?.mblog?.page_info?.urls && (
                  <div className='player'>
                    <Player
                      videoId='myplayer-container'
                      poster={item?.mblog?.page_info?.page_pic?.url}
                    >
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

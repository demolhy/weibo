import React from 'react'
import { Toast, NavBar, ImagePreview } from 'react-vant'
import { Ellipsis } from '@react-vant/icons'
import { getDetails } from '~/api/index'
import { Player } from 'video-react'
import dayjs from 'dayjs'
import '../../../node_modules/video-react/dist/video-react.css'
import './index.scss'

class Details extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: []
    }
  }
  componentDidMount() {
    getDetails().then(res => {
      console.log(res);
      this.setState({
        content: res
      })
    })
  }

  render() {
    return (
      <div>
        <NavBar
          placeholder
          title='微博正文'
          rightText={<Ellipsis color='#333' fontSize={20} />}
          onClickLeft={() => window.history.back()}
          onClickRight={() => Toast('按钮')}
        />
        <div className='d-content'>
          <div className='list-header'>
            <div className='icon'>
              <img src={this.state.content?.user?.profile_image_url} alt='' />
            </div>
            <div className='text'>
              <div className='title'>{this.state.content?.user?.screen_name}</div>
              <div className='time'>
                {dayjs(new Date(this.state.content.created_at).getTime()).format(
                  'MM-DD'
                )}{' '}
                <span>来自 {this.state.content.source}</span>
              </div>
            </div>
          </div>
          <div className='list-content'>
            <div dangerouslySetInnerHTML={{ __html: this.state.content.text }}></div>
            <div className='imgs'>
              {this.state.content.pics &&
                this.state.content.pics.map((imgItem) => (
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
              {this.state.content?.page_info?.urls && (
                <div className='player'>
                  <Player
                    videoId='myplayer-container'
                    poster={this.state.content.page_info.page_pic.url}
                  >
                    <source src={this.state.content.page_info.urls.mp4_720p_mp4} />
                  </Player>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default Details

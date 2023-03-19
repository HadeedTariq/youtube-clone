import React from 'react'
import '../Css/Feed.css'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
function Video({ videos }) {
  // console.log(videos)
  return (
    <>
      <div className="container">
        {
          videos.map((item, idx) => {
           return (<div className="box1" key={idx}>
              {item.id.videoId && <VideoCard item={item} />}
              {item.id.channelId && <ChannelCard item={item} />}
            </div>)
          })
        }
      </div>
    </>
  )
}

export default Video
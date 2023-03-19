import React from 'react'
import { Link } from 'react-router-dom'
// import {demoThumbnailUrl,demoChannelTitle,demoChannelUrl,demoProfilePicture,demoVideoTitle,demoVideoUrl} from '../utils/constants'
import '../Css/Feed.css'
import {TiTick} from 'react-icons/ti'
function VideoCard({item:{id:{videoId},snippet}}) {
  return (
    <>
    <Link className='video-link' to={videoId ?`/video/${videoId}`:"id"}>
      <img className='video-img' src={snippet?.thumbnails?.high?.url} alt="" />
      <p>{snippet.description.slice(0,60)}</p>
      <p id='channel-title'>{snippet.channelTitle} <TiTick className='tick'/></p>
    </Link>
    </>
  )
}

export default VideoCard
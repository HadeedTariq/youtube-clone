import React from 'react'
import '../Css/Feed.css'
import { TiTick } from 'react-icons/ti'
import {Link} from 'react-router-dom'
function ChannelCard({item,marginTop}) {
    // console.log(item)
  return (
    <>
      <Link className='card-link' to={`/channel/${item?.id?.channelId}`}>
        <img style={{marginTop:marginTop}} className='card-img' src={item?.snippet?.thumbnails.high.url} alt="" />
        <h4>{item?.snippet?.channelTitle} <TiTick className='tick'/></h4>
        <p style={{textAlign:"center"}}>{item?.statistics?.subscriberCount && (
            parseInt(item?.statistics?.subscriberCount).toLocaleString()
        )} Subscribers</p>
      </Link>
    </>
  )
}

export default ChannelCard
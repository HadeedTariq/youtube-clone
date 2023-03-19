import React from 'react'
import { useParams } from 'react-router-dom'
import '../Css/Feed.css'
import { useState, useEffect } from 'react'
import { Box } from '@mui/system'
import { Video, ChannelCard } from './'
import { fetchData } from '../utils/FetchData'
function ChannelDetail() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [videos, setVideo] = useState([])
  // console.log(videos)
  // console.log(channelDetail)
  useEffect(()=>{
    let fetchChannelData=async()=>{
      let channelData=await fetchData(`channels?part=snippet&id=${id}`)
      setItem(channelData?.items[0])
    }
    let fetchVideoData=async()=>{
      let videoData=await fetchData(`search?channelId=${id}&part=snippet&order=date`)
      setVideo(videoData.items)
    }
    fetchChannelData()
    fetchVideoData()
  },[id])
  return (
    <>
      <Box minHeight="95vh">
        <Box>
          <div style={{
            background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,39,121,1) 51%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height:"300px"
          }} />
          <ChannelCard item={item} marginTop="-93px"/>
          <Video videos={videos}/>
        </Box>
      </Box>
    </>
  )
}

export default ChannelDetail
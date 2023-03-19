import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TiTick } from 'react-icons/ti'
import ReactPlayer from 'react-player'
import '../Css/Feed.css'
import Video from './Video'
import { Link } from 'react-router-dom'
import { fetchData } from '../utils/FetchData'
import { Box, Stack } from '@mui/system'
function VideoDetail() {
  let [videosDetail, setVideosDetail] = useState(null)
  const [videos, setVideos] = useState([])
  let { id } = useParams()
  useEffect(() => {
    let fetchFunction = async () => {
      let res = await fetchData(`videos?part=snippet,statistics&id=${id}`)
      // let data=await res.json()
      setVideosDetail(res.items[0])
    }
    let fetchVideos = async () => {
      let res = await fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      setVideos(res?.items)
    }
    fetchFunction()
    fetchVideos()
  }, [id])
  // console.log(videosDetail)
  if (!videosDetail?.snippet) {
    return "Loading...";
  }
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videosDetail;
  return (
    <Box minHeight="94vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer width='70vw' height='80vh' url={`https://www.youtube.com/watch?v=${id}`} controls />
            <h4 style={{ paddingTop: "10px" }}>{title}</h4>
            <Stack width="100%" direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${id}`} style={{ textDecoration: "none" }}>
                <h3 style={{ color: 'white', cursor: "pointer" }}>{channelTitle} <TiTick className='tick' /></h3>
              </Link>
              <h3>{parseInt(viewCount).toLocaleString()} views</h3>
              <h3>{parseInt(likeCount).toLocaleString()} likes</h3>
            </Stack>
          </Box >
          </Box>
          <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems='center'>
            <Video videos={videos} />
          </Box>
      </Stack>
      
    </Box>
  )
}

export default VideoDetail;
import React,{useState,useEffect} from 'react'
import '../Css/Feed.css'
import Sidebar from './Sidebar'
import Video from './Video'
import {fetchData} from '../utils/FetchData'
function Feed() {
  const [category, setCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(()=>{
     let fetchFunction=async()=>{
      let res=await fetchData(`search?part=snippet&q=${category}`)
      // let data=await res.json()
      setVideos(res.items)
     }
     fetchFunction()
  },[category])
  return (
    <>
     <div className="feed">
        <div className="left">
          <Sidebar category={category} setCategory={setCategory}/>
        </div>
        <div className="right">
          <h4>{category} <span style={{color:"red"}}>Videos</span></h4>
          <div className="videos">
            <Video videos={videos}/>
          </div>
        </div>
     </div>
    </>
  )
}

export default Feed
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../Css/Feed.css'
import Video from './Video'
import {fetchData} from '../utils/FetchData'
function SearchFeed() {
  let {searchterm}=useParams();
  const [videos, setVideos] = useState([])
  useEffect(()=>{
     let fetchFunction=async()=>{
      let res=await fetchData(`search?part=snippet&q=${searchterm}`)
      // let data=await res.json()
      setVideos(res.items)
     }
     fetchFunction()
  },[searchterm])
  return (
    <>
     <div className="feed">
        <div className="right">
          <h4>Search Results For: <span style={{color:"red"}}>{searchterm} </span> Videos</h4>
          <div className="videos">
            <Video videos={videos}/>
          </div>
        </div>
     </div>
    </>
  )
}

export default SearchFeed;
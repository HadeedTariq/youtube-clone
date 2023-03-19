import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../Css/Navbar.css'
import {BsSearch} from 'react-icons/bs'
function SearchBar() {
  let [data,setData]=useState('')
  let navigate=useNavigate()
  let handleSubmit=()=>{
    if(data){
      navigate(`/search/${data}`)
      setData('')
    }
  }
  return (
    <>
      <div className="box">
        <input value={data} type="text"  id="search-box" placeholder='Search' onChange={(e)=>setData(e.target.value)}/>
        <BsSearch className='search-logo' onClick={handleSubmit}/>
      </div>
    </>
  )
}

export default SearchBar
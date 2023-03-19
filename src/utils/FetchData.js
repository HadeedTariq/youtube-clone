import axios from "axios";
const options = {
  params: {part: 'snippet',maxResults:'50', videoId: 'M7FIvfx5J10'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchData=async(url)=>{
    let {data}=await axios.get(`https://youtube-v31.p.rapidapi.com/${url}`,options)
    return data;
}

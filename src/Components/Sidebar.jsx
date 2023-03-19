import { categories } from '../utils/constants'
import '../Css/Feed.css'
function Sidebar({category,setCategory}) {
  return (
    <>
      <div className="side-bar">
        {
          categories.map((categorys,index) =>
            <button className='category-btn' key={index}>
              <span id='icon'>{categorys.icon}</span>
              <span id='name' onClick={()=>setCategory(categorys.name)}>{categorys.name}</span>
            </button>
          )
        }
      </div>
    </>
  )
}

export default Sidebar
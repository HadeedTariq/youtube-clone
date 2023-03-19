import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './Components'
function App() {
  return (
    <>
      <div style={{ color: "white" }}>
        <Router>
          <Navbar />
          <div style={{margin:"0px 37px"}}>
            <Routes>
              <Route path='/' exact element={<Feed />} />
              <Route path='/video/:id' exact element={<VideoDetail />} />
              <Route path='/channel/:id' exact element={<ChannelDetail />} />
              <Route path='/search/:searchterm' exact element={<SearchFeed />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;

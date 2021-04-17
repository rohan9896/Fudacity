import './App.css';
import AdCard from './components/AdCard/AdCard';
import CategoryScroller from './components/CategoryScroller/CategoryScroller';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import VideoCard from './components/VideoCard/VideoCard';
import VideoCardExpand from './components/VideoCardExpand/VideoCardExpand';
import VideoCardGrid from './components/VideoCardGrid/VideoCardGrid';
import VideoSuggestionsCard from './components/VideoSuggestionsCard/VideoSuggestionsCard';

function App() {
  return (
    <div>
      <NavBar />
      <VideoCardExpand />
      <AdCard />
      <VideoSuggestionsCard thumbnail="https://img.youtube.com/vi/Wa6it7j_OHY/mqdefault.jpg" title="Learn useCallback In 8 Minutes" channel="WebDev Simplified" views={2.2} />
      <VideoCard /> 
      <SideBar />
      <CategoryScroller />  
      <VideoCardGrid />
    </div>
  );
}

export default App;
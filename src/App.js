import "./App.css";
import CategoryScroller from "./components/CategoryScroller/CategoryScroller";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <CategoryScroller />
      <LandingPage />
    </div>
  );
}

export default App;

/* <CategoryScroller />
<VideoCardGrid />
<VideoCardExpand />
<AdCard />
<VideoSuggestionsCard
  thumbnail="https://img.youtube.com/vi/Wa6it7j_OHY/mqdefault.jpg"
  title="Learn useCallback In 8 Minutes"
  channel="WebDev Simplified"
  views={2.2}
/>
<VideoCard />
<SideBar /> */
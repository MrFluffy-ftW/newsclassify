import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Clouds from "./components/Clouds";
import ClassifyScreen from "./pages/ClassifyScreen";

import HomeScreen from "./pages/HomeScreen";
import BaseScrape from "./pages/BaseScrape";
import StartScreen from "./pages/StartScreen";
import SummarizeScreen from "./pages/SummarizeScreen";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/start" element={<StartScreen />} />
        <Route path="/classify" element={<ClassifyScreen />} />
        <Route path="/summarize" element={<SummarizeScreen />} />
        <Route path="/scrape" element={<BaseScrape />} />
        <Route path="/test" element={<Test />} />
        <Route path="/clouds" element={<Clouds />} />
      </Routes>
    </Router>
  );
}

export default App;

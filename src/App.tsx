import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostPage from "./pages/blog/post";
import HomePage from "./pages/home/page"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/write" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
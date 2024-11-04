import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";
import PageNotFound from "./components/PageNotFound";
import ArticleDetail from "./components/ArticleDetail";

const App = () => {
  return (
    <div className="larg:px- mx-auto flex max-w-screen-larg px-0">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

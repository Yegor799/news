import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = lazy(() => import('./views/HomeView/HomeView/HomeView'));
const Article = lazy(() => import('./views/ArticleView/ArticleView'));
const NotFound = lazy(() => import('./views/NotFound/NotFound'));

const API_KEY = '6bcdc3a46d7345ad896a7e3e847ee377';

function App() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getNews() {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
      );
      setNews(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="App">
      <Container>
        <Header />

        <Suspense fallback={<h1>LOADING...</h1>}>
          <Routes>
            <Route
              path="/"
              exact
              element={<HomePage loading={loading} news={news} />}
            ></Route>
            <Route
              path="/articles/:articleId"
              element={<Article news={news} />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;

import React from 'react';
import './HomeViev.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const API_KEY = '6bcdc3a46d7345ad896a7e3e847ee377';

export default function HomeView() {
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

  console.log(news);

  return (
    <>
      {loading && (
        <div className="Loader">
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      )}
      <ul className="News">
        {news &&
          news.data.articles.map(item => (
            <li key={item.title} className="News-item">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

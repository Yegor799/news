import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '6bcdc3a46d7345ad896a7e3e847ee377';

export default function HomeView() {
  const [news, setNews] = useState(null);

  async function getNews() {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
      );
      setNews(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  console.log(news);

  return (
    <ul>{news && news.data.articles.map(item => <li>{item.title}</li>)}</ul>
  );
}

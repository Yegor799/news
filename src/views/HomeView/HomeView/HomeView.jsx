import React from 'react';
import './HomeViev.css';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function HomeView({ news, loading, filter }) {
  const getFilteredNews = () =>
    news.data.articles.filter(item =>
      item.title.toLowerCase().includes(filter.toLocaleLowerCase()),
    );

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
          getFilteredNews().map(item => (
            <li key={item.title} className="News-item">
              <Link to={`/articles/${item.title}`}>
                <h2 className="News-title">{item.title}</h2>
              </Link>
              <p>{item.description}</p>
            </li>
          ))}
      </ul>
    </>
  );
}

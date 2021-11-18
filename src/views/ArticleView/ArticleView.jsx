import { useParams } from 'react-router-dom';
import './ArticleView.css';

export default function ArticleView({ news }) {
  const { articleId } = useParams();
  const data = localStorage.getItem('data');
  localStorage.setItem('data', JSON.stringify(news));

  const getArticle = () =>
    news.data.articles.find(article => article.title === articleId);

  const article = news ? getArticle() : JSON.parse(data);

  return (
    <>
      {article && (
        <div>
          <h2 className="Article-title">{article.title}</h2>
          <p className="Article-content">{article.description}</p>
        </div>
      )}
    </>
  );
}

import React, { useState } from 'react';
import './App.css';
import image1 from './images/1.jpeg';
import image2 from './images/2.jpeg';

// 定义文章数据
const articles = [
  { id: 1, title: '美丽老婆', image: image1, link: '/neural-networks' },
  { id: 2, title: '美丽老婆', image: image2, link: '/deep-learning' },
  { id: 3, title: '自然语言处理', image: 'https://via.placeholder.com/300x300.png?text=自然语言处理', link: '/nlp' },
  { id: 4, title: '机器学习', image: 'https://via.placeholder.com/300x300.png?text=机器学习', link: '/machine-learning' },
  { id: 5, title: '计算机视觉', image: 'https://via.placeholder.com/300x300.png?text=计算机视觉', link: '/computer-vision' },
  { id: 6, title: '强化学习', image: 'https://via.placeholder.com/300x300.png?text=强化学习', link: '/reinforcement-learning' },
  { id: 7, title: '生成对抗网络', image: 'https://via.placeholder.com/300x300.png?text=生成对抗网络', link: '/gan' },
  { id: 8, title: '迁移学习', image: 'https://via.placeholder.com/300x300.png?text=迁移学习', link: '/transfer-learning' },
  { id: 9, title: '知识图谱', image: 'https://via.placeholder.com/300x300.png?text=知识图谱', link: '/knowledge-graph' },
];

function ArticleCard({ article }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="article-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={article.image} alt={article.title} className={`article-image ${isHovered ? 'visible' : ''}`} />
      <h3 className={`article-title ${isHovered ? 'hidden' : ''}`}>{article.title}</h3>
      <a href={article.link} className="article-link"></a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="article-grid">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default App;

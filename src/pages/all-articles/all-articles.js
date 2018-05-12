import React from 'react';
import './all-articles.css'
import ArticleCard from "../../components/article-card/article-card";

export default class AllArticles extends React.Component
{
  componentWillMount(){
    this.setState(prevState => {
      return require('../../json-mocks/articles.json');
    });
  }

  render(){
    let articles = this.state.data.map(article => {
      return (
        <ArticleCard
          articleImage={article.image}
          articleTitle={article.title}
          articleHref="/articles"
        />
      );
    });
    return(
      <div className="gray-container">
        <div className="row">
          {articles}
        </div>
      </div>
    );
  }
}

import React from 'react';
import SectionHeader from '../../components/section-header/section-header'
import ArticleCard from '../../components/article-card/article-card'
import './articles.css'

export default class Articles extends React.Component {
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
      <div className="container-fluid articles-gray-container">
        <SectionHeader
          sectionTitle="Articles"
          sectionHref="/articles"
        />
        <div className="row">
          {articles}
        </div>
      </div>
    );
  }
}

import React from 'react';
import './article-content.css'
import Comments from '../../components/comments/comments'
import Share from '../../components/share/share'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class ArticleContent extends React.Component
{
  componentWillMount(){
    this.setState(prevState => {
      let articles = require('../../json-mocks/articles.json').data;
      return articles[this.props.match.params.id-1];
    });
  }

  render(){
    let article = this.state;
    return (
      <div className="article-content">
        <h1 className="main-title">{article.title}</h1>
        <div className="article-info">
          <img className="author-image" src="../images/bio-img.jpg"/>
          <a className="author-name" href="/">Amr Saeed</a>
          <span className="article-date">{article.date}</span>
        </div>
        <img className="main-image" src={article.image}/>
        <div className="article-text">
          {ReactHtmlParser(article.content)}
        </div>
        <Share/>
        <Comments dataHref={"https://www.amrsaeed/articles/" + this.props.match.params.id}/>
      </div>
    );
  }
}

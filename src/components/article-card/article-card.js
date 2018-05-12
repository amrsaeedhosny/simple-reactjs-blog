import React from 'react';
import './article-card.css'

export default class ArticleCard extends React.Component
{
  render(){
    return(
      <a href={this.props.articleHref} className="col-md-3 article-card">
        <img className="article-image" src={this.props.articleImage}/>
        <div className="article-title">{this.props.articleTitle}</div>
      </a>
    );
  }
}

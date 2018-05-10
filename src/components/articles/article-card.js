import React from 'react';
import SectionHeader from '../section-header/section-header'
import './articles.css'

export default class ArticleCard extends React.Component
{
  render(){
    return(
      <div className="col-md-3 article-card">
        <img className="article-image" src="./images/article.jpg"/>
        <div className="article-title">Becareful a routine may wear a time management mask</div>
      </div>
    );
  }
}

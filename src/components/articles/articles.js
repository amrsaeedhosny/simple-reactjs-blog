import React from 'react';
import SectionHeader from '../section-header/section-header'
import ArticleCard from './article-card'
import './articles.css'

export default class Articles extends React.Component {
  render(){
    return(
      <div className="container-fluid gray-container">
        <SectionHeader title="Articles"/>
        <div className="row">
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
        </div>
      </div>
    );
  }
}

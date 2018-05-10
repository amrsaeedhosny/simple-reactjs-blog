import React from 'react';
import SectionHeader from '../section-header/section-header'
import ArticleCard from './article-card'
import './articles.css'

export default class Articles extends React.Component {
  render(){
    return(
      <div className="container-fluid gray-container">
        <SectionHeader title="Articles"/>
        <div class="row">
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
        </div>
        <div class="row">
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
          <ArticleCard/>
        </div>
      </div>
    );
  }
}

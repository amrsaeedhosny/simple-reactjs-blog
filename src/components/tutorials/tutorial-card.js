import React from 'react';
import SectionHeader from '../section-header/section-header'
import './tutorials.css'

export default class TutorialCard extends React.Component
{
  render(){
    return(
      <div className="col-md-3 tutorial-card">
        <img className="tutorial-image" src="./images/article.jpg"/>
        <div className="tutorial-title">Becareful a routine may wear a time management mask</div>
      </div>
    );
  }
}

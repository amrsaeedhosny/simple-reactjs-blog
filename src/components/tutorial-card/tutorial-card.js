import React from 'react';
import './tutorial-card.css'

export default class TutorialCard extends React.Component
{
  render(){
    return(
      <a href={this.props.tutorialHref} className="col-md-3 tutorial-card">
        <img className="tutorial-image" src={this.props.tutorialImage}/>
        <div className="tutorial-title">{this.props.tutorialTitle}</div>
      </a>
    );
  }
}

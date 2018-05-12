import React from 'react';
import './tutorial-content.css'
import Comments from '../../components/comments/comments'

export default class TutorialContent extends React.Component
{
  render(){
    return (
      <div className="container-fluid tutorial-content">
        <h1 className="main-title">Becareful a routine may wear a time management mask!</h1>
        <div className="tutorial-info">
          <img className="author-image" src="./images/bio-img.jpg"/>
          <a className="author-name" href="/">Amr Saeed</a>
          <span className="tutorial-date">21/1/2018 at 12:00 AM</span>
        </div>
        <img className="main-image" src="./images/article.jpg"/>
        <div className="tutorial-text">
          <h2>Introduction</h2>
          <p>
            One of the common traps that most of people inadvertently fall into is believing that they're managing
            their time daily by just repeating things over and over at specific periods of time. Eventually you discover
            that these repetitions transform you from a creative person to a routine one. So how can you determine whether
            you're following some routine or you're really managing your time correctly.
          </p>
          <h2>How to start learning correctly</h2>
          <p>
            One of the common traps that most of people inadvertently fall into is believing that they're managing
            their time daily by just repeating things over and over at specific periods of time. Eventually you discover
            that these repetitions transform you from a creative person to a routine one. So how can you determine whether
            you're following some routine or you're really managing your time correctly.
          </p>
          <h2>Conclusion</h2>
          <p>
            One of the common traps that most of people inadvertently fall into is believing that they're managing
            their time daily by just repeating things over and over at specific periods of time. Eventually you discover
            that these repetitions transform you from a creative person to a routine one. So how can you determine whether
            you're following some routine or you're really managing your time correctly.
          </p>
        </div>
        <Comments/>
      </div>
    );
  }
}

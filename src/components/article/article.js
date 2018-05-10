import React from 'react';
import './article.css'

export default class Article extends React.Component
{
  render(){
    return (
      <div className="container-fluid article">
        <div className="hopa"> </div>
        <img className="main-image" src="./images/article.jpg"/>
        <h2 className="main-title">Becareful a routine may wear a time management mask!</h2>
        <p>One of the common traps that most of people inadvertently fall into is believing that they're managing their time daily by just repeating things over and over at specific periods of time. Eventually you discover that these repetitions transform you from a creative person to a routine one. So how can you determine whether you're following some routine or you're really managing your time correctly.

First let's talk about why do people really need to manage their time. If you ask this question to different people who come from different environments you'll find the answers are concentrated around these couple of points: learning many things in a short time, providing more time to achieve some goal, to gain a new skill, working besides going to college, ...etc. If you take a deep look you'll find that those points are closely related. They're all about being good at something or achieving something. They're all about Performance and Objective.

Performance is one of the key measures that indicates whether you're really getting a benefit from your daily routine or not. If you do things over and over and your performance is somehow constant. You might have a problem especially if you're in a career that requires continuous improvement and self-development. You must know that the way you measure your performance affects the person who you want to become in the future. If there's no clear measure for your performance based on your daily routines your performance may be improved randomly.

Usually performance is not enough. You may improve your performance at something but without a clear understanding of how it's gonna benefit you in your career and life. And here comes the role of your objectives. You have to state a clear objective that describes what should be accomplished eventually after all of those repetitive tasks. It's not necessary to state a long term ones if you don't have. Short ones are okay as long as they give you some sort of indication about what you are doing.

To sum up, in order not to fall into the routine trap. You have to find some effective performance measure for yourself with a clear objective about what should be accomplished daily and how it's gonna benefit your life and your career.</p>
      </div>
    );
  }
}
import React from 'react';
import './tutorial-content.css'
import Comments from '../../components/comments/comments'
import Share from '../../components/share/share'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default class TutorialContent extends React.Component
{
  componentWillMount(){
    this.setState(prevState => {
      let tutorials = require('../../json-mocks/tutorials.json').data;
      return tutorials[this.props.match.params.id-1];
    });
  }

  render(){
    let tutorial = this.state;
    return (
      <div className="tutorial-content">
        <h1 className="main-title">{tutorial.title}</h1>
        <div className="tutorial-info">
          <img className="author-image" src="../images/bio-img.jpg"/>
          <a className="author-name" href="/">Amr Saeed</a>
          <span className="tutorial-date">{tutorial.date}</span>
        </div>
        <img className="main-image" src={tutorial.image}/>
        <div className="tutorial-text">
          {ReactHtmlParser(tutorial.content)}
        </div>
        <Share/>
        <Comments dataHref={"https://www.amrsaeed/tutorials/" + this.props.match.params.id}/>
      </div>
    );
  }
}

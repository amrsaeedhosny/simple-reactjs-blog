import React from 'react';
import './content.css'
import Comments from './comments/comments'
import Share from './share/share'
import ReactHtmlParser from 'react-html-parser';

export default class Content extends React.Component
{
  componentWillMount(){
    switch (this.props.type) {
      case "article":
        this.setState(prevState => {
          let items = require("../../data/articles.json").data;
          for(let i = 0; i < items.length; i++){
            if(items[i].id == this.props.id){
              return items[i];
            }
          }
        });
        break;
      case "tutorial":
        this.setState(prevState => {
          let items = require("../../data/tutorials.json").data;
          for(let i = 0; i < items.length; i++){
            if(items[i].id == this.props.id){
              return items[i];
            }
          }
        });
        break;
      default:
    }
  }

  render(){
    let content = this.state;
    return (
        <div className="content">
          <h1 className="main-title">{content.title}</h1>
          <div className="content-info">
            <img className="author-image" alt="author" src="../images/bio-img.jpg"/>
            <a className="author-name" href="/">Amr Saeed</a>
            <span className="content-date">{content.date}</span>
          </div>
          <img className="main-image" alt="content" src={content.image}/>
          <div className="content-text">
            {ReactHtmlParser(content.content)}
          </div>
          <Share/>
          <Comments dataHref={this.props.commentsUrl}/>
        </div>
    );
  }
}

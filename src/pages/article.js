import React from 'react';
import Content from "../components/content/content"

export default class Article extends React.Component
{
  render(){
    return (
      <Content
        type="article"
        src="../../data/articles.json"
        id={this.props.match.params.id}
        commentsUrl={"https://www.amrsaeed.com/articles/" + this.props.match.params.id}
      />
    );
  }
}

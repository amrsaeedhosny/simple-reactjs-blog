import React from 'react';
import Content from "../components/content/content"

export default class Tutorial extends React.Component
{
  render(){
    return (
      <Content
        type="tutorial"
        src="../../data/tutorials.json"
        id={this.props.match.params.id-1}
        commentsUrl={"https://www.amrsaeed.com/tutorials/" + (this.props.match.params.id - 1)}
      />
    );
  }
}

import React from 'react';
import './section-header.css'

export default class SectionHeader extends React.Component
{
  render(){
    return (
      <div className="section-header">
        <div className="left-header">
          <span className="title">{this.props.sectionTitle}</span>
        </div>
        <div className="right-header">
          <a className="href-title" href={this.props.sectionHref}>See all</a>
        </div>
      </div>
    );
  }
}

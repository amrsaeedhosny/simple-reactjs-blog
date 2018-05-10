import React from 'react';
import './section-header.css'

export default class SectionHeader extends React.Component
{
  render(){
    let sectionHeader = this.props;
    return (
      <div className="section-header">
        <div className="left-header">
          <span className="title">{sectionHeader.title}</span>
        </div>
        <div className="right-header">
          <a className="href-title" href="#">See all</a>
        </div>
      </div>
    );
  }
}

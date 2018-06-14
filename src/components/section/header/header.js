import React from 'react';
import './header.css'

export default class Header extends React.Component
{
  render(){
    return (
      <div className="header">
        <div className="left-header">
          <span className="section-title">{this.props.sectionTitle}</span>
        </div>
        <div className="right-header">
          <a className="href-title" href={this.props.sectionHref}>See all</a>
        </div>
      </div>
    );
  }
}

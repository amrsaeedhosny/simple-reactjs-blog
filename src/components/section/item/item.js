import React from 'react';
import './item.css'

export default class Item extends React.Component
{
  render(){
    return(
      <a href={this.props.href} className="item" style={{background: this.props.bgColor}}>
        <img className="image" alt="item" src={this.props.image}/>
        <div className="title">{this.props.title}</div>
      </a>
    );
  }
}

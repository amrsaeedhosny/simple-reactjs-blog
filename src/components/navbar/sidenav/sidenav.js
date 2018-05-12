import React from 'react';
import './sidenav.css'

export default class Sidenav extends React.Component
{
  closeNav() {
      this.refs.mySidenav.style.width ='0px';
  }

  openNav() {
      this.refs.mySidenav.style.width='150px';
  }

  render(){
    return(
      <div>
        <div ref="mySidenav" className="sidenav">
          <a href="#" className="close-btn" onClick={this.closeNav.bind(this)}>&times;</a>
          <a href="/">Home</a>
          <a href="/articles">Articles</a>
          <a href="/tutorials">Tutorials</a>
        </div>
        <span className="open-btn" onClick={this.openNav.bind(this)}>&#9776;</span>
      </div>
    );
  }
}

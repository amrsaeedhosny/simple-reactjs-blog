import React from 'react';
import './navbar.css'
import Sidenav from './sidenav/sidenav'

export default class Navbar extends React.Component
{
  render(){
    return(
      <div className="navbar">
        <Sidenav/>
      </div>
    );
  }
}

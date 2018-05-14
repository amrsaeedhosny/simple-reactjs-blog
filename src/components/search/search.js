import React from 'react'
import './search.css'

export default class Search extends React.Component{
  render(){
    return(
      <div className="search">
        <input className="search-field" type="text" placeholder="Search for some topic"/>
      </div>
    );
  }
}

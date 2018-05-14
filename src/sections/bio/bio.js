import React from 'react';
import './bio.css'

export default class Bio extends React.Component
{
  componentWillMount(){
    this.setState(prevState => {
      return require("../../json-mocks/bio.json");
    })
  }
  render(){
    let bio = this.state.data;
    return(
      <div className="black-container bio-container">
        <div className="bio">
          <img className="bio-image" src={bio.image}/>
          <div className="bio-details">
            <h1>{bio.name}</h1>
            <h3>{bio.job}</h3>
            <p>{bio.description}</p>
          </div>
          <div className="bio-social">
            <a href={bio.facebook}><i className="fa fa-facebook-f fa-lg"></i></a>
            <a href={bio.youtube}><i className="fa fa-youtube fa-lg"></i></a>
            <a href={bio.linkedin}><i className="fa fa-linkedin fa-lg"></i></a>
            <a href={bio.github}><i className="fa fa-github fa-lg"></i></a>
            <a href={bio.stackoverflow}><i className="fa fa-stack-overflow fa-lg"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import SectionHeader from '../section-header/section-header'
import TutorialCard from './tutorial-card'
import './tutorials.css'

export default class Tutorials extends React.Component
{
  render(){
    return(
      <div className="container-fluid black-container">
        <SectionHeader title="Tutorials"/>
        <div class="row">
          <TutorialCard/>
          <TutorialCard/>
          <TutorialCard/>
          <TutorialCard/>
        </div>
        <div class="row">
          <TutorialCard/>
          <TutorialCard/>
          <TutorialCard/>
          <TutorialCard/>
        </div>
      </div>
    );
  }
}

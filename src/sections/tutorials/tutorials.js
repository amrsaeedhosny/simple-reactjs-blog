import React from 'react';
import SectionHeader from '../../components/section-header/section-header'
import TutorialCard from '../../components/tutorial-card/tutorial-card'
import './tutorials.css'

export default class Tutorials extends React.Component
{
  componentWillMount(){
    this.setState(prevState => {
      return require('../../json-mocks/tutorials.json');
    });
  }

  render(){
    let tutorials = this.state.data.map(tutorial => {
      return (
        <TutorialCard
          tutorialImage={tutorial.image}
          tutorialTitle={tutorial.title}
          tutorialHref="/tutorials"
        />
      );
    });
    return(
      <div className="container-fluid tutorials-black-container">
        <SectionHeader
          sectionTitle="Tutorials"
          sectionHref="/tutorials"
        />
        <div className="row">
          {tutorials}
        </div>
      </div>
    );
  }
}

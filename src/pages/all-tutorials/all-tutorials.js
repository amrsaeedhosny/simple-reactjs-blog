import React from 'react';
import './all-tutorials.css'
import TutorialCard from "../../components/tutorial-card/tutorial-card";

export default class AllTutorials extends React.Component
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
        <div className="gray-container">
          <div className="row">
            {tutorials}
          </div>
        </div>
      );
    }
}

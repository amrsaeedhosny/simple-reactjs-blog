import React from 'react';

import Bio from "../bio/bio";
import Articles from "../articles/articles";
import Tutorials from "../tutorials/tutorials";
import Article from "../article/article"

export default class Home extends React.Component
{
    render(){
        return(
            <div>
              <Bio
                image="./images/bio-img.jpg"
                name="Amr Saeed"
                job="Software Developer at Skolera"
                description="Well, I'm a software developer with a dream to become a skilled software architect. I've got a passion for software engineering, design principles, and effective management."
                facebook="https://www.facebook.com/amr.saeed.142"
                github="https://github.com/amrshosny"
                stackoverflow="https://stackoverflow.com/users/6086098/amr-saeed?tab=profile"
                youtube="https://www.youtube.com/channel/UCwj5ebVQHiYrOAchjejve-g/featured?view_as=subscriber"
                linkedin="https://www.linkedin.com/in/amrshosny/"/>
              <Articles/>
              <Tutorials/>
            </div>
        );
    }
}

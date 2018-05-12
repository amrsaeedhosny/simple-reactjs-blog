import React from 'react';

import Bio from "../../sections/bio/bio";
import Articles from "../../sections/articles/articles";
import Tutorials from "../../sections/tutorials/tutorials";

export default class Home extends React.Component
{
    render(){
        return(
            <div>
              <Bio/>
              <Articles/>
              <Tutorials/>
            </div>
        );
    }
}

import React from 'react';

import Bio from "../components/bio/bio";
import Section from "../components/section/section";

export default class Home extends React.Component
{
    render(){
        return(
            <div>
              <Bio/>
              <Section
                type="articles"
                sectionTitle="Articles"
                sectionHref="/articles/"
                bgColor="#efefef"
                itemBgColor="#171717"
                limit="8"
              />
              <Section
                type="tutorials"
                sectionTitle="Tutorials"
                sectionHref="/tutorials/"
                bgColor="#171717"
                itemBgColor="#157d7e"
                limit="8"
              />
            </div>
        );
    }
}

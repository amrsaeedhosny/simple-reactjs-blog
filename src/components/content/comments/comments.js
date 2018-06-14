import React from 'react';

export default class Comments extends React.Component
{
  render(){
    return(
      <div className="fb-comments" data-href={this.props.dataHref} data-width="100%" data-numposts="3">
      </div>
    );
  }
}

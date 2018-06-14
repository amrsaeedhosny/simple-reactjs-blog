import React from 'react';
import Item from '../components/section/item/item'

export default class Section extends React.Component {
  componentWillMount(){
    this.setState(prevState => {
      return require("../data/articles.json");
    });
  }

  render(){
    let items = this.state.data.map(item => {
      return (
        <Item
          key={item.id}
          image={item.image}
          title={item.title}
          href={"/articles/" + item.id}
          bgColor="#171717"
        />
      );
    });
    return(
      <div style={{padding: "50px"}}>
        <div className="row">
          {items}
        </div>
      </div>
    );
  }
}

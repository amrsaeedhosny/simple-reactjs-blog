import React from 'react';
import Header from './header/header'
import Item from './item/item'
import './section.css'

export default class Section extends React.Component {
  componentWillMount(){
    switch (this.props.type) {
      case "articles":
        this.setState(prevState => {
          return require("../../data/articles.json");
        });
        break;
      case "tutorials":
        this.setState(prevState => {
          return require("../../data/tutorials.json");
        });
        break;
      default:
    }
  }

  render(){
    let section = this.state.data.map(item => {
      return (
        <Item
          key={item.id}
          image={item.image}
          title={item.title}
          href={this.props.sectionHref + item.id}
          bgColor={this.props.itemBgColor}
        />
      );
    });
    return(
      <div className="section-container" style={{background: this.props.bgColor}}>
        <Header
          sectionTitle={this.props.sectionTitle}
          sectionHref={this.props.sectionHref}
        />
        <div className="row">
          {section.slice(0, this.props.limit)}
        </div>
      </div>
    );
  }
}

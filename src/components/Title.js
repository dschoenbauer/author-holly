import React from "react";

export class Title extends React.Component {
  render() {
    return (<h1 className={this.props.styleName}>Holly Schoenbauer</h1>);
  }
}
Title.defaultProps = {
  styleName: 'title'
}; 
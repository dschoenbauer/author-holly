import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { ContactIcons } from "./ContactIcons";

export class Navigation extends React.Component {
  render() {
    return (
      <div className={this.props.styleName}>
        <ul className='navigation'>
          <li><Link to='/bio'>Bio</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/books'>Books I Love</Link></li>
        </ul>
        {this.props.social &&
          <ContactIcons></ContactIcons>
        }
      </div>
    )
  }
}
Navigation.propTypes = {
  social: PropTypes.bool,
  styleName: PropTypes.string
};
Navigation.defaultProps = {
  social: true,
  styleName: 'control'
};
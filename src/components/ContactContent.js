import React from "react";
import { ContactDetails } from "../components/ContactDetails";

export class ContactContent extends React.Component {
    render() {
        return <ContactDetails styleName={this.props.styleName}></ContactDetails>;
    }
}
ContactContent.defaultProps = {
    styleName: 'contact-content'
}
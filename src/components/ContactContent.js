import React from "react";
import { ContactDetails } from "./ContactDetails";

export class ContactContent extends React.Component {
    render() {
        return <ContactDetails contacts={this.props.contacts} styleName={this.props.styleName}></ContactDetails>;
    }
}
ContactContent.defaultProps = {
    styleName: 'contact-content'
}
import React from "react";

export class ContactDetails extends React.Component {
    render() {
        const contacts = [];
        let i = 1;
        this.props.contacts.forEach(contactDetail => {
            let {href, desc, src} = contactDetail;
            contacts.push(
                <li key={i++}><a target='_blank' rel="noopener noreferrer" href={href}><img alt={desc} src={src} /><span>{desc}</span></a></li>
            );
        })
        return (<ul className={`contact-details ${this.props.styleName}`}>{contacts}</ul>);
    }
}
ContactDetails.defaultProps={
    styleName:'contact-details'
}

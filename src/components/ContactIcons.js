import React from "react";
import {ContactData} from "../ContactData.js"

export class ContactIcons extends React.Component {
    render() {
        const contacts = [];
        let i = 0;
        ContactData.forEach(contactDetail => {
            let {href, desc, src} = contactDetail;
            contacts.push(<li key={i++}><a target='_blank' rel="noopener noreferrer" href={href} title={desc}><img alt={desc} src={src} /></a></li>);
        })
        return (<ul className={this.props.styleName}>{contacts}</ul>);
    }
}
ContactIcons.defaultProps = {
    styleName: 'social'
}

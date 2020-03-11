import React from "react";

export class Footer extends React.Component {
    render() {
        return (<footer className={this.props.styleName}>&copy; 2020 Holly Schoenbauer</footer>);
    }
}
Footer.defaultProps = {
    styleName: 'footer'
}
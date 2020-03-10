import React from "react";

export class BioContent extends React.Component {
    render() {
        return (<div className={`bio-container ${this.props.styleName}`}>
            <img className='headshot' alt="Holly Schoenbauer" src="./img/headshot.jpg"></img>
            <p>Holly Schoenbauer was born in small-town Minnesota. Where the leaves change from green to red, to brown and the local Dairy Queen is closed in the winter.</p>
            <p>After leaving her small town for the big city Holly graduated from the University of St. Thomas with her BA in Theology and a minor in Psychology. Returning to small-town life, Holly began teaching grades 7-12 while obtaining a master’s Certificate in Gifted and Talented Education.</p>
            <p>Holly currently lives in Northfield Minnesota, with her husband and three children. She is the Executive Director of a local non-profit organization and spends her afternoons writing in her backyard. As a mom to three children, both her arms and her heart are full.</p>
        </div>);
    }
}

BioContent.defaultProps = {
    styleName: 'bio-content'
}
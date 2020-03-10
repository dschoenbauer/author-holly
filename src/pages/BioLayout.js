import React from "react";
import { Navigation } from "../components/Navigation";
import { Title } from "../components/Title";
import { BioContent } from "../components/BioContent";

export class BioLayout extends React.Component {
  render() {
    return <div className='core-layout'>
      <Title></Title>
      <Navigation></Navigation>
      <BioContent styleName='content'></BioContent>
    </div>;
  }
}

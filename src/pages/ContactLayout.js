import React from "react";
import { Navigation } from "../components/Navigation";
import { Title } from "../components/Title";
import { ContactContent } from "../components/ContactContent";

export class ContactLayout extends React.Component {
  render() {
    return <div className='core-layout'>
      <Title></Title>
      <Navigation social={false}></Navigation>
      <ContactContent styleName='content'></ContactContent>
    </div>;
  }
}

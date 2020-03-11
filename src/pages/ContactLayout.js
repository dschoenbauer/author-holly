import React from "react";
import { Navigation } from "../components/Navigation";
import { Title } from "../components/Title";
import { ContactContent } from "../components/ContactContent";
import ReactGA from 'react-ga';

export class ContactLayout extends React.Component {

  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return <div className='core-layout'>
      <Title></Title>
      <Navigation social={false}></Navigation>
      <ContactContent styleName='content'></ContactContent>
    </div>;
  }
}

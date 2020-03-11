import React from "react";
import { Navigation } from "../components/Navigation";
import { Title } from "../components/Title";
import { BioContent } from "../components/BioContent";
import ReactGA from 'react-ga';

import { Footer } from "../components/Footer";
export class BioLayout extends React.Component {
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return <div className='core-layout'>
      <Title></Title>
      <Navigation></Navigation>
      <BioContent styleName='content'></BioContent>
      <Footer></Footer>
    </div>;
  }
}

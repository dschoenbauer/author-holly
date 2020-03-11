import React from "react";
import { Navigation } from "../components/Navigation";
import { Title } from "../components/Title";
import ReactGA from 'react-ga';

export class BookLayout extends React.Component {
  render() {
    ReactGA.pageview(window.location.pathname + window.location.search);
    return <div className='core-layout'>
      <Title></Title>
      <Navigation></Navigation>
    </div>;
  }
}

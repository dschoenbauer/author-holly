import React from "react";
import { Navigation } from "../components/Navigation";
import { Title } from "../components/Title";

export class BookLayout extends React.Component {
  render() {
    return <div className='core-layout'>
      <Title></Title>
      <Navigation></Navigation>
    </div>;
  }
}

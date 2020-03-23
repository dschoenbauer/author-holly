import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { BioLayout } from './pages/BioLayout';
import { ContactLayout } from './pages/ContactLayout';
import { ProjectLayout } from './pages/ProjectLayout';
import { BookLayout } from './pages/BookLayout';
import ReactGA from 'react-ga';
import { State } from './data/State';


export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = State;

    ReactGA.initialize('UA-87907665-2');
  }

  render() {
    console.log(this.state.contacts);
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" render={(props) => <BioLayout {...props} contacts={this.state.contacts} />} />
          <Route path="/bio" render={(props) => <BioLayout {...props} contacts={this.state.contacts} />} />
          <Route path="/books" render={(props) => <BookLayout {...props} contacts={this.state.contacts} />} />
          <Route path="/contact" render={(props) => <ContactLayout {...props} contacts={this.state.contacts} />} />
          <Route path="/projects" render={(props) => <ProjectLayout {...props} contacts={this.state.contacts} />} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

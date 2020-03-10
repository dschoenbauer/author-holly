import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { BioLayout } from './pages/BioLayout';
import { ContactLayout } from './pages/ContactLayout';
import { ProjectLayout } from './pages/ProjectLayout';
import { BookLayout } from './pages/BookLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={BioLayout}></Route>
        <Route exact path="/bio" component={BioLayout}></Route>
        <Route exact path="/books" component={BookLayout}></Route>
        <Route exact path="/contact" component={ContactLayout}></Route>
        <Route exact path="/projects" component={ProjectLayout}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

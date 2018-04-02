import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

//App Components
import NavMenu from './Components/NavMenu';
import Search from './Components/Search';
import Container from './Components/Container';
import NoResults from './Components/NoResults';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/search" component={Search} />
          <NavMenu />
          <Switch>
            <Route exact path="/" render={ ()=> <Redirect to={"/search"} /> } />
            <Route exact path="/search" component={Container} />
            <Route path="/search/:keyword" component={Container} />
            <Route component={NoResults} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

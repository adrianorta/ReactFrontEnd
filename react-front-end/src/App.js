import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config';
import './App.css';

//App Components
import NavMenu from './Components/NavMenu';
import Search from './Components/Search';
import Container from './Components/Container';
import Guitars from './Components/Guitars';
import Family from './Components/Family';
import Code from './Components/Code';
import NoResults from './Components/NoResults';

class App extends Component {

  constructor(){
    super();
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Route path="/search" render={()=><Search onSearch={this.performSearch}/>} />
        <NavMenu />
        <Route path="/" render={()=><Container data={this.state.photos}/>} />
        <Switch>
          <Route path="/search/:searchTerm" render={undefined}/>} />
          <Route path="/search/guitars" component={Guitars} />
          <Route path="/search/family" component={Family} />
          <Route path="/search/code" component={Code} />
          <Route component={NoResults} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

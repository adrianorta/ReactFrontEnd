import React, {Component} from 'react';
import ImageList from './ImageList';
import axios from 'axios';
import apiKey from '../config';

export default class Container extends Component {

  constructor(props){
    super(props);
    this.state = {
      photos: [],
      keyword: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    this.performSearch(nextProps.match.params.keyword);
  }

  componentDidMount() {
    this.performSearch(this.props.match.params.keyword);
  }

  performSearch = (keyword) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        keyword: ''
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }


  render() {
    return (
      <div className="photo-container">
        <h1>{this.props.match.params.keyword} Pictures</h1>
        <ul>
          <ImageList data={this.state.photos} />
        </ul>
      </div>
    );
  }
}

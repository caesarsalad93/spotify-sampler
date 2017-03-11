import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './SongItem/SongItem.js';
import SongList from './SongList/SongList.js';
import './app.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      song: '',
      tracks: [],
      songPosition: 0,
    };
  }
  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then(({ tracks }) => this.setState({ tracks }));
  }
//The code below will automatically enter your desired song on page load. Use for debugging.
//  componentWillMount() {
//    this.setState({ song: 'slide'});
//  }
//  componentDidMount() {
//    this.fetchSongs();
//  }

  render() {
    const { tracks, songPosition } = this.state;
    return (
      <div className="app">
        <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        {tracks.items && <SongItem songData={tracks.items[songPosition]} />}
        {tracks.items && <SongList listOfSongs={tracks.items} selectSong={(songPosition => this.setState({ songPosition }))} />}
      </div>
    );
  }
}

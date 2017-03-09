import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from '../utils/searchSpotify';
import SongItem from './SongItem/SongItem.js';
import SongList from './SongList/SongList.js';

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

  render() {
    const myStyle = {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }
    const { tracks, songPosition } = this.state;
    return (
      <div style={myStyle}>
        <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
        {tracks.items && <SongItem songData={tracks.items[songPosition]} />}
        {tracks.items && <SongList listOfSongs={tracks.items} selectSong={(songPosition => this.setState({ songPosition }))} />}
      </div>
    );
  }
}

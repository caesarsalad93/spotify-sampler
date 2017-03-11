import React, { PropTypes } from 'react';
import styles from './SongList.css';

const eachSong = (props) => {
  const { album, name } = props;
  const albumImage = album.images[0];
  return (
    <div className="eachSong">
      <img role="presentation" src={albumImage.url} className="songImage" />
      <span className="songDescription">Name: {name}</span>
    </div>
  );
};

eachSong.propTypes = {
  album: PropTypes.object,
  name: PropTypes.string,
};

const SongList = (props) => (
  <div className="songList">
    {props.listOfSongs.map((songData, index) => <div
      key={songData.uri}
      onClick={() => props.selectSong(index)}
    >
      {eachSong(songData)}
    </div>)}
  </div>
);

SongList.propTypes = {
  listOfSongs: PropTypes.array,
  selectSong: PropTypes.func,
};

export default SongList;

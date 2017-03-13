import React, { PropTypes } from 'react';
import styles from './SongItem.css';

const SongItem = (props) => {
  const { songData } = props;
  const album = songData.album;
  const albumName = album.name;
  const albumImage = album.images[1];
  return (
    <div className="songItem">
      <div className="album">
        <img role="presentation" src={albumImage.url} className="songItemImage"/>
        <audio controls src={songData.preview_url} />
        <div>
          <span className="albumName">Album: {albumName}</span>
          <div className="songName">Name: {songData.name} </div>
        </div>
      </div>
    </div>
  );
};

SongItem.propTypes = {
  songData: PropTypes.object,
};
export default SongItem;

import React, { PropTypes } from 'react';
import './SearchBar.css';

const SearchBar = (props) => (
  <div className="root">
    <input className="input" onChange={(e) => props.updateText(e.target.value)} placeholder="search" />
    <button className="button" onClick={props.fetchSongs}>Get Songs</button>
  </div>
);

SearchBar.propTypes = {
  updateText: PropTypes.func,
  fetchSongs: PropTypes.func,
};
export default SearchBar;

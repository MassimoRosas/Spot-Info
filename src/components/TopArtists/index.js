import React from 'react';
import PropTypes from 'prop-types';

import './topartists.scss';

const TopArtists = ({ topArtists }) => {
  console.log(topArtists);
  return (
    <main className="topartists">
      <p>Top Artists</p>
    </main>
  );
};

TopArtists.propTypes = {
  topArtists: PropTypes.array.isRequired,
};

export default TopArtists;

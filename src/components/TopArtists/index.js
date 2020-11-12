import React from 'react';
import PropTypes from 'prop-types';

import './topartists.scss';
import avatar from '../../public/default-profile.svg';

const TopArtists = ({ topArtists }) => (
  <main className="topartists">
    { topArtists.map((artist) => (
      <div key={artist.name} className="topartists-artist">
        {!artist.images.length && <img className="topartists-artist-avatar" src={avatar} alt={artist.name} />}
        {artist.images.length && (
          <img
            className="topartists-artist-avatar"
            src={artist.images.find((element) => element.height === 640).url}
            alt={artist.name}
          />
        )}
        <div className="topartists-artist-infos">
          <p className="topartists-artist-name">Name: {artist.name}</p>
          <p className="topartists-artist-popularity">Popularity: {artist.popularity}/100</p>
          <p className="topartists-artist-followers">Followers: {artist.followers.total}</p>
          <p>Genres: </p>
          <ul className="topartists-artist-genres-list">
            {!artist.genres.length && (
              <li className="topartists-artist-genres-element">Not defined</li>
            )}
            {artist.genres.map((genre) => (
              <li key={genre} className="topartists-artist-genres-element">{genre}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </main>
);

TopArtists.propTypes = {
  topArtists: PropTypes.array.isRequired,
};

export default TopArtists;

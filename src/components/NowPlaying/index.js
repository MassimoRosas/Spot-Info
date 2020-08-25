import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const NowPlaying = ({ nowPlaying, checkNowPlaying }) => {
  useEffect(() => {
    checkNowPlaying();
  }, []);

  const convertTime = (timeMs) => {
    const minutes = Math.floor(timeMs / 60000);
    const seconds = ((timeMs % 60000) / 1000).toFixed(0);
    return `${minutes} : ${(seconds < 10 ? '0' : '')}${seconds}`;
  };

  return (
    <div className="now-playing_container">
      <div className="now-playing_song-data">
        <p className="now-playing_song-name">
          Now Playing: {nowPlaying.songName}
        </p>
        <p className="now-playing_song-date">
          Duration: {convertTime(nowPlaying.duration)}
        </p>
        <p className="now-playing_song-artist">
          Artist: {nowPlaying.artistName}
        </p>
        <p className="now-playing_song-album">
          Album: {nowPlaying.albumName}
        </p>
        <p className="now-playing_song-date">
          Release date: {nowPlaying.releaseDate}
        </p>
      </div>
      <div className="now-playing_song-cover">
        <img src={nowPlaying.albumArt} alt="album-cover" style={{ height: 150 }} />
      </div>
    </div>
  );
};

NowPlaying.propTypes = {
  nowPlaying: PropTypes.object.isRequired,
  checkNowPlaying: PropTypes.func.isRequired,
};

export default NowPlaying;

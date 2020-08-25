import { connect } from 'react-redux';
import NowPlaying from 'src/components/NowPlaying';

import { checkNowPlaying } from 'src/actions/nowPlaying';

// === mapStateToProps
const mapStateToProps = (state) => ({
  nowPlaying: state.nowPlaying.nowPlaying,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  checkNowPlaying: () => {
    dispatch(checkNowPlaying());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);

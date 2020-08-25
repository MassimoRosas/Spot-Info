import { connect } from 'react-redux';
import NowPlaying from 'src/components/NowPlaying';

import { checkNowPlaying } from 'src/actions/user';

// === mapStateToProps
const mapStateToProps = (state) => ({
  nowPlaying: state.user.nowPlaying,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  checkNowPlaying: () => {
    dispatch(checkNowPlaying());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);

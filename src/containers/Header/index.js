import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { checkUserData } from 'src/actions/user';
import { checkTopArtists } from 'src/actions/topArtists';

// === mapStateToProps
const mapStateToProps = (state) => ({
  user: state.user.user,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  checkUserData: () => {
    dispatch(checkUserData());
  },
  checkTopArtists: () => {
    dispatch(checkTopArtists());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import { connect } from 'react-redux';
import Header from 'src/components/Header';

import { checkUserData } from 'src/actions/user';

// === mapStateToProps
const mapStateToProps = (state) => ({
  user: state.user.user,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  checkUserData: () => {
    dispatch(checkUserData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

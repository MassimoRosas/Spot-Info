import { connect } from 'react-redux';
import TopArtists from 'src/components/TopArtists';

// === mapStateToProps
const mapStateToProps = (state) => ({
  topArtists: state.topArtists.topArtists,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(TopArtists);

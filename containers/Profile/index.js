import { connect } from 'react-redux';
import { getUserRequest, updateProfileRequest } from '../../actions';
import Profile from '../../components/Profile';

const mapStateToProps = state => ({
  user: state.currentUser.user,
  timestamp: state.currentUser.timestamp
});

const mapDispatchToProps = {
  getUserRequest,
  updateProfileRequest
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
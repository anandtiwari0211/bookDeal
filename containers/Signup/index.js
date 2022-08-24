import { connect } from 'react-redux';
import { signupRequest } from '../../actions';
import Signup from '../../components/Signup';

const mapStateToProps = state => ({
  isLoggedIn: state.currentUser.isLoggedIn
});

const mapDispatchToProps = {
  signupRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
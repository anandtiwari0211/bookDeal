import { connect } from 'react-redux';
import { loginRequest, doModalOpen } from '../../actions';
import Login from '../../components/Login';

const mapStateToProps = state => ({
  isLoggedIn: state.currentUser.isLoggedIn
});

const mapDispatchToProps = {
  loginRequest,
  doModalOpen
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
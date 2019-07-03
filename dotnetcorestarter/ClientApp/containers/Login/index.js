import { connect } from 'react-redux';
import LoginView from '../../components/LoginView';
import { userLogin } from './actions';

const mapDispatchToProps = dispatch => ({
    userLogin: (username, password) => dispatch(userLogin(username, password))
});

export default connect(null, mapDispatchToProps)(LoginView);
import { connect } from 'react-redux';
import LoginView from '../../components/LoginView';
import { userLogin } from './actions';

const mapDispatchToProps = ({
    userLogin: userLogin
});

export default connect(null, mapDispatchToProps)(LoginView);
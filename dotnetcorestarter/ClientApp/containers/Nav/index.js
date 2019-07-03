import { connect } from 'react-redux';
import TopNav from '../../components/TopNav';

const mapStateToProps = state => ({
    CurrentUser: state.loginReducer
});

export default connect(mapStateToProps)(TopNav);
import { connect } from 'react-redux';
import TimeView from '../../components/TimeView';
import { fetchServerTime, fetchIPTime } from './actions';

const mapStateToProps = state => ({
    ServerTime: state.timeReducer.ServerTime,
    IPTime: state.timeReducer.IPTime,
    IPAddress: state.timeReducer.IPAddress
});

const mapDispatchToProps = dispatch => ({
    fetchServerTime: () => dispatch(fetchServerTime()),
    fetchIPTime: () => dispatch(fetchIPTime())
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeView);
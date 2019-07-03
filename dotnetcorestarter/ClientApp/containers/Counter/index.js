import { connect } from 'react-redux';
import CounterView from '../../components/CounterView';
import { incrementCounter, decrementCounter } from './actions';

const mapStateToProps = state => ({
    Counter: state.counterReducer.Counter
});

function bindAction(dispatch) {
    return {
        increase: () => dispatch(incrementCounter()),
        decrease: () => dispatch(decrementCounter())
    };
}


const Counter = connect(mapStateToProps, bindAction)(CounterView);
export default Counter;
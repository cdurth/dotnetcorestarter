import Constants from '../../constants';

const initDataState = {
    Counter: 0
};

export default function (state = initDataState, action) {
    console.log("counterStore Called:" + action.type)
    let tmpObj;
    switch (action.type) {
        case Constants.Counter.INCREMENT_COUNT:
            tmpObj = Object.assign({}, state)
            tmpObj.Counter++
            return tmpObj;
        case Constants.Counter.DECREMENT_COUNT:
            tmpObj = Object.assign({}, state)
            tmpObj.Counter--
            return tmpObj;
        default:
            return state;
    };
}

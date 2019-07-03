const initDataState = {
    ServerTime: null,
    IPTime: null,
    IPAddress: null
};

export default function (state = initDataState, action) {
    console.log("timeStore Called:" + action.type);
    switch (action.type) {
        case 'GET_SERVERTIME':
            return { ...state, ServerTime: action.ServerTime };
        case 'GET_IPTIME':
            return {
                ...state, IPTime: action.IPTime, IPAddress: action.IPAddress
            };
        default:
            return state;
    }
}

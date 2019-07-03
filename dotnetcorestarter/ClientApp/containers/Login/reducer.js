var jwt = require("jsonwebtoken");

const initialState = {
    isAuthenticated: false,
    currentUser: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return { ...state, currentUser: jwt.decode(action.payload), isAuthenticated: true };
        default:
            return state;
    }
}
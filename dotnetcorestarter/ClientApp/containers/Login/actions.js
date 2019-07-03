export const userLogin = (username, password) => dispatch => {
    console.log('user: ' + username + ' pass: ' + password);
    return fetch("/api/Auth/Login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ Username: username, Password: password })
    })
        .then(resp => resp.json())
        .then(data => {
            localStorage.setItem("authToken", data);
            dispatch(loginUser(data));
        });
};

const loginUser = jwt => ({
    type: 'LOGIN_USER',
    payload: jwt
});

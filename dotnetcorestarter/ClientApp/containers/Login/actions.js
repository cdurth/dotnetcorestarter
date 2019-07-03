export const userLogin = (username, password) => {
    return dispatch => {
        console.log('user: ' + username + ' pass: ' + password);
        return fetch("/api/Auth/Login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ Username: username, Password: password })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("token", data.jwt)
                dispatch(loginUser(data.user))

            })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

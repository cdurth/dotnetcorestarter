export const fetchServerTime = () => {
    return dispatch => {
        return fetch("/api/Time/ServerTime", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                dispatch(getServerTime(data.timestamp));
            });
    };
};

export const fetchIPTime = () => {
    return dispatch => {
        return fetch("/api/Time/IPTime", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                dispatch(getIPTime(data));
            });
    };
};

const getServerTime = serverTime => {
    return {
        type: "GET_SERVERTIME",
        ServerTime: serverTime
    };
};

const getIPTime = ipTime => {
    return {
        type: "GET_IPTIME",
        IPTime: ipTime.utc_datetime,
        IPAddress: ipTime.client_ip
    };
};
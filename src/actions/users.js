export function loadUsers() {
    return function (dispatch) {
        let api = "http://localhost:8182/users";
        fetch(api)
            .then(resp => resp.json())
            .then(users=> dispatch({ type: 'LOAD_USERS', users }))
    }
}

export function saveUser(user) {
    return function (dispatch) {
        let api = "http://localhost:8182/users";
        fetch(api, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(resp => resp.json())
            .then(users => dispatch({ type: 'SAVE_USER', users }))
    }
}
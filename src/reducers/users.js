export function usersReducer(state = [], action) {
    switch (action.type) {
        case 'LOAD_USERS':
            return [...action.users];
        default:
            return state;
    }
}
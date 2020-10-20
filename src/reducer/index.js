const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY':
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;

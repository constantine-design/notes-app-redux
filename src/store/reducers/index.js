const initialState = {
    todos: [],
    show: "all"
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        /*case ACTION_ADD:
            return {...state, value: state.value + payload};*/
        case 'TODOS_ADD' :
            return {...state,
              todos: [
                ...state.todos,
                {id: Date.now(), payload, completed: false}
              ]
            };
        default:
            return state;
    }
}

export default reducer;

const initialState = {
    todos: [{completed: false, id: 1630395714773, title: "1"}],
    show: "all"
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
      case 'ADD_TODO' :
        return {...state,
          todos: [
            ...state.todos,
            {id: Date.now(), title: payload, completed: false}
          ]
        };
      case 'TOGGLE_TODO' :
        return {...state,
          todos: state.todos.map(
            item =>
              item.id === payload ?
              {...item, completed: !item.completed} :
              item
          )
        };
      case 'REMOOVE_TODO' :
        return {...state,
          todos: state.todos.filter ( (item) => item.id !== payload )
        };
      case 'MAKE_ALL_TODO' :
        return {...state,
          todos: state.todos.map(
            item => ({ ...item, completed: payload })
          )
        };
      case 'CLEAR_COMPLETED_TODO' :
        return {...state,
          todos: state.todos.filter ( (item) => !item.completed )
        };
      case 'EDIT_TODO' :
        return {...state,
          todos: state.todos.map(
            item =>
              item.id === payload.id ?
              {...item, title: payload.title} :
              item
          )
        };
      case 'SHOW_TODO' :
        return {...state,
          show: payload
        };
      default:
        return state;
    }
}

export default reducer;

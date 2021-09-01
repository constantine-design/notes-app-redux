export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOOVE_TODO = "REMOOVE_TODO";
export const MAKE_ALL_TODO = "MAKE_ALL_TODO";
export const CLEAR_COMPLETED_TODO = "CLEAR_COMPLETED_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SET_FILTER_TODO = "SET_FILTER_TODO";

const initialState = {
    todos: [{completed: false, id: 1630395714773, title: "My first todo"}],
    show: "all"
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
      case ADD_TODO :
        return {...state,
          todos: [
            ...state.todos,
            {id: Date.now(), title: payload, completed: false}
          ]
        };
      case TOGGLE_TODO :
        return {...state,
          todos: state.todos.map(
            item =>
              item.id === payload ?
              {...item, completed: !item.completed} :
              item
          )
        };
      case REMOOVE_TODO :
        return {...state,
          todos: state.todos.filter ( (item) => item.id !== payload )
        };
      case MAKE_ALL_TODO :
        return {...state,
          todos: state.todos.map(
            item => ({ ...item, completed: payload })
          )
        };
      case CLEAR_COMPLETED_TODO :
        return {...state,
          todos: state.todos.filter ( (item) => !item.completed )
        };
      case EDIT_TODO :
        return {...state,
          todos: state.todos.map(
            item =>
              item.id === payload.id ?
              {...item, title: payload.title} :
              item
          )
        };
      case SET_FILTER_TODO :
        return {...state,
          show: payload
        };
      default:
        return state;
    }
}

export default reducer;

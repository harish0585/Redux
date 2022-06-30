import { ADD_TODO, DEC_COUNTER, INC_COUNTER, TOGGLE_TODO , DELETE_TODO} from "./actionType"

const initState  = {
    counter: 0,
    todo : [
        {
            title: "Learn Redux",
            id:1,
            status: false
        }
    ]
}

export const reducer = (state = initState, action) => {
    switch(action.type)
    {
        case INC_COUNTER : 
        return {
            ...state, 
            counter : state.counter + action.payload 
        }

        case DEC_COUNTER : 
        return  {
            ...state,
            counter: state.counter - action.payload
        }

        case ADD_TODO :
            return {
                ...state,
                todo : [...state.todo, action.payload]
            }

        case TOGGLE_TODO :
            return {
                ...state,
                todo : state.todo.map((item) => item.id === action.payload ? {...item, status : !item.status} : item )
            }

        case DELETE_TODO :
            return {
                ...state,
                todo : state.todo.filter((item) => item.id !== action.payload)
            }

        default : return state;
    }

}
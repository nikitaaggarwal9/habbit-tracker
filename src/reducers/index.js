import { ADD_TASK, REMOVE_TASK } from "../actions";

const initialTasksState = {
  tasks: ["abc", "vdj"],
};

export function tasks(state = initialTasksState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.task, ...state.tasks],
      };
    case REMOVE_TASK:
      const filteredArray = state.tasks.filter(
        task => task !== action.task
      );

      return {
        ...state,
        tasks: filteredArray,
      };
    default:
      return state;
  }
}

// const initialRootState = {
//   tasks: initialTasksState,
// };

// export default function rootReducer(state = initialRootState, action) {
//   return {
    
//   }
// }

// export default initialTasksState;

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   }
// }
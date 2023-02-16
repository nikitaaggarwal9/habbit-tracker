export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";


export function addTask(task) {
  return {
    type: ADD_TASK,
    task,
  };
}

export function removeTask(task) {
  return {
    type: REMOVE_TASK,
    task,
  };
}
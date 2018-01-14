import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

//action creator
export const addReminder = (text, dueDate) => {
  //action
  const action = {
    type: ADD_REMINDER,
    text,
    dueDate
  }
  console.log('action in addReminder', action);
  return action;
}


export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('deleting in actions', action);
  return action;
}

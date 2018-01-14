import { ADD_REMINDER, DELETE_REMINDER } from '../constants';

//helper reminder function that takes our action as a parameter
const reminder = (action) => {
  //we will simply return an obj as a reminder with a text with action.text
  //and then id of random variable.
  return {
    text: action.text,
    id: Math.random()
  }
}

//using filter to not modify state directly.
//the filter will return anything that passes our equality test.
//by checking if reminder.id !== id, we will have an array of values that are !== id
const removeById = (state=[], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders:', reminders);
  return reminders;
}

//one reducer as a constant by the name of reminders
// we will have 2 parameters, a state paremeter with the default of an empty array
const reminders = (state=[], action) => {
  //initialize reminders variable as null, later on we will change the reminders
  //varialbe to become a return state
  let reminders = null;
  //remember that our action returns a type? we can use this type to understand
  //exactly hoe we want to modify our reminders or state
  //we will use a switch statement, because we can expect more than one type
  //of action, besides ADD_REMINDER
  switch(action.type) {
    case ADD_REMINDER:
      //change reminders, set it to an array using spread operator
      //spread operator allows us to copy the content of one array or object into
      //another array or obj.
      //the first element in the reminders array, will be the current spread state
      //next one will be a new reminder with an action, function is defined above.
      reminders = [...state, reminder(action)];
      console.log('reminders as state', reminders);
      return reminders;

    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      return reminders;
    //in a switch statement we always want a default, and we will return the state
    default:
      return state;
  }
}
export default reminders;


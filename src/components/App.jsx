import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class App extends Component {
  //add state to component, so we recognize what the user typed on the input field.
  //set initial state as obj with text to empty string.
  constructor(props){
    super(props);
    this.state = {
      text: '',
      dueDate: ''
    }
  }

  //pass text from our action addReminder  and pass state.text
  addReminder(){
    console.log('this.state.dueDate:', this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id){
    this.props.deleteReminder(id);
  }

  renderReminders(){
    //we can use this syntax for our variable, when the variable name and its
    //value is the same.
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder =>{
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">
                  <div>{reminder.text}</div>
                  <div>
                    <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                  </div>
                </div>
                <div className="list-item delete-button"
                     onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render(){
    return(
      <div className="app container reminder-form">
        <div className="title">
          <h3>ReminderPro</h3>
        </div>
        <div className="form-group row">
          <div className="col-10">
            <input 
              className="form-control" 
              placeholder="I have to..."
              onChange={event => this.setState({text: event.target.value})} 
            />
            <input
              className="form-control"
              type="datetime-local"
              onChange={event => this.setState({dueDate: event.target.value})}
            />
          </div>
        </div>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => this.addReminder()}
          >Add Reminder
        </button>
          { this.renderReminders() }
        <div
          className="btn btn-danger"
          onClick={() => this.props.clearReminders()}
        >
          Clear Reminders
        </div>  
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
    reminders: state
  }
}


export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);

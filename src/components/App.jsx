import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component {
  //add state to component, so we recognize what the user typed on the input field.
  //set initial state as obj with text to empty string.
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  //pass text from our action addReminder  and pass state.text
  addReminder(){
    this.props.addReminder(this.state.text)
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
                <div>{reminder.text}</div>
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
              onChange={event => this.setState({text: event.target.value})} />
          </div>
        </div>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => this.addReminder()}
          >Add Reminder</button>
          { this.renderReminders() }
      </div>

    )
  }
}

function mapStateToProps(state){
  return {
    reminders: state
  }
}


export default connect(mapStateToProps, { addReminder })(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
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

  render(){
    return(
      <div className="app container">
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
          >Submit</button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({addReminder}, dispatch);
}

export default connect(null, {mapDispatchToProps})(App);

import React, { Component } from 'react';

class App extends Component {
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
              placeholder="I have to..." />
          </div>
        </div>
        <button 
          type="button" 
          className="btn btn-primary">Submit</button>
      </div>
    )
  }
}

export default App;
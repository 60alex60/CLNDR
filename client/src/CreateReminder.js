import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import './styles/CreateReminder.css'
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class CreateReminder extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }
 
  render() {
    return (
      <form onSubmit={ this.onFormSubmit }>
       
        <div className="center">
        <p>Date-Time:</p>
          <DatePicker className="datePicker"
              selected={ this.state.startDate }
              onChange={ this.handleChange }
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={20}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
          />
          <div>
          <p>Description:</p>
                <form>
                    <textarea rows="5" cols="50"class="textAreaDescrip" placeholder='Description'/>
                </form>
          </div>
                <input type="submit" value="Submit"/>
                <input type="submit" value="Cancel"/>

        </div>
      </form>
    );
  }
  
}

export default CreateReminder;




import React, { Component } from 'react';
import logo from './img/Logo-Semitransparent.png';
import CalendarView from './CalendarView';
import Account from './Account';
import CreateEventPage from './CreateEventPage';
import Muted from './Muted';
import Following from './Following';
import Reminders from './Reminders';
import Planned from './Planned';
import EventPage from './EventPage';
import CreateReminderPage from './CreateReminderPage';
import HostPage from './HostPage';

// This file contains the main page of the app that allows the user
// to navigate to all the other pages

class Page extends Component {
    constructor(props) {
    	super(props);
		this.state = {
			page: 'calendarV'
		};
    }
	
	// switch case statement that determines which 
	// component to render depending on the state
	change() { 
		switch(this.state.page) {
			case 'calendarV': return <CalendarView initialReferenceDate={new Date()} />;
			case 'planned': return <Planned/>;
			case 'following': return <Following/>;
			case 'reminders': return <Reminders/>;
			case 'muted': return <Muted/>;
			case 'account': return <Account />;
			case 'create': return <CreateEventPage />;
			default: return <CalendarView initialReferenceDate= {new Date()} />;
		}
	}
	// render calendar view
	setCal() {
		this.setState({
			page: 'calendarV'
		})
	}
	// render planned events
	setPla() {
		this.setState({
			page: 'planned'
		})
	}
	// render following
	setFol() {
		this.setState({
			page: 'following'
		})
	}
	// render reminders
	setRem() {
		this.setState({
			page: 'reminders'
		})
	}
	// render muted
	setMut() {
		this.setState({
			page: 'muted'
		})
	}
	// render account
	setAcc() {
		this.setState({
			page: 'account'
		})
	}

	// render create event page
	cEvent() {
		this.setState({
			page: 'create'
		})
	}

   render() {
		return (
			<div style={{backgroundColor: '#cccccc', height: 1500}}>
				<div style= {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<img src={logo} style= {{width: 100, height: 100}}/>
					<h1 style={{width: 500}}>CLNDR</h1>
					<input type= "text" style= {{width: 180}}/>
					<button style= {{width: 95}}>Search</button>
				</div>
				<div style= {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<button style= {{height: 40, width: 140}} onClick= {this.setCal.bind(this)}>View Calendar</button>
					<button style= {{height: 40, width: 140}} onClick= {this.setPla.bind(this)}>Planned Events</button>
					<button style= {{height: 40, width: 140}}onClick= {this.setFol.bind(this)}>Following</button>
					<button style= {{height: 40, width: 140}}onClick= {this.setRem.bind(this)}>Reminders</button>
					<button style= {{height: 40, width: 140}}onClick= {this.setMut.bind(this)}>Muted</button>
					<button style= {{height: 40, width: 140}}onClick= {this.setAcc.bind(this)}>Account</button>
					<button style= {{height: 40, width: 140, backgroundColor: '#add8e6'}}onClick= {this.cEvent.bind(this)}>Create Event</button>
				</div>
				<br />
				<div style= {{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					{this.change()}
				</div>
			</div>
   	)
	}
}
export default Page

﻿import React, { Component } from 'react';
import logo from './logo.svg';
import MyNav from './MyNav';
import { Jumbotron, Button, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Form, Table } from 'reactstrap';
import './css/Store.css'

class EncriptedStore extends Component {
	render() {
		return (
			<div className="App">
				<MyNav />
				<h2>Hello from  EncriptedStore!</h2>
			</div>
		);
	}
}

export default EncriptedStore;
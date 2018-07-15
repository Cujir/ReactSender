import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import logo from './logo.svg'
import Send from './Send';
import Store from './Store';
import { Jumbotron, Button, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, Navbar, NavLink } from 'reactstrap';

class MyNav extends Component {

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}
	render() {
		return (
			<div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />

				</header>
				<div>
					<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
						<a class="navbar-brand" href="#">Navigation</a>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>

						<div class="collapse navbar-collapse" id="navbarColor02">
							<ul class="navbar-nav mr-auto">
								<li class="nav-item active">
									<a class="nav-link" href="/">Store <span class="sr-only">(current)</span></a>
								</li>
								<li class="nav-item">
									<a className="nav-link" href="/Send">Send</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="/EncriptedStore">EncriptedStore</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="/EncriptedSend">EncriptedSend</a>
								</li>
							</ul>
							<form class="form-inline">
								<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
								<button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
							</form>
						</div>
					</nav>
				</div>

			</div>
		);
	}
}

export default MyNav;



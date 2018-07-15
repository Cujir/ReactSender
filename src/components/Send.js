import React, { Component } from 'react';
import logo from './logo.svg';
import MyNav from './MyNav';
import { Jumbotron, Button, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Form, Table } from 'reactstrap';
import './css/Send.css'

class Send extends Component {
	render() {
		return (
			<div className="App text-center" >
				<MyNav />
				<h2>Chose a file to share</h2>
				<div className="center-div-send" >
					<Table className="table table-striped" >
						<thead >
							<tr>
								<th>FileName</th>
								<th>TimeStamp</th>
								<th>FileHash</th>
								<th>Options</th>
							</tr>
						</thead>

						<tbody >
							<tr>
								<td ><label>Undefined</label></td>
								<td className="timestamp-td"> <input className="form-control timestamp" id="tmps" type="text" readonly /></td>
								<td> <input className="form-control " id="ipfs_hash" type="text" readonly /></td>
								<td><div class="btn-group">
									<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Info</button>
									<div className="dropdown-menu options-dropdown" x-placement="bottom-start">
										<a className="dropdown-item" href="#">Action</a>
										<a className="dropdown-item" href="#">Another action</a>
										<a className="dropdown-item" href="#">Something else here</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="#">Separated link</a>
									</div>
								</div></td>
							</tr>


						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}

export default Send;
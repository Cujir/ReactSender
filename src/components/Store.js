import React, { Component } from 'react';
import logo from './logo.svg';
import MyNav from './MyNav';
import { Jumbotron, Button, Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Form, Table } from 'reactstrap';
import './css/Store.css'
import web3 from './controlers/web3'
import ipfs from './controlers/ipfs';
import storehash from './controlers/storehash';

class Store extends Component {

	//state will store all transaction info
	state = {
		ipfsHash: null,
		buffer: '',
		ethAddress: '',
		blockNumber: '',
		transactionHash: '',
		gasUsed: '',
		txReceipt: ''
	};

	// actioned after file selection
	captureFile = (event) => {
		event.stopPropagation()
		event.preventDefault()
		const file = event.target.files[0]
		let reader = new window.FileReader()
		reader.readAsArrayBuffer(file)
		reader.onloadend = () => this.convertToBuffer(reader)
	};
	convertToBuffer = async (reader) => {
		//file is converted to a buffer for upload to IPFS
		const buffer = await Buffer.from(reader.result);
		//set this buffer -using es6 syntax
		this.setState({ buffer });
	};

	// send action
	onClick = async () => {
		try {
			this.setState({ blockNumber: "waiting.." });
			this.setState({ gasUsed: "waiting..." });
			await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt) => {
				console.log(err, txReceipt);
				this.setState({ txReceipt });
			}); //await for getTransactionReceipt
			await this.setState({ blockNumber: this.state.txReceipt.blockNumber });
			await this.setState({ gasUsed: this.state.txReceipt.gasUsed });
		} //try
		catch (error) {
			console.log(error);
		} //catch
	} //onClick

	
	onSubmit = async (event) => {
		event.preventDefault();
		const accounts = await web3.eth.getAccounts();
		console.log('Sending from Metamask account: ' + accounts[0]);
		const ethAddress = await storehash.options.address;
		this.setState({ ethAddress });
		await ipfs.add(this.state.buffer, (err, ipfsHash) => {
			console.log(err, ipfsHash);
			//setState by setting ipfsHash to ipfsHash[0].hash 
			this.setState({ ipfsHash: ipfsHash[0].hash });
			storehash.methods.sendHash(this.state.ipfsHash).send({
				from: accounts[0]
			}, (error, transactionHash) => {
				console.log(transactionHash);
				this.setState({ transactionHash });
			}); //storehash 
		}) //await ipfs.add 
	}; //onSubmit


	render() {
		return (

			<div className="App">
				<MyNav />
				<div classNameName="card text-center">

				</div>
				<h2 > Choose file to send to IPFS </h2>
				<div className="center-div-upload" >

					<Form onSubmit="onSubmit()">
						<input id="file_selector" type="file" onChange={this.captureFile}/>
						<Button id="upload_btn" color="primary" type="submit"> Upload File </Button>
					</Form>

					<Table className="table table-striped" >
						<thead >
							<tr>
								<th>Category</th>
								<th>Values</th>
							</tr>
						</thead>

						<tbody >
							<tr>
								<td >IPFS Hash</td>
								<td> <input className="form-control" id="ipfs_hash" type="text" readonly value={this.state.ipfsHash} /></td>
							</tr>
							<tr>
								<td>Contract Address</td>
								<td><input className="form-control" id="contract_adr" type="text" readonly value={this.state.ethAddress} /></td>
							</tr>
							<tr>
								<td>Transaction Hash  </td>
								<td><input className="form-control" id="transaction_hash" type="text" readonly value={this.state.transactionHash} /></td>
							</tr>
							<tr>
								<td>Block Number</td>
								<td><input className="form-control" id="block_number" type="text" readonly value={this.state.blockNumber} /></td>
							</tr>
							<tr>
								<td>Gas</td>
								<td><input className="form-control" id="gas" type="text" readonly value={this.state.gasUsed} /></td>
							</tr>

						</tbody>
					</Table>
					<Button id="cancel_btn" color="primary" onClick={this.onClick} >Refresh</Button>




				</div>
			</div>
		);
	}
}

export default Store;
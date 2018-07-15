import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Link, BrowserRouter as Router,Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Button, Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './components/Store';
import Send from './components/Send';
import EncriptedStore from './components/EncriptedStore';
import EncriptedSend from './components/EncriptedSend';
ReactDOM.render(<Router>
	<div>
		<Route exact path="/" component={Store} />
		<Route path="/Send" component={Send} />
		<Route path="/EncriptedStore" component={EncriptedStore} />
		<Route path="/EncriptedSend" component={EncriptedSend} />
		<App />
	</div>
</Router>,
	document.getElementById('root'));
registerServiceWorker();

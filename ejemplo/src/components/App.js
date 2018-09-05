import React, { Component } from 'react';
import Contador from './Contador';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			elemento: ''
		}
	}

	ver = () => {
		this.setState({
			elemento: <Contador />
		})
	};

	quitar = () => {
		this.setState({
			elemento: ''
		})
	};

	render() {
		return (
			<div style={{margin:'100px'}}>
				<button onClick={ this.ver }>
					Ver
				</button>
				<button onClick={ this.quitar }>
					Quitar
				</button>
				<br />
				<br />
				{ this.state.elemento }
			</div>
		);
	}
}

export default App;

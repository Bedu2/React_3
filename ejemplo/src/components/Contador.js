import React, { Component } from 'react';

export class Contador extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cont: 0,
			iniciado: false
		}
	}

	componentDidMount() {
		alert('Gracias por abrirme.');
	}

	componentWillUnmount() {
		alert('Nimodo, adios.');
	}

	iniciar = () => {
		this.setState({
			iniciado: true
		});

		this.intervalo = setInterval(
			() => {
				this.setState({
					cont: this.state.cont + 1
				});
			},
			1000
		);
	};

	parar = () => {
		this.setState({
			iniciado: false
		});

		clearInterval(this.intervalo);
	};

	reset = () => {
		this.setState({
			cont: 0,
			iniciado: false
		});

		clearInterval(this.intervalo);
	};

	render() {
		return (
			<div>
				{ this.state.cont }
				<br />
				<button disabled={ this.state.iniciado } onClick={ this.iniciar }>
					Iniciar
				</button>
				<button onClick={ this.parar }>
					Parar
				</button>
				<button onClick={ this.reset }>
					Resetear
				</button>
			</div>
		);
	}
}

export default Contador;

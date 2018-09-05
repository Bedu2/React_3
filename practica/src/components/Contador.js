import React, { Component } from 'react';

export class Contador extends Component {
	componentDidMount() {
		alert(`Mucho exito ${this.props.nombre}!`);
	}

	componentWillUnmount() {
		alert(`Mejor suerte a la proxima!`);
	}

	render() {
		return (
			<div>
				<br />
				{this.props.nombre} : {this.props.cont}
				<button onClick={() => this.props.parar(this.props.index)}>
					Parar
				</button>
				<br />
				<button onClick={() => this.props.eliminar(this.props.index)}>
					Ya no quiero jugar
				</button>
				<br />
			</div>
		);
	}
}

export default Contador;

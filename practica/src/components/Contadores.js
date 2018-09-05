import React, { Component } from 'react';
import Contador from './Contador';

export class Contadores extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nombre: '',
			participantes: []
		}
	}

	cambioNombre = (event) =>
	{
		this.setState({
			nombre: event.target.value
		});
	};

	agregarParticipante = () =>
	{
		const nombre = this.state.nombre;
		if (!nombre) return;

		let participantes = this.state.participantes;
		participantes.push({
			nombre,
			cont: 0
		});
		this.setState({
			participantes,
			nombre: ''
		});
	};

	desplegarParticipantes = () =>
	(
		this.state.participantes.map((element, index) =>
		(
			<Contador
				key={index}
				index={index}
				nombre={element.nombre}
				cont={element.cont}
				parar={this.pararContador}
				eliminar={this.eliminarJugador}
			/>
		))
	);

	jugar = () =>
	{
		let participantes = this.state.participantes.map((elem, index) => (
			{
				...elem,
				intervalo: setInterval(() => {
					let participantes = this.state.participantes;
					const cont = participantes[index].cont;
					participantes[index].cont = cont + 1;
					this.setState({participantes});
				}, 1000)
			}
		));

		this.setState({participantes});
	};

	pararContador = (index) =>
	{
		clearInterval(this.state.participantes[index].intervalo);
	};

	eliminarJugador = (index) =>
	{
		let participantes = this.state.participantes;
		participantes.splice(index, 1);
		this.setState({participantes});
	};

	render() {
		return (
			<div>
				Agregar participante: <input value={this.state.nombre} onChange={this.cambioNombre} />
				<button onClick={this.agregarParticipante}>
					Agregar
				</button>
				<br />
				<br />
				<button onClick={this.jugar}>
					A JUGAR!!!
				</button>
				<hr />
				{ this.desplegarParticipantes() }
			</div>
		);
	}
}

export default Contadores;

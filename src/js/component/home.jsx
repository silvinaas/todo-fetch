import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setListas] = useState([]);

	const cargarInput = event => {
		setTarea(event.target.value); //obtenemos el valor del input y actualizamos la tarea
	};

	const handleDeletion = index => {
		console.log(index);
		let listaNueva = lista.filter((tarea, indice) => index !== indice);
		console.log(listaNueva);
		setListas(listaNueva);

		//si array.lenght <1 ? <h1> no se han agregado tareas   :
	};

	const enviarInput = event => {
		event.preventDefault();
		if (!tarea.trim()) {
			alert("Debe completar el campo");
			return;
		}
		setListas([...lista, tarea]);
	};
	return (
		<div className="container">
			<div className="container text-center mt-5">
				<h1>ToDos</h1>
			</div>

			<form className="row" onSubmit={enviarInput}>
				<div className="container col-md-6">
					<input
						type="text"
						className="form-control"
						placeholder="Tarea"
						value={tarea}
						onChange={cargarInput}
						aria-label="Username"
						aria-describedby="basic-addon1"></input>
					<button type="submit" className="btn btn-primary">
						Añadir
					</button>
				</div>
			</form>

			<ul className="list-group">
				{lista.map((item, index) => (
					<li key={index} id="tarea" className="list-group-item">
						{item}
						<button
							className="cerrar"
							onClick={() => handleDeletion(index)}>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;

import React, { useState, useEffect } from "react";

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
	};

	const enviarInput = event => {
		event.preventDefault();
		if (!tarea.trim()) {
			alert("Debe completar el campo");
			return;
		}
		setListas([...lista, tarea]);
	};

	const verTareas = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/silvinaas", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setListas(data));
	};

	useEffect(() => {
		verTareas();
	}, []);

	const agregarTarea = () => {
		let listaNueva = [...lista, { label: tarea, done: false }];
		setListas(listaNueva);
		fetch("https://assets.breatheco.de/apis/fake/todos/user/silvinaas", {
			method: "PUT",
			body: JSON.stringify(lista),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				return resp; // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				verTareas();
				console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch(error => {
				//manejo de errores
				console.log(error);
			});
		setTarea("");
	};

	return (
		<div className="container text-center mt-5">
			<h1 id="titulo"> ToDos</h1>
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
					<button
						id="boton"
						type="submit"
						className="btn btn-outline-secondary">
						Añadir
					</button>
				</div>
			</form>
			<div className="container col-md-6">
				<ul className="row list-group">
					{lista.map((item, index) => (
						<li key={index} id="tarea" className="list-group-item">
							{item}
							<button
								id="eliminar"
								className="cerrar"
								onClick={() => handleDeletion(index)}>
								X
							</button>
						</li>
					))}
				</ul>
				<p> {lista.length} Tareas pendientes</p>{" "}
			</div>
		</div>
	);
};

export default Home;

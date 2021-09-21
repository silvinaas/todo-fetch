import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setListas] = useState([]);

	const cargarInput = event => {
		setTarea(event.target.value);
	};

	const enviarInput = event => {
		event.preventDefault();
		if (!tarea.trim()) {
			alert("Debe completar el campo");
			return;
		}
		setListas([...lista, tarea]);
		setTarea("");
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
						Enviar
					</button>
				</div>
			</form>

			<ul className="list-group">
				{lista.map((item, index) => (
					<li key={index} className="list-group-item">
						{item}
					</li>
				))}

				{/* /* {lista.map((item, index) => {
					return(
					<li
						key={index}
						className="list-group-item"
						onMouseOver={() => setIndexOver(index)}>
						{item}
						{indexOver == index ? <button type="button" class="btn btn-light">X</button> : ""}
					</li>;
					);
				})} */}
			</ul>
		</div>
	);
};

export default Home;

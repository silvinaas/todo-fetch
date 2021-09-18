import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([]);
	const [indexOver, setIndexOver] = useState("");

	return (
		<div className="container">
			<div className="container text-center mt-5">
				<h1>todos</h1>
			</div>
			<div className="container input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Tarea"
					onChange={e => setTarea(e.target.value)}
					aria-label="Username"
					aria-describedby="basic-addon1"></input>
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => setTarea(tarea.target.value)}>
					Primary
				</button>
			</div>
			<ul className="list-group">
				{/* {lista.map((item, index) => {
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

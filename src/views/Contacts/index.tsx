import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "./style";

interface iDados {
	nome: string;
	email: string;
}
const Contacts: React.FC = () => {
	const [dados,setDados] = useState<iDados>({} as iDados);
	return(
		<Container>
			<div>
				<h1>CONTATO</h1>
				<div>
					<h3>Dados dos inputs</h3>
					<p>Nome: {dados.nome}</p>
					<p>E-mail: {dados.email}</p>
				</div>
				<form>
					<label htmlFor="nome">Nome</label>
					<input type="text" placeholder="Digite o nome" id="nome" onChange={e => setDados({...dados, nome:e.target.value})} />

					<label htmlFor="email">E-mail</label>
					<input type="email" placeholder="Digite o email" id="email"  onChange={e => setDados({...dados,email: e.target.value})} />

					<input type="submit" value="enviar" />
				</form>
			</div>
			<Link to="/">Acessar HOME</Link>
		</Container>
	);
};

export default Contacts;
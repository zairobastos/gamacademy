import React, {useState} from "react";
import {Link} from "react-router-dom";
import { Container } from "./style";

const home: React.FC = () => {
	const [isLoad, setIsLoad] = useState(true);
	return(
		<Container>
			{
				isLoad ?(
					<p>Carregando...</p>
				):(
					<div>
						HOME
						<Link to="/Contato">Acessar página de contato</Link>
					</div>
				)
			}
			<button onClick={()=>{setIsLoad(!isLoad);}}>Mudar isLoad</button>
		</Container>
	);
};

export default home;
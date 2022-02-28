import React from "react";
import {Link} from "react-router-dom";
import { Container } from "./style";

const home: React.FC = () => {
	return(
		<Container>
            HOME
			<Link to="/Contato">Acessar página de contato</Link>
		</Container>
	);
};

export default home;
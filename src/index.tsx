/* eslint-disable linebreak-style */
import React from "react";
// eslint-disable-next-line linebreak-style
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./globalStyle/globalStyle";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle/>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

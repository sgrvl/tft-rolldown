import React from "react";
import Shop from "./Shop/Shop";
import { Global, css } from "@emotion/core";

const GStyles = css`
	* {
		margin: 0;
		box-sizing: border-box;
	}
	body {
		height: 100%;
		max-height: 100vh;
		width: 100%;
		max-width: 100vw;
		overflow: hidden;
	}
`;

function App() {
	return (
		<>
			<h1>TFT Roll Down !</h1>
			<Shop />
			<Global styles={GStyles} />
		</>
	);
}

export default App;

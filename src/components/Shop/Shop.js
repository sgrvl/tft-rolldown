import React from "react";
import styled from "@emotion/styled";

const Wrap = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 20vh;
	background: #0e151a;
	color: white;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
`;

const Shop = () => {
	return (
		<Wrap>
			<div>
				<button>Roll</button>
			</div>
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
		</Wrap>
	);
};

export default Shop;

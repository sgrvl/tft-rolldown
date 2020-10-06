import React, { useState } from "react";
import styled from "@emotion/styled";
import { oddsCost, initialPool } from "./utils";

const images = require.context("../../assets/cards", true);

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

const Temp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #131e1f;
	background-image: ${(props) => `url(${props.img})`};
	background-size: contain;
	background-repeat: no-repeat;
	width: 100%;
	height: 100%;
`;

const Shop = () => {
	const [level, setLevel] = useState(4);
	const [pool, setPool] = useState(initialPool);

	const [shopStore, setShopStore] = useState({
		1: oddsCost(level, pool, setPool),
		2: oddsCost(level, pool, setPool),
		3: oddsCost(level, pool, setPool),
		4: oddsCost(level, pool, setPool),
		5: oddsCost(level, pool, setPool),
	});

	const reroll = () => {
		setShopStore({
			1: oddsCost(level, pool, setPool),
			2: oddsCost(level, pool, setPool),
			3: oddsCost(level, pool, setPool),
			4: oddsCost(level, pool, setPool),
			5: oddsCost(level, pool, setPool),
		});
	};

	return (
		<Wrap>
			<div>
				<select onChange={(e) => setLevel(e.target.value)}>
					<option value="4">Lvl.4</option>
					<option value="5">Lvl.5</option>
					<option value="6">Lvl.6</option>
					<option value="7">Lvl.7</option>
					<option value="8">Lvl.8</option>
					<option value="9">Lvl.9</option>
				</select>
				<br />
				<button onClick={() => reroll()}>Roll</button>
			</div>
			<Temp img={images(`./${shopStore[1]}.webp`)}>{shopStore[1]}</Temp>
			<Temp img={images(`./${shopStore[2]}.webp`)}>{shopStore[2]}</Temp>
			<Temp img={images(`./${shopStore[3]}.webp`)}>{shopStore[3]}</Temp>
			<Temp img={images(`./${shopStore[4]}.webp`)}>{shopStore[4]}</Temp>
			<Temp img={images(`./${shopStore[5]}.webp`)}>{shopStore[5]}</Temp>
		</Wrap>
	);
};

export default Shop;

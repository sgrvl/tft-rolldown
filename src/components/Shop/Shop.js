import React, { useState } from "react";
import styled from "@emotion/styled";
import { oddsCost, initialPool } from "./utils";
import ChampionSlot from "./ChampionSlot";

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
	console.log(pool);
	return (
		<Wrap>
			<div>
				{/*split this*/}
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
			{Object.values(shopStore).map((slot, index) => (
				<ChampionSlot
					key={"slot" + index}
					slot={slot}
					pool={pool}
					setPool={setPool}
				/>
			))}
		</Wrap>
	);
};

export default Shop;

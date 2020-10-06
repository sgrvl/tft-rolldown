// 101 so it's impossible to hit
const LEVELS = {
	4: {
		1: 1,
		2: 56,
		3: 86,
		4: 101,
		5: 101,
	},
	5: {
		1: 1,
		2: 46,
		3: 76,
		4: 96,
		5: 101,
	},
	6: {
		1: 1,
		2: 31,
		3: 66,
		4: 91,
		5: 101,
	},
	7: {
		1: 1,
		2: 20,
		3: 55,
		4: 85,
		5: 100,
	},
	8: {
		1: 1,
		2: 15,
		3: 35,
		4: 70,
		5: 95,
	},
	9: {
		1: 1,
		2: 11,
		3: 26,
		4: 56,
		5: 86,
	},
};

//Determine which champion you get and take it out of the pool
export const oddsChampion = (cost, pool) => {
	const arr = Object.keys(pool[cost]);
	const champ = arr[Math.floor(Math.random() * arr.length)];
	/* const newObject = pool[cost];
	newObject[champ] = newObject[champ] - 1;
	setPool({ [cost]: newObject }); */
	return champ;
};

//Determine if you roll a 1 (to 5) cost
export const oddsCost = (level, pool, setPool) => {
	const odds = LEVELS[level];
	const roll = Math.floor(Math.random() * (101 - 1) + 1);
	switch (true) {
		case roll < odds[2]:
			return oddsChampion(1, pool, setPool);
		case roll >= odds[2] && roll < odds[3]:
			return oddsChampion(2, pool, setPool);
		case roll >= odds[3] && roll < odds[4]:
			return oddsChampion(3, pool, setPool);
		case roll >= odds[4] && roll < odds[5]:
			return oddsChampion(4, pool, setPool);
		case roll >= odds[5]:
			return oddsChampion(5, pool, setPool);
		default:
			console.log("error");
	}
};

export const initialPool = {
	1: {
		Diana: 29,
		Elise: 29,
		Fiora: 29,
		Garen: 29,
		Lissandra: 29,
		Maokai: 29,
		Nami: 29,
		Nidalee: 29,
		TahmKench: 29,
		TwistedFate: 29,
		Vayne: 29,
		Wukong: 29,
		Yasuo: 29,
	},
	2: {
		Annie: 22,
		Aphelios: 22,
		Hecarim: 22,
		Janna: 22,
		JarvanIV: 22,
		Jax: 22,
		Lulu: 22,
		Pyke: 22,
		Sylas: 22,
		Teemo: 22,
		Thresh: 22,
		Vi: 22,
		Zed: 22,
	},
	3: {
		Akali: 18,
		Evelynn: 18,
		Irelia: 18,
		Jinx: 18,
		Kalista: 18,
		Katarina: 18,
		Kennen: 18,
		Kindred: 18,
		Lux: 18,
		Nunu: 18,
		Veigar: 18,
		XinZhao: 18,
		Yuumi: 18,
	},
	4: {
		Aatrox: 12,
		Ahri: 12,
		Ashe: 12,
		Cassiopeia: 12,
		Jhin: 12,
		Morgana: 12,
		Riven: 12,
		Sejuani: 12,
		Shen: 12,
		Talon: 12,
		Warwick: 12,
	},
	5: {
		Azir: 10,
		Ezreal: 10,
		Kayn: 10,
		LeeSin: 10,
		Lillia: 10,
		Sett: 10,
		Yone: 10,
		Zilean: 10,
	},
};

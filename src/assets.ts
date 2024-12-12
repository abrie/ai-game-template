import { TextureDictionary } from "./utils/TextureManager";

export default class Assets {
	static CellSize = 12;
	static Textures: TextureDictionary = {
		PLAYER: {
			name: "player",
			height: Assets.CellSize,
			width: Assets.CellSize,
			count: 1,
			color: 0x0000ff,
			margin: 0,
			spacing: 0,
			noise: false,
		},
		EMPTY_TILE: {
			name: "empty",
			height: Assets.CellSize,
			width: Assets.CellSize,
			count: 1,
			color: 0x000000,
			margin: 0,
			spacing: 0,
			noise: false,
		},
		FILLED_TILE: {
			name: "filled",
			height: Assets.CellSize,
			width: Assets.CellSize,
			count: 10,
			color: 0xf0aa00,
			margin: 0,
			spacing: 0,
			noise: true,
		},
		LOOT: {
			name: "loot",
			height: Assets.CellSize,
			width: Assets.CellSize,
			count: 1,
			color: 0x00ff00,
			margin: 0,
			spacing: 0,
			noise: false,
		},
	};
}

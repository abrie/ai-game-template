import Phaser from "phaser";
import { TextureParameters } from "../utils/TextureManager";
import TextureManager from "../utils/TextureManager";
import TilemapManager from "../utils/TilemapManager";
import Assets from "../assets";

class PlayScene extends Phaser.Scene {
	constructor() {
		super({ key: "PlayScene" });
	}

	preload() {
		// Load assets here
		TextureManager.generateAllTextures(this, Assets.Textures);
	}

	create() {
		const tilemap = new TilemapManager(
			this,
			Assets.MapWidth,
			Assets.MapHeight,
			Assets.CellSize,
			Assets.CellSize,
		);
		tilemap.addTileset(Assets.Textures.FILLED_TILE);
		tilemap.addTileset(Assets.Textures.EMPTY_TILE);
		tilemap.addLayer("layer", [
			Assets.Textures.FILLED_TILE,
			Assets.Textures.EMPTY_TILE,
		]);

		const arr = this.generateRandomTilemap(Assets.MapWidth, Assets.MapHeight);
		tilemap.populateTilemap("layer", arr);
	}

	update() {}

	generateRandomTilemap(width: number, height: number): TextureParameters[][] {
		const map: TextureParameters[][] = [];
		for (let y = 0; y < height; y++) {
			const row: TextureParameters[] = [];
			for (let x = 0; x < width; x++) {
				const tile =
					Math.random() < 0.5
						? Assets.Textures.FILLED_TILE
						: Assets.Textures.EMPTY_TILE;
				row.push(tile);
			}
			map.push(row);
		}
		return map;
	}
}

export default PlayScene;

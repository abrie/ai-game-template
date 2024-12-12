import Phaser from "phaser";
import { TextureParameters } from "../utils/TextureManager";
import TextureManager from "../utils/TextureManager";
import TilemapManager from "../utils/TilemapManager";
import Assets from "../assets";
import MapGenerator from "../utils/MapGenerator";

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

		const arr = MapGenerator.generateMap(Assets.MapWidth, Assets.MapHeight);
		tilemap.populateTilemap("layer", arr);
	}

	update() {}
}

export default PlayScene;

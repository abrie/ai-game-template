import Phaser from "phaser";
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
			20,
			20,
			Assets.CellSize,
			Assets.CellSize,
		);
		tilemap.addTileset(Assets.Textures.FILLED_TILE);
		tilemap.addTileset(Assets.Textures.EMPTY_TILE);
		tilemap.addLayer("layer", [
			Assets.Textures.FILLED_TILE,
			Assets.Textures.EMPTY_TILE,
		]);
	}

	update() {}
}

export default PlayScene;

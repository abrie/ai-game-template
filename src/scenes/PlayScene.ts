import Phaser from "phaser";
import TextureManager from "../utils/TextureManager";

class PlayScene extends Phaser.Scene {
	constructor() {
		super({ key: "PlayScene" });
	}

	preload() {
		// Load assets here
		TextureManager.generateAllTextures(this, TextureManager.Textures);
	}

	create() {}

	update() {}
}

export default PlayScene;

import Phaser from "phaser";
import TextureManager from "../utils/TextureManager";
import Assets from "../assets";

class PlayScene extends Phaser.Scene {
	constructor() {
		super({ key: "PlayScene" });
	}

	preload() {
		// Load assets here
		TextureManager.generateAllTextures(this, Assets.Textures);
	}

	create() {}

	update() {}
}

export default PlayScene;

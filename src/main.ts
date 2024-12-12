import Phaser from "phaser";
import Assets from "./assets";
import PlayScene from "./scenes/PlayScene";

const config = {
	type: Phaser.AUTO,
	width: Assets.CanvasWidth,
	height: Assets.CanvasHeight,
	scene: [PlayScene],
	physics: {
		default: "arcade",

		arcade: {
			debug: true,
		},
	},
};

new Phaser.Game(config);

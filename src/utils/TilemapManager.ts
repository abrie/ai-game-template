import Phaser from "phaser";
import { TextureParameters } from "./TextureManager";

class TilemapManager {
	tilemap: Phaser.Tilemaps.Tilemap;
	tilesetImages: Record<string, Phaser.Tilemaps.Tileset> = {};
	layers: Record<string, Phaser.Tilemaps.TilemapLayer> = {};
	startingGID: number = 1;

	constructor(
		scene: Phaser.Scene,
		width: number,
		height: number,
		tileWidth: number,
		tileHeight: number,
	) {
		this.tilemap = scene.make.tilemap({
			width,
			height,
			tileWidth,
			tileHeight,
		});
	}

	addTileset(parameters: TextureParameters) {
		const tileset = this.tilemap.addTilesetImage(
			parameters.name,
			undefined,
			parameters.width,
			parameters.height,
			parameters.margin,
			parameters.spacing,
			this.startingGID,
		);
		if (!tileset) {
			throw new Error(`Failed to create ${parameters.name} TilesetImage`);
		}

		this.startingGID += tileset.total;
		this.tilesetImages[parameters.name] = tileset;
	}

	addLayer(layerName: string, textureParameters: TextureParameters[]) {
		const tilesetImages = textureParameters.map(
			(parameters) => this.tilesetImages[parameters.name],
		);
		const layer = this.tilemap.createBlankLayer(layerName, tilesetImages);

		if (!layer) {
			throw new Error("Failed to create layer");
		}

		this.layers[layerName] = layer;
	}

	setupCollision(layerName: string, tilesetName: string) {
		const tileset = this.tilesetImages[tilesetName];

		if (!tileset) {
			throw new Error(`Unable to find tileset named ${tilesetName}`);
		}

		const layer = this.layers[layerName];
		if (!layer) {
			throw new Error(`Unable to find layer named ${layerName}`);
		}

		const range = Phaser.Utils.Array.NumberArray(
			tileset.firstgid,
			tileset.firstgid + tileset.total - 1,
		);

		layer.setCollision(range);
	}

	public setTile(
		layerName: string,
		x: number,
		y: number,
		tilesetImageName: string,
	) {
		const tilesetImage = this.tilesetImages[tilesetImageName];
		if (!tilesetImage) {
			throw new Error(
				`Unable to find a tilesetImage named ${tilesetImageName}`,
			);
		}

		const layer = this.layers[layerName];
		if (!layer) {
			throw new Error(`Unable to find layer named ${layerName}`);
		}

		const tileIndex = Phaser.Math.Between(
			tilesetImage.firstgid,
			tilesetImage.firstgid + tilesetImage.total - 1,
		);

		this.tilemap.putTileAt(tileIndex, x, y, true, layer);
	}

	public populateTilemap(layerName: string, map: string[][]) {
		for (let y = 0; y < map.length; y++) {
			for (let x = 0; x < map[y].length; x++) {
				this.setTile(layerName, x, y, map[y][x]);
			}
		}
	}
}

export default TilemapManager;

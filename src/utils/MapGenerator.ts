import { TextureParameters } from "./TextureManager";
class MapGenerator {
	static generateMap(
		width: number,
		height: number,
		filled: TextureParameters,
		empty: TextureParameters,
	): TextureParameters[][] {
		const map: TextureParameters[][] = [];
		for (let y = 0; y < height; y++) {
			const row: TextureParameters[] = [];
			for (let x = 0; x < width; x++) {
				const tile = Math.random() < 0.5 ? filled : empty;
				row.push(tile);
			}
			map.push(row);
		}
		return map;
	}
}

export default MapGenerator;

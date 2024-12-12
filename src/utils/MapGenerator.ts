class MapGenerator {
  static generateMap(width: number, height: number): TextureParameters[][] {
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

export default MapGenerator;

function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.clone = function () {
  return new Tile({x: this.x, y: this.y} , this.value)
};
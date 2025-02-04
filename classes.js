TileData = function(floorsprite, x, y)
{
    this.floorsprite = floorsprite;
    this.foresprite = null;
    this.x = x;
    this.y = y;
    this.convdata = new ConveyorData();
}

ConveyorData = function()
{
    //0 = none, 1 = input, 2 = output
    this.up = 0;
    this.down = 0;
    this.left = 0;
    this.right = 0;
}
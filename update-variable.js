var inStock;
var shipping;


inSock = true;
shipping = false; 

/*Some other processing might go here and, as a result, the script might need to change these values */ 

inSock = false;
shipping = true; 

var elStock = document.getElementById('stock');
elStock.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className = shipping; 
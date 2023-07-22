var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalle: function () {
    console.log(`Auto ${this.modelo} ${this.marca}`);
  },
};

console.log(miAuto);

console.log(miAuto.modelo);

console.log(miAuto.detalle());

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);

console.log(autoNuevo);

var items = [
  { nombre: "bici", costo: 300 },
  { nombre: "dsa", costo: 534 },
  { nombre: "gfd", costo: 543 },
  { nombre: "g", costo: 546 },
  { nombre: "gdf", costo: 675 },
];

var artFiltrados = items.filter(function (ar) {
  return ar.costo < 600;
});

console.log(artFiltrados);

var nomFiltrados = items.map(function (ar) {
  return ar.nombre;
});

console.log(nomFiltrados);

var encuentraArt = items.find(function (art) {
  return art.nombre === "bici";
});


console.log(encuentraArt);

items.forEach(function(ar){
    console.log(ar.nombre)
})

var arBaratos = items.some(function(ar){
    return ar.costo <=600
})

console.log(arBaratos);

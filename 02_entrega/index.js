const zapatillas = [
  {
    id: 1,
    nombre: 'Bulbasaur Air',
    precio: 79.99,
    img: './assets/001_bulbasaur_0.jpeg',
    estrellas: 4,
    pokemon: 'Bulbasaur',
    colores: ['green']
  },
  {
    id: 2,
    nombre: 'Bulbasaur Bubbles',
    precio: 89.99,
    img: './assets/001_bulbasaur_1.jpeg',
    estrellas: 4,
    pokemon: 'Bulbasaur',
    colores: ['green', 'white', 'turquoise']
  },
  {
    id: 3,
    nombre: 'Charmander Flames',
    precio: 99.99,
    img: './assets/004_charmander_0.jpeg',
    estrellas: 3,
    pokemon: 'Charmander',
    colores: ['yellow', 'red', 'orange', 'white']
  },
  {
    id: 4,
    nombre: 'Charmander Scales',
    precio: 69.99,
    img: './assets/004_charmander_1.jpeg',
    estrellas: 5,
    pokemon: 'Charmander',
    colores: ['yellow', 'red', 'orange', 'white']
  },
  {
    id: 5,
    nombre: 'Squirtle Drops',
    precio: 74.99,
    img: './assets/007_squirtle_0.jpeg',
    estrellas: 2,
    pokemon: 'Squirtle',
    colores: ['blue', 'brown', 'yellow']
  },
  {
    id: 6,
    nombre: 'Squirtle Wave',
    precio: 109.99,
    img: './assets/007_squirtle_1.jpeg',
    estrellas: 1,
    pokemon: 'Squirtle',
    colores: ['blue', 'brown', 'yellow', 'white']
  },
  {
    id: 7,
    nombre: 'Squirtle Bubbles',
    precio: 64.99,
    img: './assets/007_squirtle_2.jpeg',
    estrellas: 2,
    pokemon: 'Squirtle',
    colores: ['blue', 'brown', 'yellow', 'white']
  },
  {
    id: 8,
    nombre: 'Pikachu Thunder',
    precio: 119.99,
    img: './assets/025_pikachu_0.jpeg',
    estrellas: 4,
    pokemon: 'Pikachu',
    colores: ['yellow', 'red', 'blue']
  },
  {
    id: 9,
    nombre: 'Pikachu Colors',
    precio: 84.99,
    img: './assets/025_pikachu_1.jpeg',
    estrellas: 4,
    pokemon: 'Pikachu',
    colores: ['yellow', 'red', 'blue', 'black']
  },
  {
    id: 10,
    nombre: 'Pikachu Casual',
    precio: 94.99,
    img: './assets/025_pikachu_2.jpeg',
    estrellas: 4,
    pokemon: 'Pikachu',
    colores: ['yellow', 'red', 'blue']
  },
  {
    id: 11,
    nombre: 'Eevee Crochet',
    precio: 75.99,
    img: './assets/133_eevee_0.jpeg',
    estrellas: 4,
    pokemon: 'Eevee',
    colores: ['brown', 'blue', 'pink']
  },
  {
    id: 12,
    nombre: 'Eevee Rainbow',
    precio: 109.99,
    img: './assets/133_eevee_1.jpeg',
    estrellas: 1,
    pokemon: 'Eevee',
    colores: ['brown', 'blue', 'pink', 'yellow', 'orange']
  },
  {
    id: 13,
    nombre: 'Mew Casual',
    precio: 89.99,
    img: './assets/151_mew_0.jpeg',
    estrellas: 3,
    pokemon: 'Mew',
    colores: ['pink', 'white']
  },
  {
    id: 13,
    nombre: 'Mew Pokeballs',
    precio: 79.99,
    img: './assets/151_mew_1.jpeg',
    estrellas: 4,
    pokemon: 'Mew',
    colores: ['pink', 'white', 'purple', 'yellow']
  }
]

let zapatillasFiltradas0 = zapatillas.filter((elem) => elem.pokemon === 'Mew')
let zapatillasFiltradas1 = zapatillas.filter((elem) =>
  elem.colores.includes('yellow')
)
// Ordena ascendente
let zapatillasOrdenada0 = zapatillas.slice().sort((a, b) => a.precio - b.precio)
// Ordena descendente
let zapatillasOrdenada1 = zapatillas.slice().sort((a, b) => b.precio - a.precio)
// Ordena ascendente
let zapatillasOrdenada2 = zapatillas
  .slice()
  .sort((a, b) => a['estrellas'] - b['estrellas'])
// Ordena descendente
let zapatillasOrdenada3 = zapatillas
  .slice()
  .sort((a, b) => b['estrellas'] - a['estrellas'])
// Colores unicos
let coloresUnicos = [...new Set(zapatillas.flatMap((item) => item.colores))]
// Pokemon unicos
let pokemonUnicos = [...new Set(zapatillas.map((item) => item.pokemon))]

console.log('')
console.log(zapatillas)
console.log('')
console.log(zapatillasFiltradas0)
console.log('')
console.log(zapatillasFiltradas1)
console.log('')
console.log(zapatillasOrdenada0)
console.log('')
console.log(zapatillasOrdenada1)
console.log('')
console.log(zapatillasOrdenada2)
console.log('')
console.log(zapatillasOrdenada3)
console.log('')
console.log(coloresUnicos)
console.log('')
console.log(pokemonUnicos)
console.log('')

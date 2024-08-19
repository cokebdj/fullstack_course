// Define lista de zapatillas
const zap = [
  {
    id: 1,
    name: 'Bulbasaur Air',
    price: 79.99,
    img: './assets/001_bulbasaur_0.jpeg',
    stars: 4,
    pokemon: 'Bulbasaur',
    colors: ['green']
  },
  {
    id: 2,
    name: 'Bulbasaur Bubbles',
    price: 89.99,
    img: './assets/001_bulbasaur_1.jpeg',
    stars: 4,
    pokemon: 'Bulbasaur',
    colors: ['green', 'white', 'turquoise']
  },
  {
    id: 3,
    name: 'Charmander Flames',
    price: 99.99,
    img: './assets/004_charmander_0.jpeg',
    stars: 3,
    pokemon: 'Charmander',
    colors: ['yellow', 'red', 'orange', 'white']
  },
  {
    id: 4,
    name: 'Charmander Scales',
    price: 69.99,
    img: './assets/004_charmander_1.jpeg',
    stars: 5,
    pokemon: 'Charmander',
    colors: ['yellow', 'red', 'orange', 'white']
  },
  {
    id: 5,
    name: 'Squirtle Drops',
    price: 74.99,
    img: './assets/007_squirtle_0.jpeg',
    stars: 2,
    pokemon: 'Squirtle',
    colors: ['blue', 'brown', 'yellow']
  },
  {
    id: 6,
    name: 'Squirtle Wave',
    price: 109.99,
    img: './assets/007_squirtle_1.jpeg',
    stars: 1,
    pokemon: 'Squirtle',
    colors: ['blue', 'brown', 'yellow', 'white']
  },
  {
    id: 7,
    name: 'Squirtle Bubbles',
    price: 64.99,
    img: './assets/007_squirtle_2.jpeg',
    stars: 2,
    pokemon: 'Squirtle',
    colors: ['blue', 'brown', 'yellow', 'white']
  },
  {
    id: 8,
    name: 'Pikachu Thunder',
    price: 119.99,
    img: './assets/025_pikachu_0.jpeg',
    stars: 4,
    pokemon: 'Pikachu',
    colors: ['yellow', 'red', 'blue']
  },
  {
    id: 9,
    name: 'Pikachu Colors',
    price: 84.99,
    img: './assets/025_pikachu_1.jpeg',
    stars: 4,
    pokemon: 'Pikachu',
    colors: ['yellow', 'red', 'blue', 'black']
  },
  {
    id: 10,
    name: 'Pikachu Casual',
    price: 94.99,
    img: './assets/025_pikachu_2.jpeg',
    stars: 4,
    pokemon: 'Pikachu',
    colors: ['yellow', 'red', 'blue']
  },
  {
    id: 11,
    name: 'Eevee Crochet',
    price: 75.99,
    img: './assets/133_eevee_0.jpeg',
    stars: 4,
    pokemon: 'Eevee',
    colors: ['brown', 'blue', 'pink']
  },
  {
    id: 12,
    name: 'Eevee Rainbow',
    price: 109.99,
    img: './assets/133_eevee_1.jpeg',
    stars: 1,
    pokemon: 'Eevee',
    colors: ['brown', 'blue', 'pink', 'yellow', 'orange']
  },
  {
    id: 13,
    name: 'Mew Casual',
    price: 89.99,
    img: './assets/151_mew_0.jpeg',
    stars: 3,
    pokemon: 'Mew',
    colors: ['pink', 'white']
  },
  {
    id: 13,
    name: 'Mew Pokeballs',
    price: 79.99,
    img: './assets/151_mew_1.jpeg',
    stars: 4,
    pokemon: 'Mew',
    colors: ['pink', 'white', 'purple', 'yellow']
  }
]

// List utilities
const extractUqList = (list, attr) => {
  let filtList = [...new Set(list.map((item) => item[attr]))]
  return filtList
}
const extractUqListList = (list, attr) => {
  let filtList = [...new Set(list.flatMap((item) => item[attr]))]
  return filtList
}
const sortAsc = (list, attr) => {
  let sortedList = list.slice().sort((a, b) => a[attr] - b[attr])
  return sortedList
}
const sortDesc = (list, attr) => {
  let sortedList = list.slice().sort((a, b) => b[attr] - a[attr])
  return sortedList
}
const filterList = (list, attr, value) => {
  let filteredList = list.filter((elem) => elem[attr] === value)
  return filteredList
}
const filterListList = (list, attr, value) => {
  let filteredList = list.filter((elem) => elem[attr].includes(value))
  return filteredList
}

const sortList = (list, attr, how) => {
  switch (how) {
    case 'Ascendente':
      console.log('ASCENDENTE')
      sortedList = sortAsc(list, attr)
      return sortedList
    case 'Descendente':
      console.log('DESCENDENTE')
      sortedList = sortDesc(list, attr)
      return sortedList
    default:
      console.log('DEFAULT')
      sortedList = sortAsc(list, 'id')
      return sortedList
  }
}

const extractRandomSample = (list, length) => {
  let sample = []
  let copyList = [...list]

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * copyList.length)
    sample.push(copyList[randomIndex])
    copyList.splice(randomIndex, 1)
  }
  return sample
}
const applySelection = (list, color, pokemon, sort) => {
  let list0 = filterListList(list, 'colors', color)
  let list1 = filterList(list0, 'pokemon', pokemon)
  let list2 = sortList(list1, 'stars', sort)
  if (list2.length == 0) {
    console.log('SUGGESTION')
    let list3 = extractRandomSample(list, 3)
    return list3
  } else {
    return list2
  }
}

// Restart values
const restartFilters = () => {
  selectColor = ''
  selectPokemon = ''
  selectOrder = ''
  zapFilt = zap.slice()
  colorsUqMod = colorsUq.slice()
  pokemonsUqMod = pokemonUq.slice()
}
// Create selectors
const createSelectors = (filters, list, label_case, variable) => {
  // Generate label
  let label = document.createElement('label')
  label.textContent = label_case
  // Generate selector
  const selectModel = document.createElement('select')
  selectModel.innerHTML = ''
  for (const elem of list) {
    const option = document.createElement('option')
    option.value = elem
    option.textContent = elem
    selectModel.appendChild(option)
  }
  filters.appendChild(label)
  filters.appendChild(selectModel)
  switch (variable) {
    case 'color':
      selectModel.addEventListener('change', (event) => {
        ;(selectColor = event.target.value),
          (zapFilt = applySelection(
            zap,
            selectColor,
            selectPokemon,
            selectOrder
          )),
          printZapas(zapFilt)
      })
    case 'pokemon':
      selectModel.addEventListener('change', (event) => {
        ;(selectPokemon = event.target.value),
          (zapFilt = applySelection(
            zap,
            selectColor,
            selectPokemon,
            selectOrder
          )),
          printZapas(zapFilt)
      })
    case 'price_order':
      selectModel.addEventListener('change', (event) => {
        ;(selectOrder = event.target.value),
          (zapFilt = applySelection(
            zap,
            selectColor,
            selectPokemon,
            selectOrder
          )),
          printZapas(zapFilt)
      })
    default:
      console.log('Not available')
  }
}

// Create reset button
const createResetButton = (divFilters) => {
  let button = document.createElement('button')
  button.innerHTML = 'Refrescar filtros'
  divFilters.appendChild(button)
  button.addEventListener('click', (printZapas(zap), restartFilters()))
  console.log('CLICK')
}

// Print results
const printZapas = (zapas, suggestion = false) => {
  const divZapas = document.querySelector('#zapatillas')
  divZapas.innerHTML = ''
  console.log('estoy pintando')

  for (const zapa of zapas) {
    const divZapa = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('h3')
    const price = document.createElement('p')
    const divStars = document.createElement('div')

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('div')
      star.className = 'estrella'
      if (i <= zapa.stars) {
        star.classList.add('rellena')
      }
      divStars.appendChild(star)
    }

    divZapa.className = 'flex-container'
    divImg.classList.add('imgContainer')
    divStars.classList.add('estrellas', 'flex-container')
    img.src = zapa.img
    name.textContent = zapa.name
    price.textContent = `${zapa.price} €`

    divZapa.appendChild(divImg)
    divImg.appendChild(img)
    divZapa.appendChild(name)
    divZapa.appendChild(price)
    divZapa.appendChild(divStars)
    divZapas.appendChild(divZapa)
  }
}

// Original values
const colorsUq = extractUqListList(zap, 'colors')
const pokemonUq = extractUqList(zap, 'pokemon')
const ordPrice = ['Ascendente', 'Descendente', 'Ninguno']

// Initialize
let selectColor = ''
let selectPokemon = ''
let selectOrder = ''
let zapFilt = zap.slice()
let colorsUqMod = colorsUq.slice()
let pokemonsUqMod = pokemonUq.slice()

// Initialized charts
printZapas(zapFilt)

// Initialized filters
const divFilters = document.querySelector('#filtros')
createSelectors(divFilters, colorsUqMod, 'Selecciona color:', 'color')
createSelectors(divFilters, pokemonsUqMod, 'Selecciona pokemon:', 'pokemon')
createResetButton(divFilters)

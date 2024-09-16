import './style.css'

// HEADER
const headerTemplate = () => {
  return `
  <h1>I</h1>
  <input type="text" placeholder="Search" id="searchinput"/>
  <button id="searchbtn"><img src="/icons/search.svg" alt="Search icon"/></button>
  <button id="darkmodebtn"><img src="/icons/dark.svg" alt="Dark mode icon"/ id="darkmodeicon"></button>
  <img
    src="/images/profile.jpeg"
    alt="Profile image"
    class="profileimg"
  /> 
    `
}

const themeSwitch = () => {
  document.body.classList.toggle('dark')
}

const listeners = () => {
  const darkmodebtn = document.querySelector('#darkmodebtn')
  darkmodebtn.addEventListener('click', () => {
    themeSwitch()
    const theme = document.body.classList.contains('dark')
    if (theme) {
      document.querySelector('#darkmodeicon').src = '/icons/light.svg'
    } else {
      document.querySelector('#darkmodeicon').src = '/icons/dark.svg'
    }
  })
}

const printHeaderTemplate = () => {
  document.querySelector('header').innerHTML = headerTemplate()
  listeners()
}

printHeaderTemplate()

// FOOTER
const templateFooter = () => {
  return `
    <h4>Copyright 2023 - Inspirest - Rock the Code</h4>
    `
}

const printFooterTemplate = () => {
  document.querySelector('footer').innerHTML = templateFooter()
}

printFooterTemplate()

const cardTemplate = (item) => {
  return `
    <li class="gallery-item" style="background-image: url(${item.urls.regular}); border: 10px solid ${item.color}">
    <div class="info">
        <div class="save-btn">
            <button>Guardar</button>
        </div>
        <div class="links">
            <a href=${item.links.html} class="full-link">${item.links.html}</a>
            <div>
                <a href=${item.urls.full} target="_blank" class="links-icon">
                    <img src="/icons/upload.svg" alt="Upload icon"/>
                </a>
                <a href="#null" class="links-icon">
                    <img src="/icons/more.svg" alt="More icon"/>
                </a>    
            </div>
        </div>
    </div>
    </li>
    `
}

import { createApi } from 'unsplash-js'

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY
})

const searchPhotos = async (keyword) => {
  const images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30
  })
  return images
}

const galleryTemplate = () => {
  return `
    <ul class="gallery">
    </ul>
    `
}

const printItems = (items) => {
  const gallery = document.querySelector('.gallery')
  gallery.innerHTML = ''
  for (const item of items) {
    gallery.innerHTML += cardTemplate(item)
  }
}

const galleryListeners = async () => {
  const input = document.querySelector('#searchinput')
  const btn = document.querySelector('#searchbtn')
  btn.addEventListener('click', async () => {
    const images = await searchPhotos(input.value)
    printItems(images.response.results)
  })
}

const printTemplate = async () => {
  document.querySelector('main').innerHTML = galleryTemplate()
  galleryListeners()

  const images = await searchPhotos('moon')
  printItems(images.response.results)
}

printTemplate()

import { printHeaderTemplate } from './src/components/Header/Header'
import { printFooterTemplate } from './src/components/Footer/Footer'
import { cardTemplate } from './src/components/GalleryItem/GalleryItem'
import { galleryTemplate } from './src/components/Gallery/Gallery'
import './style.css'
import { createApi } from 'unsplash-js'

printHeaderTemplate()
printFooterTemplate()

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY
})

const searchPhotos = async (keyword) => {
  const images = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30
  })
  if (images.response.results.length < 1) {
    window.alert('No results for the query, but here you have some cats :)')
    const imagesCats = await unsplash.search.getPhotos({
      query: 'cats',
      page: 1,
      perPage: 30
    })

    return imagesCats
  } else {
    return images
  }
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
    input.value = ''
  })
}

const printTemplate = async () => {
  document.querySelector('main').innerHTML = galleryTemplate()
  galleryListeners()
  const images = await searchPhotos('variety')
  printItems(images.response.results)
}

printTemplate()

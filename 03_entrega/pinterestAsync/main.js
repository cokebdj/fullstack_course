import { printHeaderTemplate } from './src/components/Header/Header'
import { printFooterTemplate } from './src/components/Footer/Footer'
import { cardTemplate } from './src/components/GalleryItem/GalleryItem'
import { galleryTemplate } from './src/components/Gallery/Gallery'
import './style.css'
import { createApi } from 'unsplash-js'

printHeaderTemplate()
printFooterTemplate()
const petitions = []

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
    const height = 200
    const width = 400
    const screenX =
      window.screenX !== undefined ? window.screenX : window.screenLeft
    const screenY =
      window.screenY !== undefined ? window.screenY : window.screenTop
    const outerWidth =
      window.outerWidth !== undefined
        ? window.outerWidth
        : document.documentElement.clientWidth
    const outerHeight =
      window.outerHeight !== undefined
        ? window.outerHeight
        : document.documentElement.clientHeight - 22
    const left = screenX + (outerWidth - width) / 2
    const top = screenY + (outerHeight - height) / 2
    const features = `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars,status`

    const popup = window.open('', 'popupWindow', features)
    popup.document.write('<html><head><title>No results :(</title></head>')
    popup.document.write("<body><div class='popup-content'>")
    popup.document.write(
      `<p>No results for the query, but here you have some cats :)</p>`
    )
    popup.document.write("<button onclick='window.close()'>Close</button>")
    popup.document.write('</div></body></html>')
    popup.document.close()

    const imagesCats = await unsplash.search.getPhotos({
      query: 'cats',
      page: 1,
      perPage: 30
    })

    return imagesCats
  } else {
    petitions.push(keyword)
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
  const pageIcon = document.querySelector('#pageIcon')
  pageIcon.addEventListener('click', async () => {
    const images = await searchPhotos(petitions[0])
    printItems(images.response.results)
    input.value = ''
  })
}

const printTemplate = async () => {
  document.querySelector('main').innerHTML = galleryTemplate()
  galleryListeners()
  const images = await searchPhotos('variety')
  console.log(images.response.results[0].user.name)
  console.log(images.response.results[0].created_at)
  console.log(images.response.results[0].likes)
  console.log(images.response.results[0].user.total_photos)
  printItems(images.response.results)
}

printTemplate()

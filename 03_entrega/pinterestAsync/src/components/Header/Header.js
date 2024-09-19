import './Header.css'

// HEADER
const headerTemplate = () => {
  return `
  <h1 id="pageIcon">I</h1>
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

export const printHeaderTemplate = () => {
  document.querySelector('header').innerHTML = headerTemplate()
  listeners()
}

import './Header.css'

// FOOTER
const templateHeader = () => {
  return `
    <h4>Header</h4>
    `
}

export const printHeaderTemplate = () => {
  document.querySelector('header').innerHTML = templateHeader()
}

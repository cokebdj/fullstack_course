import './Footer.css'

// FOOTER
const templateFooter = () => {
  return `
    <h4>Copyright 2024 - Portfolio - Rock the Code</h4>
    `
}

export const printFooterTemplate = () => {
  document.querySelector('footer').innerHTML = templateFooter()
}

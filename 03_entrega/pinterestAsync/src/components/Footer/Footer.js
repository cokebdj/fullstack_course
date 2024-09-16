import './Footer.css'

// FOOTER
const templateFooter = () => {
  return `
    <h4>Copyright 2023 - Inspirest - Rock the Code</h4>
    `
}

export const printFooterTemplate = () => {
  document.querySelector('footer').innerHTML = templateFooter()
}

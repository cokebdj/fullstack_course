import './Education.css'

// FOOTER
const templateEducation = () => {
  return `
    <h4>Education</h4>
    `
}

export const printEducationTemplate = () => {
  document.querySelector('.Education').innerHTML = templateEducation()
}

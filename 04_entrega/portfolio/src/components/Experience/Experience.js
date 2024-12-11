import './Experience.css'

// FOOTER
const templateExperience = () => {
  return `
    <h4>Experience</h4>
    `
}

export const printExperienceTemplate = () => {
  document.querySelector('.Experience').innerHTML = templateExperience()
}

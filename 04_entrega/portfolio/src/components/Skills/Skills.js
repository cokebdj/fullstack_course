import './Skills.css'

// FOOTER
const templateSkills = () => {
  return `
    <h4>Skills</h4>
    `
}

export const printSkillsTemplate = () => {
  document.querySelector('.Skills').innerHTML = templateSkills()
}

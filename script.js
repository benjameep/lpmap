function update() {
  let current = window.location.hash.slice(1)
  const options = ['alimentations','delivery','vent','computer']
  if (!options.includes(current)) current = options[0]
  for (const opt of options) {
    document.querySelector(`.menu a.${opt}`).classList.toggle('active', opt === current)
    document.querySelectorAll(`circle.${opt}, text.${opt}`).forEach(light => {
      if (opt !== current) {
        light.setAttribute('display', 'none')
      } else {
        light.removeAttribute('display')
      }
    })
  }
}

update()
window.addEventListener('hashchange', update)
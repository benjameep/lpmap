function use(current) {
  const options = ['vent','alimentations','delivery','computer']
  for (const opt of options) {
    document.querySelector(`button.${opt}`).classList.toggle('active', opt === current)
    document.querySelectorAll(`circle.${opt}, text.${opt}`).forEach(light => {
      if (opt !== current) {
        light.setAttribute('display', 'none')
      } else {
        light.removeAttribute('display')
      }
    })
  }
}
function use(current) {
  const options = ['vent','alimentations','delivery','computer']
  for (const opt of options) {
    $(`button.${opt}`).toggleClass('active', opt === current)
    $(`.light.${opt}`).attr('display', opt === current ? 'block' : 'none')
  }
}

use('alimentations')
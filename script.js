function use(current) {
  const options = ['vent','alimentations','delivery','computer']
  for (const opt of options) {
    $(`button.${opt}`).toggleClass('active', opt === current)
    $(`.light.${opt}`).attr('display', opt === current ? 'block' : 'none')
  }
}

$('.desk').attr({
  'fill': 'black',
  'fill-opacity': 0.2
})

$('circle.light').attr({
  'fill': 'url(#g)',
  'r': 5.5,
})

$('text.light').attr({
  'fill': 'white',
  'text-anchor': 'middle',
  'alignment-baseline': 'middle',
  'font-size': 22,
  'font-family': 'monospace',
  'font-weight': 900,
})

$('.wall').attr({
  'fill': '#373130',
  'stroke': '#222222',
})

use('alimentations')
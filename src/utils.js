export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function preparePlayground(){
  if ( document.querySelector('.playground') ) document.querySelector('.playground').remove()

  const playground = document.createElement('div')
  playground.className = 'playground'
  playground.id = 'playground'
  document.body.append(playground)
  
  return playground
}
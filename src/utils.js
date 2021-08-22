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

export function getRandomColor(){
  let hexColor = '#' + Math.round(Math.random() * 16777215).toString(16)
  hexColor = (hexColor + '000000').substr(0, 7)

  return hexColor
}

export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
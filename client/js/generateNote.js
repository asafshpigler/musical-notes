import { min, max } from './globals.js'

function generateNote() {
  var num = getRandomIntInclusive(min, max)
  var chr = getMusicChr()
  var note = chr + num
  return note
}


function getMusicChr() {
  var chr = String.fromCharCode(getRandomIntInclusive(65, 71))
  return chr
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

export default generateNote

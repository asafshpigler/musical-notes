var min = 3
var max = 5

function setMin(event) {
  min = event.target.value
}

function setMax(event) {
  max = event.target.value
}

export {
  min,
  max,
  setMin,
  setMax,
}

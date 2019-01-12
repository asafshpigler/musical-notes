import generateNote from './generateNote.js'
import noteMap from './noteMap.js'
import { setMin, setMax } from './globals.js'

var noteInterval = 3000
var input
var interval
var noteNode
var lines
var prevLine
var isShowLetters = true

document.addEventListener("DOMContentLoaded", init);

function setNoteRenderInterval(e) {
    noteInterval = e.target.value * 1000
    clearInterval(interval)
    renderNote()
    interval = setInterval(renderNote, noteInterval)
}

function init() {
    const elTime = document.getElementById('time')
    if (elTime) elTime.addEventListener("input", setNoteRenderInterval)

    const elRangeMin = document.getElementById('range-min')
    if (elRangeMin) elRangeMin.addEventListener("input", setMin)

    const elRangeMax = document.getElementById('range-max')
    if (elRangeMax) elRangeMax.addEventListener("input", setMax)

    const elShowLetters = document.getElementById('show-letters')
    if (elShowLetters) {
        elShowLetters.addEventListener("input", () => {
            isShowLetters = !isShowLetters
        })
    }

    lines = document.getElementsByClassName('line')

    input = document.getElementById("time")
    input.value = noteInterval / 1000
    noteNode = document.getElementById('note')
    renderNote()
    interval = setInterval(renderNote, noteInterval)
}

function renderNote() {
    const note = generateNote()
    var noteData = noteMap[note] || {}
    if (Array.isArray(noteData)) {
        noteData = noteData[Math.random() > 0.5 ? 0 : 1]
    }
    const { line: lineIndex, position, img } = noteData
    var line = lines[lines.length - lineIndex - 1]

    if (line) {
        if (prevLine) prevLine.innerHTML = ''
        prevLine = line

        const className = position !== 'middle' ? `note-container-${position}` : ''
        line.innerHTML = `
            <div
                class="note-container ${className}"
                style="background-image: url('../img/${img === 'middle' ? 'middle-c-note' : 'note'}.svg')"
            >
                ${isShowLetters ? note : ''}
            </div>
        `
    }
    else {
        renderNote()
    }
}

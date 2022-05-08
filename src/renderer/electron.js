const ipcRenderer = window.electron.ipcRenderer

const timersContainer = document.querySelector('#timers-container')

function countdown(element, minutes, seconds) {
  // Fetch the display element
  console.log(element)
  const el = document.getElementById(element)

  // Set the timer
  const interval = setInterval(function () {
    if (seconds == 0) {
      if (minutes == 0) {
        if (el) {
          el.innerHTML = 'STOP!'
        }

        clearInterval(interval)
        return
      } else {
        minutes--
        seconds = 60
      }
    }

    if (minutes > 0) {
      var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute')
    } else {
      var minute_text = ''
    }

    var second_text = seconds > 1 ? '' : ''
    if (el) {
      console.log('in el')
      el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ''
    }
    seconds--
  }, 1000)
}

api.receive('create-clock', args => {
  let timers = document.querySelectorAll('.clock') || []
  let timerId = 'timer' + timers.length
  const element = document.createElement('li')
  const transcription = args[0].toLowerCase()

  element.innerHTML = `<div class='clock' id='${timerId}'></div>`

  if (timersContainer) {
    timersContainer.appendChild(element)
  }

  if (transcription === 'mid flash') {
    countdown(timerId, 5, 0)
  }
})

export { ipcRenderer }

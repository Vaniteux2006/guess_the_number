const elementKick = document.getElementById('try');
const text = (TextSee) => {
  kicktry.innerHTML = `
  <div class="said">You had said:</div>
  <span class="box">${TextSee}</span>
`
}

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
//código que busca o reconhecimento

const recognition = new SpeechRecognition();
recognition.lang="pt-Br"
recognition.start()
//código que começa o reconhecimento

recognition.addEventListener('result', onSpeak)
function onSpeak(e) {
  textTry = e.results[0][0].transcript;
  text(textTry)
  valueChecker(textTry)
}
recognition.addEventListener('end', () => {recognition.start()})
//código que mostra a transcrição e ativa

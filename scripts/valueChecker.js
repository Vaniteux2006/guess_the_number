function valueChecker(b) {
    const valueNumber = +b;
    if (Number.isNaN(valueNumber)) {
        console.error('ERROR: Text Not Valid')
        kicktry.innerHTML += '<div class="result"><i class="fa-solid fa-xmark"></i> Please. Say a Number.</div>'
    }

    if (fineNumber(valueNumber)) {
        console.error("ERROR: Number not Valid")
        kicktry.innerHTML += '<div class="result"><i class="fa-solid fa-xmark"></i> This number is invalid. Check again where the Secret Number is between. </div>'
    }

    if (valueNumber === secretNumber) {
        kicktry.innerHTML += `<div class="result"> Conglatulations! This is the secret number!<i class="fa-solid fa-check"></i></div>
        `
        recognition.onspeechend = () => {
            recognition.stop();
          }; 
    } 
    else if (valueNumber < secretNumber) {
        kicktry.innerHTML += `<div class="result">Amost, but the secret number is bigger <i class="fa-solid fa-angle-up"></i> </div>`
    } else if (valueNumber > secretNumber) {
        kicktry.innerHTML += `<div class="result"> Amost, but the secre number is lower <i class="fa-solid fa-arrow-down"></i> </div>`
    }
    return
}

const fineNumber = (n) => {
 return n > majorValue || n < minorValue
}




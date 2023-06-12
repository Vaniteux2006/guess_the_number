console.log("Nothing to find here 👁‍🗨")
const minorValue = 1;
const majorValue = 1000;
//recebe os valores

const objectMinorValue = document.getElementById('minor');
const objectMajorValue = document.getElementById('major');
//cata as ids

objectMajorValue.innerHTML = majorValue;
objectMinorValue.innerHTML = minorValue;
//iguala os valores ao ids
//ele pega o elemento, mete uma função innerHTML (que transforma em string) e iguala aos valor dado

const d = (n) => { 
    return Math.floor(Math.random() * n) + 1 
}
//d => dado. Imagine um D20, logo, seria d(20)

const secretNumber = d(majorValue);


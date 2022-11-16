// FUNZIONE PER CREARE ELEMENTI DEL DOM

function creazionElementi (tagname, classe, id, text) {
    elemento = document.createElement(tagname);
    elemento.classList.add(classe);
    elemento.id = id;
    elemento.innerHTML = text;
    return elemento;
}

// CREAZIONE ELEMENTI

const divTitle = creazionElementi ('div', 'title', '', '');
document.body.append(divTitle);

const h1Title = creazionElementi ('h1', 'h1-title', '', 'This is a Counter');
divTitle.append(h1Title);

const divButtons = creazionElementi ('div', 'div-buttons', '', '');
document.body.append(divButtons);

const divCounter = creazionElementi ('div', 'counter', '', '');
divButtons.append(divCounter);

const divCounterPlus = creazionElementi ('div', 'counter-plus', '', '');
divCounter.append(divCounterPlus);

const divCounterNumber = creazionElementi ('div', 'counter-number', '', '');
divCounter.append(divCounterNumber);

const divCounterLess = creazionElementi ('div', 'counter-less', '',  '');
divCounter.append(divCounterLess);

const divReset = creazionElementi ('div', 'reset', '', '');
divButtons.append(divReset);

const buttonPlus = creazionElementi ('button', 'button-plus', 'button-plus', '+');
divCounterPlus.append(buttonPlus);

const buttonLess = creazionElementi ('button', 'button-less', 'button-less', '-');
divCounterLess.append(buttonLess);

const buttonReset = creazionElementi ('button', 'button-reset', 'button-reset', 'Reset');
divReset.append(buttonReset);

let inputNumber = document.createElement('input');
inputNumber.setAttribute('type', 'number');
inputNumber.setAttribute('value', 0);
inputNumber.setAttribute('readonly', true);
divCounterNumber.append(inputNumber);

// FUNZIONE PER INCREMENTARE, DECREMENTARE E RESETTARE IL COUNTER

let number = inputNumber.value;

  divButtons.addEventListener('click', function(event)  {
    switch (event.target.id){
      case 'button-plus' :
        number = isNaN(number) ? 0 : number;
        number++;
        inputNumber.value = number;
        break;
      case 'button-less' :
        number = isNaN(number) ? 0 : number;
        number--;
        inputNumber.value = number;
        break;
      case 'button-reset' :
        number = 0;
        inputNumber.value = number;
        break;
      }
    });
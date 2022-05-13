const buttons = document.querySelector('.buttons');
const inputField = document.querySelector('input');
let argument_1 = 0;
let argument_2 = 0;
let action = '';

function setInputValue(num){
  inputField.value += num;
}

function resetInputValue(){
  inputField.value = null;
}

function setArgument_1(){
  argument_1 = Number(inputField.value);
}

function setArgument_2(){
  argument_2 = Number(inputField.value);
}

function setAction(operation){
  action = operation;
}

function calcResult(){
  switch (action){
    case '+':
      setArgument_2();
      resetInputValue();
      return argument_1 + argument_2;
    case '-':
      setArgument_2();
      resetInputValue();
      return argument_1 - argument_2;
    case '*':
      setArgument_2();
      resetInputValue();
      return argument_1 * argument_2;
    case '/':
      setArgument_2();
      resetInputValue();
      return argument_1 / argument_2;
    default:
      return;
  }
}

buttons.addEventListener('click', function (e){
  const activeButton = e.target;
  if(activeButton.classList.contains('number')){
    setInputValue(activeButton.dataset.value);
  } else {
    if(activeButton.dataset.value === '='){
      const result = calcResult();
      setInputValue(result);
    } else {
      setArgument_1();
      setAction(activeButton.dataset.value);
      resetInputValue();
    }
  }
})

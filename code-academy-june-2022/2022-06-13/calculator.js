function addition(num1,num2) {
    let result = num1 + num2;
    return result;
}
function subtraction(num1,num2) {
  let result = num1 - num2;
  return result;
}
function multiplication(num1,num2) {
  let result = num1 * num2;
  return result;
}
function division(num1,num2) {
  let result = num1 / num2;
  return result;
}

let param = document.querySelector(".buttons");
let screen = document.querySelector("#numberBox");
let = screen.value = '';

function getNum(e) {
    if(e.target.nodeName === "BUTTON") {
        let pressed = e.target.textContent;
        // console.log(`${pressed}`);
        screen.value += pressed;
    }
}

param?.addEventListener('click', getNum);

function clr(e) {
    if(e.target.id === "clear") {
        screen.value = '';
    }
}

param?.addEventListener('click', eql);
param?.addEventListener('click', clr);

function eql(e) {
    if(e.target.id === "equals") {
        if(screen.value.includes('+')) {
            let num1 = Number(screen.value[0]);
            let num2 = Number(screen.value[2]);
            let result = addition(num1,num2);
            screen.value = result;
        }else if(screen.value.includes('-')) {
            let num1 = Number(screen.value[0]);
            let num2 = Number(screen.value[2]);
            let result = subtraction(num1,num2);
            screen.value = result;
        }else if(screen.value.includes('*')) {
            let num1 = Number(screen.value[0]);
            let num2 = Number(screen.value[2]);
            let result = multiplication(num1,num2);
            screen.value = result;
        }else if(screen.value.includes('/')) {
            let num1 = Number(screen.value[0]);
            let num2 = Number(screen.value[2]);
              if (num2 == 0) {
                  console.log('0 division');
                  return screen.value = `ERROR`;
              }
            let result = division(num1,num2);
            screen.value = result;
        }
    }
}
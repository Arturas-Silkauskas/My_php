// -- ONE -- //

document.querySelector('.first')?.addEventListener('click', function() {
    alert('Hello world!');
});

// -- TWO -- //

let inpt = document.querySelector('#input1')
let btn1 = document.querySelector('#button1')
let btn2 = document.querySelector('#button2')
let btn3 = document.querySelector('#button3')
let btn4 = document.querySelector('#button4')

btn1?.addEventListener('click', function() {
    inpt.value = inpt.value.toUpperCase();
})
btn2?.addEventListener('click', function() {
    inpt.value = inpt.value.toLowerCase();
})
btn3?.addEventListener('click', function() {
    inpt.value = inpt.value[0].toUpperCase() + inpt.value.slice(1);
})
btn4?.addEventListener('click', function() {
    inpt.value = inpt.value[0].toLowerCase() + inpt.value.slice(1);
})

// -- THREE -- //

let saveButton = document.querySelector('#saveBtn')

function eValidate() {
    const $eResult = $('#emailResult');
    const email = $('#email').val();
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)){
        $eResult.text(email + ' is not valid');
        $eResult.css('color', 'red');
        $eResult.css('font-size', '12px');
    } else {
        $eResult.text(email + ' is valid');
        $eResult.css('color', 'green');
        $eResult.css('font-size', '12px');
    }
    return false;
}

function pValidate(){
    const $pResult = $('#phoneResult');
    const phone = $('#phone').val();
    const re = /^(86)(\d{7})$/;

    if (!re.test(phone)) {
        $pResult.text(phone + ' is not valid');
        $pResult.css('color', 'red');
        $pResult.css('font-size', '12px');
    } else {
        $pResult.text(phone + ' is valid');
        $pResult.css('color', 'green');
        $pResult.css('font-size', '12px');
    }
}

saveButton?.addEventListener('click', function (e){
    e.preventDefault();
    pValidate();
    eValidate();
});

// -- FOUR -- //

let block = document.querySelector('#blockBtn');
let unblock = document.querySelector('#unblockBtn');
let inputBlockUnblock = document.querySelector('#blockUnblock');

block?.addEventListener('click', function() {
    inputBlockUnblock?.setAttribute('readonly','');
});

unblock?.addEventListener('click', function() {
    inputBlockUnblock?.removeAttribute('readonly');
});

// -- FIVE -- //

let img = document.querySelector('#imgMonkeys');

img?.addEventListener('mouseenter', function() {
    img.setAttribute('src', 'https://i.imgur.com/PLDVxza.jpg');
});
img?.addEventListener('mouseleave', function() {
    img.setAttribute('src', 'https://i.imgur.com/0DElr0H.jpg');
});

// -- SIX -- //

let pointer = document.querySelector('#pointer');
let text = document.querySelector('#text');
let copy = document.querySelector('#copy');
let help = document.querySelector('#help');
let crosshair = document.querySelector('#crosshair');
let changeText = document.querySelector('#randomText');
let redColor = document.querySelector('#redColor');
let greenColor = document.querySelector('#greenColor');
let blueColor = document.querySelector('#blueColor');
let redBorder = document.querySelector('#redBorder');
let greenBorder = document.querySelector('#greenBorder');
let blueBorder = document.querySelector('#blueBorder');
let reset = document.querySelector('#reset')

redColor?.addEventListener('click', function(e) {
    e.preventDefault();
    changeText.style.color = 'red';
});
greenColor?.addEventListener('click', function(e) {
    e.preventDefault();
    changeText.style.color = 'green';
});
blueColor?.addEventListener('click', function(e) {
    e.preventDefault();
    changeText.style.color = 'blue';
});


redBorder?.addEventListener('click', function(e) {
    e.preventDefault();
    changeText.style.border = '2px solid red';
});
greenBorder?.addEventListener('click', function(e) {
    e.preventDefault();
    changeText.style.border = '2px solid green';
});
blueBorder?.addEventListener('click', function(e) {
    e.preventDefault();
    changeText.style.border = '2px solid blue';
});


pointer?.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.style.cursor = 'pointer';
});
text?.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.style.cursor = 'text';
});
copy?.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.style.cursor = 'copy';
});
help?.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.style.cursor = 'help';
});
crosshair?.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.style.cursor = 'crosshair';
});

reset?.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.style.cursor = 'auto';
    changeText.style.color = 'black';
    changeText.style.border = 'none';
})
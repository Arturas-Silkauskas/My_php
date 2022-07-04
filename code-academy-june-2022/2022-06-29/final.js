// FIRST TASK

document.querySelector('.first')?.addEventListener('click', function() {
    alert('Hello world!');
});

// SECOND TASK

let inpt = document.querySelector('#input1');
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

// THIRD TASK

let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let btnSave = document.querySelector('#saveBtn');
let checkEmail = document.querySelector('#checkemail');
let checkPhone = document.querySelector('#checkphone');

btnSave?.addEventListener('click', function() {
    if (!email.value.includes('@') && phone.value == "") {
        email.classList.add('is-invalid');
        checkEmail.style.display = 'block';
        phone.classList.add('is-invalid');
        checkPhone.style.display = 'block';
    }else if (!email.value.includes('@')) {
        email.classList.add('is-invalid');
        checkEmail.style.display = 'block';
        phone.classList.remove('is-invalid');
        checkPhone.style.display = 'none';
    }else if (phone.value == "") {
        phone.classList.add('is-invalid');
        checkPhone.style.display = 'block';
        email.classList.remove('is-invalid');
        checkEmail.style.display = 'none';
    }
});

// FOURTH TASK

let blockButton = document.querySelector('#blockBtn');
let unblockButton = document.querySelector('#unblockBtn');
let inputBlockUnblock = document.querySelector('#blockUnblock');

blockButton?.addEventListener('click', function() {
    inputBlockUnblock?.setAttribute('readonly','');
});

unblockButton?.addEventListener('click', function() {
    inputBlockUnblock?.removeAttribute('readonly');
});

// FIFTH TASK

let img = document.querySelector('#imgMonkeys');

img?.addEventListener('mouseenter', function() {
    img.setAttribute('src', 'https://i.imgur.com/PLDVxza.jpg');
});
img?.addEventListener('mouseleave', function() {
    img.setAttribute('src', 'https://i.imgur.com/0DElr0H.jpg');
});

// SIXTH TASK

let reset = document.querySelector('#reset')

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
    changeText.style.color = 'black';
    changeText.style.border = 'none';
    document.body.style.cursor = 'auto';
})
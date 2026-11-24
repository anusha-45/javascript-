function show(){
    alert('Button is clicked!!!')
}
var head=document.getElementById('head1')
head.addEventListener('mouseover',()=>{
    head.style.color='brown'
})
function leave(){
    head.style.color='black'
}
function display(eve){
    console.log(eve.target.value);
}
var text=document.getElementById('text');
function focusn(){
    text.style.backgroundColor='lightblue'
}
var text=document.getElementById('text');
function blurn(){
    text.style.backgroundColor='red'
}
function submitted(){
    alert('the form is submitted');
}
// Regular expression for validating email input
let email = document.getElementById('email');
let error = document.getElementById('error');
let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-z]{2,}$/;

function validate() {
    if (regex.test(email.value.trim())) {
        error.textContent = 'Email is valid';
        error.style.color = 'green';
        return true;
    }

    error.textContent = 'Email is invalid';
    error.style.color = 'red';
    return false;
}

function verify() {
    let number = document.getElementById('num');
    let errmsg = document.getElementById('errmsg');
    
    try {
        let x = Number(number.value);

        if (x < 5) throw 'Number is too low';
        if (x > 10) throw 'Number is too high';
    
    } catch (error) {
        errmsg.textContent = `The error is ${error}`;
    }
}
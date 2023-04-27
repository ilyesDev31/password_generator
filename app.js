
const checkbox = document.querySelectorAll('.checkbox');
const output = document.querySelector('.output p');
const copyIcon = document.querySelector('.output i');

// password customizing vars
const range = document.querySelector('input.radio-length');
const passwordLength = document.querySelector('.leng');
// password bars strength
const bars = document.querySelectorAll('.bars > div');
// create password
let letter = "abcdefghijklmnopqrstuvwxyz";
let letterUpper = letter.toUpperCase();
let number = "0123456789";
let symbole= "@/*-+!:;,$^&é(-è_çà)=";
let length = 0;
let randomPass = "";

// password length
window.addEventListener('DOMContentLoaded', function(){
    passwordLength.innerHTML = range.value;
    length = +range.value;
})
// checkboxes
checkbox.forEach(box =>{
    box.onclick = function(){
        this.parentElement.classList.toggle('active');
    }
});
// password length with range input
range.addEventListener('change', getLength);

function getLength(){
   passwordLength.innerHTML = range.value;
   length = range.value
}
// selecting password char and strength
const button = document.querySelector('button');
const strngt = ["Very Low", "Low","Midium","Strong"]
const state = document.querySelector('.state');

button.addEventListener('click', ()=>{
    generate(length)
})

function generate(length){
    randomPass = "";
    let arr = [];
    let i = 0;

document.querySelectorAll(".list > div").forEach(div=>{
if(div.classList.contains('active')){
    arr.push(true);
}else{
    arr.push(false);
}
});

// check if selected some checkbox
let totalTrue = arr.map(a => a===false ? 0 : 1).reduce((a,b) => a+b);
if(arr.map(a => a===false ? 0 : 1).reduce((a,b) => a+b) == 0){
    alert('please select how you want your password to be');
    return;
}
removeActive(bars);
for(let i =0; i < totalTrue; i++){
    bars[i].classList.add('active');
}
// state of strength
state.innerHTML = strngt[totalTrue-1]
    while(i < length){
        let random = [];
        if(arr[0] === true){
            random.push(letter[Math.floor(Math.random() * letter.length)]);
        } if(arr[1]){
            random.push(letterUpper[Math.floor(Math.random() * letterUpper.length)]);
        } if(arr[2]){
            random.push(number[Math.floor(Math.random() * number.length)]);
        } if(arr[3]){
            random.push(symbole[Math.floor(Math.random() * symbole.length)]);
        }
        i++;
      randomPass += random[Math.floor(Math.random() * random.length)]
    }
    output.innerHTML = randomPass;
}

function removeActive(ele){
    ele.forEach(a =>{
        a.classList.remove('active');
    })
}

copyIcon.addEventListener('click', function(){
navigator.clipboard.writeText(randomPass);
});
copyIcon.addEventListener('mouseenter',show);
copyIcon.addEventListener('mouseleave',hide);

function show(){
    document.querySelector('.output').classList.add('active');
}
function hide(){
    document.querySelector('.output').classList.remove('active');
}
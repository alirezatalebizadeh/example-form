
let btn = document.querySelector('#btn-submit');
let passElem = document.querySelector('#password-elem');

btn.addEventListener('click', (e) => {
    e.preventDefault();


})

passElem.addEventListener('blur', () => {
    let valueElem = passElem.value;
    // if (valueElem.length > 10) {

    // }
    console.log(valueElem.length);
})



















const data = require('./products.json')
console.log(data);

const name = data.name

const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')
const imageInput = document.querySelector('#image')
const fileForm = document.querySelector(".file-form")
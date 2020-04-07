const text = document.getElementById('text');
const textWithoutSpaces = document.getElementById('without-spaces');
const textWithSpaces = document.getElementById('with-spaces');
const textWords = document.getElementById('words');
const textLines = document.getElementById('lines');

text.addEventListener('input', function (event) {
  textWithSpaces.innerText = text.value.trim().length;
});

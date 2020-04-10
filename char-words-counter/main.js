const text = document.getElementById('text');
const textWithoutSpaces = document.getElementById('without-spaces');
const textWithSpaces = document.getElementById('with-spaces');
const textWords = document.getElementById('words');
const textLines = document.getElementById('lines');

function countWords(text) {
  var textWithouSpacesArray = text.trim().split(/\s+/);
  var totalWords = 0;
  var regex = /\w+/;
  textWithouSpacesArray.forEach((element) => {
    if (regex.test(element)) {
      totalWords += 1;
    }
  });
  return totalWords;
}

text.addEventListener('input', function (event) {
  textWithoutSpaces.innerText = text.value.trim().split(' ').join('').length;
  textWithSpaces.innerText = text.value.trim().length;
  textWords.innerText = countWords(text.value);
  textLines.innerText = text.value.trim().split('\n').length;
});

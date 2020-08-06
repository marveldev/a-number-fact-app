const input = document.querySelector('.number-input');

input.addEventListener('input', () => {
  const inputValue = input.value.trim();
  if (inputValue.length >= 1 ) {
    fetch('http://numbersapi.com/'+inputValue)
    .then((response) => {
        return response.text();
    })
    .then ((data) => {
      document.querySelector('.fact-output').innerHTML = data;
    })
  } else {
    document.querySelector('.fact-output').innerHTML ='';
  }
})

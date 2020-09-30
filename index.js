const input = document.querySelector('.number-input');
const dateInput = document.querySelector('#date-input');

input.addEventListener('input', () => {
  const inputValue = input.value.trim();
  if (inputValue.length >= 1 ) {
    fetch('http://numbersapi.com/'+inputValue)
    .then((response) => {
        return response.text();
    })
    .then ((data) => {
      document.getElementById('number-fact').innerHTML = data;
    }) 
    .catch(() => {
      document.getElementById('number-fact').innerHTML = 'failed to fetch data';
    });
  } else {
    document.getElementById('number-fact').innerHTML = '';
  }
})

dateInput.addEventListener('input', () => {
  const dateInputValue = dateInput.value.trim();
  const dateValue = dateInputValue.split('-').join('/');
  const newDateValue = dateValue.slice(5);
  if (dateInputValue.length >= 1 ) {
    fetch('http://numbersapi.com/'+newDateValue)
    .then((response) => {
        return response.text();
    })
    .then ((data) => {
      document.getElementById('date-fact').innerHTML = data;
    })
    .catch(() => {
      document.getElementById('date-fact').innerHTML = 'failed to fetch data';
    })
  } else {
    document.getElementById('date-fact').innerHTML ='';
  }
})

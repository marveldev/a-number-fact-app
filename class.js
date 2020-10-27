class FactBook {
  numberFact() {
    const numberInput = document.querySelector('#numberInput');
    numberInput.addEventListener('input', () => {
      const inputValue = numberInput.value.trim();
      if (inputValue.length >= 1 ) {
        fetch('http://numbersapi.com/'+inputValue)
        .then((response) => {
          return response.text();
        })
        .then ((data) => {
          document.getElementById('numberFact').innerHTML = data;
        }) 
        .catch(() => {
          document.getElementById('numberFact').innerHTML = 'failed to fetch data';
        });
      } else {
        document.getElementById('numberFact').innerHTML = '';
      }
    })
  }

  dateFact() {
    const dateInput = document.querySelector('#dateInput');
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
          document.getElementById('dateFact').innerHTML = data;
        })
        .catch(() => {
          document.getElementById('dateFact').innerHTML = 'failed to fetch data';
        })
      } else {
        document.getElementById('dateFact').innerHTML ='';
      }
    })
  }
}

const fact = new FactBook();
fact.numberFact();
fact.dateFact();

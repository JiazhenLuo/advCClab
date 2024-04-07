fetchData

function fetchData(){

    fetch('https://api.adviceslip.com/advice')
    .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // parses JSON response into native JavaScript objects
  })

  .then(data => {
    console.log(data); // processes the data
    const adviceText = data.slip.advice; // Extracting advice text from the response
    document.getElementById('advice').innerText = adviceText; 
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  })
  .finally(() => {
    console.log('Fetch attempt finished.'); // executes regardless of the Promise's outcome
  });

}

window.addEventListener('load', fetchData);
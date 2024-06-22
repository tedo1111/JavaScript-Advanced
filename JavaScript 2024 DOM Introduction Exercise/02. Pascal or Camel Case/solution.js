function solve() {
  // Get the input values
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;

  // Split the text into words
  const words = text.split(' ');

  let result = '';

  if (namingConvention === 'Camel Case') {
    result = words.map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  } else if (namingConvention === 'Pascal Case') {
    result = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
  } else {
    result = 'Error!';
  }

  // Set the result as the HTML of the span element
  document.getElementById('result').innerHTML = result;
}
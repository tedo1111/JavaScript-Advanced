function solve() {
  // Get the input text from the textarea
  const inputText = document.getElementById('input').value;

  // Split the input text into sentences based on the '.' delimiter
  const sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0);

  // Clear the output div
  document.getElementById('output').innerHTML = '';

  // Loop through the sentences and group them into paragraphs
  for (let i = 0; i < sentences.length; i += 3) {
    // Get the current 3 sentences or less if it's the last group
    const paragraphSentences = sentences.slice(i, i + 3);

    // Create a new paragraph element
    const paragraph = document.createElement('p');

    // Add the sentences to the paragraph
    paragraph.textContent = paragraphSentences.join('. ') + '.';

    // Append the paragraph to the output div
    document.getElementById('output').appendChild(paragraph);
  }
}
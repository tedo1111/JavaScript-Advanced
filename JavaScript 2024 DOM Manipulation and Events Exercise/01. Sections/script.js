function create(words) {
   const contentDiv = document.getElementById('content');

   words.forEach(word => {
      const div = document.createElement('div');

      const paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none'; 

      div.addEventListener('click', () => {
         paragraph.style.display = paragraph.style.display === 'none' ? 'block' : 'none';
      });

      div.appendChild(paragraph);

      contentDiv.appendChild(div);
   });
}
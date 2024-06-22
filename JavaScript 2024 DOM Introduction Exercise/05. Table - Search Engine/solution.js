function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchValue = document.getElementById('searchField').value.toLowerCase();

      const rows = document.querySelectorAll('tbody tr');

      rows.forEach(row => row.classList.remove('select'));

      rows.forEach(row => {
         Array.from(row.cells).forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchValue)) {
               row.classList.add('select');
            }
         });
      });

      document.getElementById('searchField').value = '';
   }
}
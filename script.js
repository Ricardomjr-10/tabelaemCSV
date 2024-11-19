const table = document.querySelector('table');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    const rows = table.querySelectorAll('tr');
    let linhas = ''
    rows.forEach(row => {
        linhas += row.innerText + '\n';
    })
    button.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(linhas));
    button.setAttribute('download', 'tabela.csv');
  
 
})


const table = document.querySelector('table');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  
    button.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(linhas));
    button.setAttribute('download', 'tabela.csv');
  
 
})


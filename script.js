const table = document.querySelector('table');
const button = document.querySelector('.button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    let csv = ''

    for(let i = 0; i < table.rows.length; i++){
        let rows = ""

        for (let j = 0; j < table.rows[i].cells.length; j++){   
            rows += '"' + table.rows[i].cells[j].innerText.replace(/"/g, '""') + '",'
    }

    csv += rows.slice(0, -1) + '\n'
}
  
    button.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    button.setAttribute('download', 'tabela.csv');
  
 console.log(csv)
})


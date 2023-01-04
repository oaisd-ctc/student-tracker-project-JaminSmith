fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    let table = `<table>
                  <tr><th>Name</th><th>Email</th><th>Phone</th></tr>`;
    data.forEach(item => {
      table += `<tr>
                  <td>${item.name}</td>
                  <td>${item.email}</td>
                  <td>${item.phone}</td>
                </tr>`;
    });
    table += '</table>';
    document.querySelector('#table-container').innerHTML = table;
    console.log(table); 
  });
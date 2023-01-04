fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    let table = `<table>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Phone</th>
                    <th>Date</th>
                    <th>Join Time</th>
                    <th>Logout Time</th>
                    <th>Details</th>
                  </tr>`;
    data.forEach(item => {
      
      table += `<tr class="g">
                  <td>${item.notInSampleData}</td>
                  <td>${item.name}</td>
                  <td>${item.notInSampleData}</td>
                  <td>${item.phone}</td>
                  <td>${item.notInSampleData}</td>
                  <td>${item.notInSampleData}</td>
                  <td>${item.notInSampleData}</td>
                  <td><button>View</button></td>
                </tr>`;
    });
    table += '</table>';
    document.querySelector('#table-container').innerHTML = table;
    
  });
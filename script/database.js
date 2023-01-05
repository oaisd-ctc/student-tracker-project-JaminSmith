fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    let table = `<table>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Class</th>
                    <th>Phone</th>
                    <th>Date</th>
                    <th>Time In</th>
                    <th>Time Out</th>
                    <th>Number of punchouts</th>
                    <th>Details</th>
                  </tr>`;
    data.forEach(item => {
      
      table += `<tr class="g">
                  <td>${item.notInSampleData}</td>
                  <td>${item.name}</td>
                  <td>${item.name}</td>
                  <td>${item.notInSampleData}</td>
                  <td>${item.phone}</td>
                  <td>${item.notInSampleData}</td>
                  <td>${item.notInSampleData}</td>
                  <td>${item.notInSampleData}</td>
                  <td>${item.notInSampleData}</td>
                  <td><button>View</button></td>
                </tr>`;
    });
    table += '</table>';
    document.querySelector('#table-container').innerHTML = table;
    
  });
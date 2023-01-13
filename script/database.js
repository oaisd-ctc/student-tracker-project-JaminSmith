fetch('https://student-tracker-web-api-1.azurewebsites.net/Student/StudentInfo',)
  .then(response => response.json())
  .then(data => {
    let table = `<table>
                  <tr>
                    <th>ID</th>
                    <th>FirstName</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Sending School</th>
                    <th>Time In</th>
                    <th>Time Out</th>
                    <th>Number of punchouts</th>
                    <th>Details</th>
                  </tr>`;
    data.forEach(item => {
      
      table += `<tr class="g">
                  <td>${item.studentId}</td>
                  <td>${item.firstName}</td>
                  <td>${item.lastName}</td>
                  <td>${item.addressLine1}</td>
                  <td>${item.SendingSchool}</td>
                  <td>${item.timeOut}</td>
                  <td>${item.timeIn}</td>
                  <td>${item.notInSampleData}</td>
                  <td><button>View</button></td>
                </tr>`;
    });
    table += '</table>';
    document.querySelector('#table-container').innerHTML = table;
  });
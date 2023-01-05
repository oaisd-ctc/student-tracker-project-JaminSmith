fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    // Filter the data to only include rows where the 'FirstName' column is 'Clementine Bauch'
    const filteredData = data.filter(row => row.FirstName === 'Clementine Bauch');

    // Select the table element
    const table = document.querySelector('#table-container');

    // Select all of the rows in the table (excluding the header row)
    const rows = table.querySelectorAll('tbody tr');

    // Loop through the rows and remove them from the table
    rows.forEach(row => row.remove());

    // Loop through the filtered data
    filteredData.forEach(rowData => {
      // Create a new row element
      const row = document.createElement('tr');

      // Loop through the columns in the row data
      for (const key in rowData) {
        // Create a new cell element
        const cell = document.createElement('td');

        // Set the cell's text to the value in the row data
        cell.textContent = rowData[key];

        // Append the cell to the row
        row.appendChild(cell);
      }

      // Append the row to the table
      table.appendChild(row);
    });
  });
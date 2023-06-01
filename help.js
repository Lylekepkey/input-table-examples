
  function addRow() {
    var name = document.getElementById("nameInput").value;
    var age = document.getElementById("ageInput").value;

    // Create a new table row
    var newRow = document.createElement("tr");

    // Create and append table data 
    var nameCell = document.createElement("td");
    nameCell.innerHTML = name;
    newRow.appendChild(nameCell);

    var ageCell = document.createElement("td");
    ageCell.innerHTML = age;
    newRow.appendChild(ageCell);

    // Append the new row to the table body
    var tableBody = document.getElementById("myTable").getElementsByTagName("tbody")[0];
    tableBody.appendChild(newRow);

    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
  }


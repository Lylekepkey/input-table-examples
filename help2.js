
const nameInput = document.getElementById('nameInput');
const surnameInput = document.getElementById('surnameInput');
const ageInput = document.getElementById('ageInput');
const submitClearButton = document.getElementById('submit/clear-Button');
const infoTable = document.getElementById('infoTable').getElementsByTagName('tbody')[0];

submitClearButton.addEventListener('click', function() {
    
  const name = nameInput.value;
  const surname = surnameInput.value;
  const age = ageInput.value;

  // Creating a new row
  const newRow = document.createElement('tr');

  // Creating a table for each data item
  const nameCell = document.createElement('td');
  nameCell.textContent = name;
  newRow.appendChild(nameCell);

  const surnameCell = document.createElement('td');
  surnameCell.textContent = surname;
  newRow.appendChild(surnameCell);

  const ageCell = document.createElement('td');
  ageCell.textContent = age;
  newRow.appendChild(ageCell);

  // Append the new row to the table body
  infoTable.appendChild(newRow);

  nameInput.value = '';
  surnameInput.value = '';
  ageInput.value = '';
});

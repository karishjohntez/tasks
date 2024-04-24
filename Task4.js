const table = document.getElementById("rowcolumns");
const btn = document.getElementById("button");

// Function to generate random numbers for a row
function generateRandomNumbers(columns) {
  const rowRandomNumbers = [];
  console.log(columns);
  for (let j = 0; j < columns; j++) {
    const randomNumber = Math.floor(Math.random() * 100);
    rowRandomNumbers.push(randomNumber);
  }
  return rowRandomNumbers;
}

// Function to validate rows and columns
function validateInput(rows, columns) {
  if (isNaN(rows) || rows <= 0 || isNaN(columns) || columns <= 0) {
    alert("Please enter valid numbers of rows and columns");
    return false;
  }
  return true;
}

// Function to find the largest number on the diagonal
function findLargestDiagonal(rows, allRandomNumbers) {
  let largest = allRandomNumbers[0][rows - 1];
  for (let i = 0; i < rows; i++) {
    for (let j = rows - 1 - i; j < allRandomNumbers[i].length - i; j++) {
      if (largest < allRandomNumbers[i][j]) {
        largest = allRandomNumbers[i][j];
      }
    }
  }
  return largest;
}

// Function to generate table rows and columns
function generateTable(rows, columns, allRandomNumbers) {
  table.innerHTML = ''; // Clear the table content
  for (let i = 0; i < rows; i++) {
    const newRow = table.insertRow();
    for (let j = 0; j < columns; j++) {
      const cell = newRow.insertCell();
      const randomNumber = allRandomNumbers[i][j];
      cell.innerHTML = `<input type='number' value=${randomNumber}>`;
    }
  }
}

// Event listener for button click
btn.addEventListener("click", () => {
  const columns = parseFloat(document.getElementById("columns").value);
  const rows = parseFloat(document.getElementById("rows").value);

  if (!validateInput(rows, columns)) return;

  const allRandomNumbers = [];

  for (let i = 0; i < rows; i++) {
    const rowRandomNumbers = generateRandomNumbers(columns);
    allRandomNumbers.push(rowRandomNumbers);
  }

  generateTable(rows, columns, allRandomNumbers);

  const largest = findLargestDiagonal(rows, allRandomNumbers);
  console.log(largest);

  document.getElementById("largest").value = largest;
});


// Function to reset table
document.getElementById("resetTable").addEventListener("click", resetTable);

function resetTable() {
  table.innerHTML = ""; // Clear the table content
  
  document.getElementById("largest").value = "";
}

        
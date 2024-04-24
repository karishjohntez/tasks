const table = document.getElementById("rowcolumns");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
  const columns = parseFloat(document.getElementById("columns").value);
  const rows = parseFloat(document.getElementById("rows").value);

  table.innerHTML = ''; // Clear the table content

  // Validate rows and columns
  if (isNaN(rows) || rows <= 0 || isNaN(columns) || columns <= 0) {
    alert("Please enter valid numbers of rows and columns");
    return;
  }

  const allRandomNumbers = []; // Array to store all random numbers

  // Generate all random numbers for rows and columns
  for (let i = 0; i < rows; i++) {
    const rowRandomNumbers = []; // Array to store random numbers for the current row
    for (let j = 0; j < columns; j++) {
      const randomNumber = Math.floor(Math.random() * 100);
      rowRandomNumbers.push(randomNumber);
    }
    allRandomNumbers.push(rowRandomNumbers);
    
  }
  console.log((allRandomNumbers));

  // Add rows and columns to the table using generated random numbers
  for (let i = 0; i < rows; i++) {
    const newRow = table.insertRow();
    for (let j = 0; j < columns; j++) {
      const cell = newRow.insertCell();
      const randomNumber = allRandomNumbers[i][j];
      cell.innerHTML = `<input type='number' value=${randomNumber}>`;
    }
  }

  // Finding the largest number on the diagonal part
  let largest=allRandomNumbers[0][rows-1];
  //console.log(largest);
  for(let i =0; i<rows;i++){
    for(let j=rows-1-i; j<allRandomNumbers[i].length - i; j++){
      //console.log(allRandomNumbers[i][j]);
      if(largest<allRandomNumbers[i][j]){
        largest=allRandomNumbers[i][j];
      }
      else{
        largest=largest;
      }
    }
  }
  console.log(largest);

  
  document.getElementById("largest").value = largest;



});

// Function to reset table
document.getElementById("resetTable").addEventListener("click", resetTable);

function resetTable() {
  table.innerHTML = ""; // Clear the table content
  document.getElementById("rows").value = "";
  document.getElementById("columns").value = "";
  document.getElementById("largest").value = "";
}

        
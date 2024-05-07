function decimalToBinary(decimal) { 
    let remainders = [];
    for(i=decimal; i>0; i=Math.floor(i/2)){
        let remainder= i%2;
        remainders.push(remainder)
    }
    for(let i=remainders.length; i<8; i++){
        remainders.push(0)
    }
    remainders.reverse() 
   // console.log(remainders);
    remainders = remainders.join(' ')
    return remainders;
}

function decimalToOctal(toOctal) {
    let octalArray = [];
    for(let i=toOctal; i>0; i=Math.floor(i/8)){
        octalArray.push(i%8)
        octalArray.reverse()
    }
    if(octalArray.length<1){
        octalArray.push(0)
    }
    octalArray=octalArray.join('')
    return octalArray
}

function decimalToHexa(toHexa) {
    if (toHexa==0) {
        return '0';
    }
    let hexaArray=[];
    for(let i =toHexa; i>0; i=Math.floor(i/16)){
        if(i%16==10){
            hexaArray.push('A')
        }
        else if((i%16==11)){
            hexaArray.push('B')
        }
        else if((i%16==12)){
            hexaArray.push('C')
        }
        else if((i%16==13)){
            hexaArray.push('D')
        }
        else if((i%16==14)){
            hexaArray.push('E')
        }
        else if((i%16==15)){
            hexaArray.push('F')
        }
        else{
            hexaArray.push(i%16)
        }
    }
    hexaArray.reverse()  
    hexaArray=hexaArray.join('')
    return hexaArray
}

function generateTableWithItems(start, end) {
    const allSystems = [];
    const table = document.getElementById("table");
    table.innerHTML = ""; 

    for (let i = start; i < end; i++) {
        const system = [
            i,
            decimalToBinary(i),
            decimalToOctal(i),
            decimalToHexa(i)
        ];
        allSystems.push(system);
       

        let tr = document.createElement('tr');
        for (let j = 0; j < system.length; j++) {
            let td = document.createElement('td');
            let tn = document.createTextNode(system[j]);
            td.appendChild(tn);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    console.log(allSystems);
    return allSystems;
}

let currentPage = 0;
const pageSize = 25; 
let allSystems = generateTableWithItems(currentPage * pageSize, 
(currentPage + 1) * pageSize);

function nextButton() {
    if ((currentPage + 1) * pageSize < 128) {
        currentPage++;
        allSystems = generateTableWithItems(currentPage * pageSize, 
        (currentPage + 1) * pageSize);
       
    }
} //console.log(allSystems);
function previousButton() {
    if (currentPage > 0) {
        currentPage--;
        allSystems = generateTableWithItems(currentPage * pageSize, 
        (currentPage + 1) * pageSize);
    }
}
const Previous = document.getElementById("Previous");
const next = document.getElementById("Next");

Previous.addEventListener("click", previousButton);
next.addEventListener("click", nextButton);

    
    
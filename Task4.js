
function calculateOrder() {

  const px = parseFloat(document.getElementById("x-coordinate").value);
  const py = parseFloat(document.getElementById("y-coordinate").value);
  const pz = parseFloat(document.getElementById("z-coordinate").value);

 
  const pointP = { x: px, y: py, z: pz };

  
  const points_A = [
      { x: 24, y: 9, z: 6 },
      { x: 20, y: 38, z: 35 },
      { x: 16, y: 13, z: 56 },
      { x: 37, y: 32, z: 26 },
      { x: 21, y: 28, z: 15 },
      { x: 17, y: 12, z: 23 },
      { x: 40, y: 30, z: 10 },
      { x: 25, y: 17, Z: 32},
      { x: 2,  y: 9, z: 4 },
      { x: 8, y: 8, z: 5 },
      { x: 1, y: 1, z: 5 },
      { x: 7, y: 2, z: 6 },
      { x: 2, y: 8, z: 5 },
      { x: 7, y: 1, z: 3 },
      { x: 0, y: 3, z: 10 },
      ];

  
  const output = points_A.map(point => {
      const distance = calculateDistance(pointP, point);
      const angle = calculateAngle(pointP, point);
      return { distance, angle, point };
  });

  output.sort((a, b) => {
      if (a.distance !== b.distance) {
          return a.distance - b.distance;
      } else {
          return a.angle - b.angle;
      }
  });

  displayResults(output);
}

function calculateDistance(p1, p2) {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2);
}

function calculateAngle(p1, p2) {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
}

function displayResults(output) {
    const resultsPoint = document.getElementById("resultspoint");
    resultsPoint.innerHTML = "";
  
    let Content = ""; 
  
    output.forEach(output => {
      const distance = output.distance.toFixed(2);
      const angle = output.angle.toFixed(2);
      
      
      Content += `<tr><td>${distance}</td><td>${angle}</td></tr>`;
    });
  
    
    resultsPoint.innerHTML = Content;
  }
  

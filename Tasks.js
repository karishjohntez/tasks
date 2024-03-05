
function calculateDistance(x, y) {
    return Math.sqrt(x * x + y * y);
}


document.getElementById("coordinates").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var x1 = parseFloat(document.getElementById("x1").value);
    var y1 = parseFloat(document.getElementById("y1").value);
    var x2 = parseFloat(document.getElementById("x2").value);
    var y2 = parseFloat(document.getElementById("y2").value);
    var x3 = parseFloat(document.getElementById("x3").value);
    var y3 = parseFloat(document.getElementById("y3").value);
    var x4 = parseFloat(document.getElementById("x4").value);
    var y4 = parseFloat(document.getElementById("y4").value);

    var points = [
        { name: 'A', x: x1, y: y1 },
        { name: 'B', x: x2, y: y2 },
        { name: 'C', x: x3, y: y3 },
        { name: 'D', x: x4, y: y4 }
    ];

    points.forEach(point => {
        point.distance = calculateDistance(point.x, point.y);
    });

    
    points.sort((a, b) => b.distance - a.distance);

    
    var tableBody = document.getElementById("pointsBody");
    tableBody.innerHTML = "";
    points.forEach(point => {
        var row = "<tr><td>" + point.name + "</td><td>" + point.x + "</td><td>" + point.y + "</td><td>" + point.distance.toFixed(2) + "</td></tr>";
        tableBody.innerHTML += row;
    });
});


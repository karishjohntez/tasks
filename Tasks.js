
function calculateDistance(x, y) {
    return Math.sqrt(x * x + y * y);
}


document.getElementById("pointForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    var xValues = [];
    var yValues = [];
    for (var i = 1; i <= 4; i++) {
        xValues.push(parseFloat(document.getElementById("x" + i).value));
        yValues.push(parseFloat(document.getElementById("y" + i).value));
    }

    
    var points = [];
    for (var i = 0; i < 4; i++) {
        var distance = calculateDistance(xValues[i], yValues[i]);
        points.push({ name: String.fromCharCode(65 + i), x: xValues[i], y: yValues[i], distance: distance });
    }

    
    for (var i = 0; i < points.length - 1; i++) {
        for (var j = 0; j < points.length - i - 1; j++) {
            if (points[j].distance < points[j + 1].distance) {
             
                var temp = points[j];
                points[j] = points[j + 1];
                points[j + 1] = temp;
            }
        }
    }

    
    var tableBody = document.getElementById("pointsBody");
    tableBody.innerHTML = "";
    for (var i = 0; i < points.length; i++) {
        var row = "<tr><td>" + points[i].name + "</td><td>" + points[i].x + "</td><td>" + points[i].y + "</td><td>" + points[i].distance.toFixed(2) + "</td></tr>";
        tableBody.innerHTML += row;
    }
});

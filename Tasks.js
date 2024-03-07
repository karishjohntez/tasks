

        
        function calculateDistance(x, y) {
            return Math.sqrt(x * x + y * y);
        }

        
        document.getElementById("pointForm").addEventListener("submit", function(event) 
        {
            event.preventDefault(); 

            
            var x1 = parseFloat(document.getElementById("x1").value);
            var y1 = parseFloat(document.getElementById("y1").value);
            var x2 = parseFloat(document.getElementById("x2").value);
            var y2 = parseFloat(document.getElementById("y2").value);
            var x3 = parseFloat(document.getElementById("x3").value);
            var y3 = parseFloat(document.getElementById("y3").value);
            var x4 = parseFloat(document.getElementById("x4").value);
            var y4 = parseFloat(document.getElementById("y4").value);

            
            var distance1 = calculateDistance(x1, y1);
            var distance2 = calculateDistance(x2, y2);
            var distance3 = calculateDistance(x3, y3);
            var distance4 = calculateDistance(x4, y4);

            
            var points = [];
            if (distance1 >= distance2 && distance1 >= distance3 && distance1 >= distance4) {
                points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                if (distance2 >= distance3 && distance2 >= distance4) {
                    points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                    if (distance3 >= distance4) {
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                    } else {
                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                    }
                } else if (distance3 >= distance2 && distance3 >= distance4) {
                    points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                    if (distance2 >= distance4) {
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                    } else {
                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                    }
                } else {
                    points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                    if (distance2 >= distance3) {
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                    } else {
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                    }
                }
            } else if (distance2 >= distance1 && distance2 >= distance3 && distance2 >= distance4) {
                points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                if (distance1 >= distance3 && distance1 >= distance4) {
                    points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                    if (distance3 >= distance4) {
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                    } else {                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                    }
                } else if (distance3 >= distance1 && distance3 >= distance4) {
                    points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                    if (distance1 >= distance4) {
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                    } else {
                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                    }
                } else {
                    points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                    if (distance1 >= distance3) {
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                    } else {
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                    }
                }
            } else if (distance3 >= distance1 && distance3 >= distance2 && distance3 >= distance4) {
                points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                if (distance1 >= distance2 && distance1 >= distance4) {
                    points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                    if (distance2 >= distance4) {
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                    } else {
                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                    }
                } else if (distance2 >= distance1 && distance2 >= distance4) {
                    points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                    if (distance1 >= distance4) {
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                    } else {
                        points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                    }
                } else {
                    points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                    if (distance1 >= distance2) {
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                    } else {
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                    }
                }
            } else {
                points.push({ name: 'D', x: x4, y: y4, distance: distance4 });
                if (distance1 >= distance2 && distance1 >= distance3) {
                    points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                    if (distance2 >= distance3) {
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                    } else {
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                    }
                } else if (distance2 >= distance1 && distance2 >= distance3) {
                    points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                    if (distance1 >= distance3) {
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                    } else {
                        points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                    }
                } else {
                    points.push({ name: 'C', x: x3, y: y3, distance: distance3 });
                    if (distance1 >= distance2) {
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                    } else {
                        points.push({ name: 'B', x: x2, y: y2, distance: distance2 });
                        points.push({ name: 'A', x: x1, y: y1, distance: distance1 });
                    }
                }
            }

        
            var tableBody = document.getElementById("pointsBody");
            tableBody.innerHTML = "";
            points.forEach(function(point)
            {
                var row = "<tr><td>" + point.name + "</td><td>" + point.x + "</td><td>" + point.y + "</td><td>" + point.distance.toFixed(2) + "</td></tr>";
                tableBody.innerHTML += row;
            });
        });
    

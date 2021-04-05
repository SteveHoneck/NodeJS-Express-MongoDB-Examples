const rect = { //an object named rec with 2 methods
    perimeter: (x, y) => 2 * (x + y), //The first method is "perimeter"
    area: (x, y) => x * y // The second method is "area", made into an arrow function
};

function solveRect(l, w) { //A function we created to make use of the "rect" object.  Pass in the values "l" and "w"
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`); //log the values of "l" and "w" to the console using template literals (backticks, not quote marks)

    if (l <= 0 || w <= 0) { //error checking, values of 0 or less are not valid. If either conditions are true, console log the error message
        console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
    } else { //Console log the area and perimeter of the angle using the methods defined on the "rect" object (via "rect.area", "rect.perimeter") passing in the "l" and "w" arguments
        console.log(`Area of rectangle: ${rect.area(l, w)}`);
        console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
    }
}

//Call the function multiple times for testing
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
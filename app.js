const rect = require('./rectangle'); //"require" function from Node. "require" function will look for a file named "rectangle.js" in the same folder that this file is in and it will take the exports from that file and set them as properties, or methods, of this "rect" variable object.

//Order of operations for code:  Code will call the function in the rectangle module which will chek if the given length or width is 0 or less, then if so it will run the callback with an error object right away and a console.log with the error message will appear. If the numbers are valid, then the module will run the callback after a delay of 2 seconds, but it won't get blocked there for 2 seconds, the Node event loop will continue and print out the "This statement is logged after...." console.log. Then once the 2 second timer is up, Node will go to the timer phase of the event loop and will execute the callback that was passed into the timer fuction. The callback will solve for and console log the area and perimeter.

function solveRect(l, w) { //A function we created to make use of the "rect" function.  Pass in the values "l" and "w"
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`); //log the values of "l" and "w" to the console using template literals (backticks, not quote marks)

    //"rect" is now the function in the "rectangle.js" file. It requires 3 arguments: two positive numbers and a callback function. The two numbers will be taken from what is passed in to the "solveRect" function calls (and reassigned as "x" and "y" in "rectangle.js"). The callback function is written in-line in the parameter list using an arrow function (it's not executed in the parameter list, it's only being defined here) It's executed within the "rectangle.js" file.
    rect(l, w, (err, rectangle) => {
        if (err) { //check if the callback funciton is being called with an error object
            console.log('ERROR:', err.message); // if so, log the error message
        } else { //Console log the area and perimeter of the rectangle using the methods defined on the "rect" object (via "rect.area", "rect.perimeter") passing in the "l" and "w" arguments
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`); //Object that owns the ".area" and ".perimeter" methods is being passed into this callback function with the name "rectangle" as definedin the paramter list. Method calls have empty paramter lists because the deimensions are now defined in rectangle.js.
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the call to rect()');
}

//Call the function multiple times for testing
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
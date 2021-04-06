//Updated to use callbacks and handle errors

module.exports = (x, y, callback) => { //Assigning a function as the entire value of the export (instead of two separate methods of the export). Therefor, Cant use shorthand "exports" must use "module.exports". Argument "callback" is a function that will be passed in when this module is called (it will be defined elsewhere, not in-line in the argument list).
    if (x <= 0 || y <= 0) { //Implement error handling. The error callback pattern here is common in Node applications. Check if the arguments are invalid, if they are, handle the Error inside the "if" block.
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`)); //"callback" function will be written in app.js. Follows the Node error callback pattern: it expects an error object as its first argument. "Error" object is a global object in JS that contains information about an error. "new" keyword followed by "Error" creates a new error object with the message. As soon as the error condition is detected, the callback function will run.
    } else { //If arguments are valid, the "callback" function will not run right away, "setTimeout" will simulate a situation where an asynchronous operation is happening (database is being read).
        setTimeout(() => //As first argument for the "setTimeout" function, will pass an arrow function that contains the callback. 
            callback(null, { //Because an error object is expected for first argument (as is the convention) will pass "null" since there is no error if program has made it this far.
                //"callback" function expects a second argument, which is passed as an object in this case that contains two methods
                perimeter: () => 2 * (x + y), //Don't need "x" and "y" passed in as arguments because of "closures" concept. The outer function variables are available to these inner functions already.
                area: () => x * y
            }),
            2000
        );
    }
};
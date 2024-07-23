// Declare Kelvin as a constant value;
var kelvin = 0;

// Convert Kelvin to celsius by subtracting 273
var celsius = kelvin - 273;

//Use a variable type that allows for changing its value, as we will round the number saved to fahrenheit in the next step
var fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit}° degrees Fahrenheit.`);

// Convert celsius to newton
var newton = celsius * (33/100);

//Round down newton temp
newton = Math.floor(newton);

console.log(`The temperature is ${newton} on the newton scale.`);

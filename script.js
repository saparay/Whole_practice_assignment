//variables, operators, conditional statements, loops
//declaring a variable and assigning a value as 4
var x = 4;
//creating a loop to multiply the x with 2 until it is equal to 16
for (var i = 0; i < x; i++) {
    x = x * 2;
    if (x == 16) {
        //once it is equal to 16 break through the loop
        break;
    } else {
        //otherwise continue
        continue;
    }
}
//after all the oprations print the final value once
console.log(x);
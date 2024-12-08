const display = document.getElementById("display");
var x 
var a
var b
var y = 1
var z

function gcd() {
    var R;
    var x = b
    var y = a
    while ((a % b) > 0)  {
        console.log(`your first value is ${a}`);
        console.log(`your second value is ${b}`);
        R = a % b;
        console.log(`the remainder is ${R}`);
        a = b;
        b = R;
    }
    return z = b;
};

function appendToDisplay(input){
    display.value += input;
   
}

function clearscreen(input){
    display.value = '';
    y =1
    document.getElementById("p1").innerHTML = "enter first value"
}

function calculate(){
    try{
        display.value = eval(display.value)

    }
    catch(error){
        display.value = "Error";
    }
    if (y === 1){
        y = 2
        document.getElementById("p1").innerHTML = "enter second value";
        a = display.value;
        display.value = "";
        console.log(`this is a = ${a}`)
    }
    else if (y === 2){
        y = 3
        document.getElementById("p1").innerHTML = "The GCD is";
        b = display.value;
        console.log(`this is a = ${b}`)
        gcd();
        display.value = z
        
    }
    else if (y === 3){
        y = 4;
        document.getElementById("p1").innerHTML = "The GCD is";
        display.value = "Error press Re/C";
    }

}


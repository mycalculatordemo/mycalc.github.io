const display = document.getElementById("display");
var x 
var a
var b
var y = 1
var z


function appendToDisplay(input){
    display.value += input;
   
}

function clearscreen(input){
    display.value = '';

}

function calculate(){
    try{
        display.value = eval(display.value)

    }
    catch(error){
        display.value = "Error";
    }

}


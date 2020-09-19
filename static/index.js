/**
 * Add a hello world right at the top to make sure the Javascript is loaded
 */
console.log("Hello world");

/**
 * Success is called when the answer is returned from the server. This
 * updates the answer text to the answer returned by the server
 */
function success(data) {
    console.log("success=" + data);
    $("#answer").text("Answer=" + data);
}

/**
 * Given the op and the numbers, send the operands to the server and
 * set up the success function to receive the answer once the server has
 * calculated it.
 */
function send(op, num1, num2=0) {
    let url = "/calculate/op/" + op + "/num1/" + num1 + "/num2/" + num2;
    console.log(url);
    $.get(url, success);
}

/**
 * Handle the user clicking on the Not button
 */
function doNot() {
    // send a NOT command tot he server with the first number
    let num1 = $("#num1").val();
    if (num1 === "") {
        alert("ENTER NUMBERS IN THE FIRST INPUT FIELDS!!!")
        return;
    }
    
    let found = false;
    let digit = num1.split("");
    console.log(digit);
    for (let i = 0; i < digit.length; i++) {
        if ((digit[i] != "0") && (digit[i] != "1")) {
            console.log("im in here");
            found = true
        }
    }
    
    if (found === true) {
        found = false;
       alert("ENTER ONLY 1's AND 0's");
       return;
    }
    
    send("NOT", num1); 
}

/**
 * Handle the user clicking the OR button
 */
function doOr() {
    // probably should get two numbers and do Or
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();
    if (num1 === "" || num2 === "") {
        alert("ENTER NUMBERS IN BOTH INPUT FIELDS!!!")
        return;
    }
    
    if (num1.length != num2.length) {
        alert("YOUR NUMBERS ARE NOT EQUAL LENGTHS!!!");
        return;
    }
    
   let found = false;
    let digit1 = num1.split("");
    let digit2 = num2.split("");
    console.log(digit1);
    console.log(digit2);
    for (let i = 0; i < digit1.length; i++) {
        if (((digit1[i] != "0") && (digit1[i] != "1")) || ((digit2[i] != "0") && (digit2[i] != "1"))) {
            console.log("im in here");
            found = true
        }
    }
    
    if (found === true) {
        found = false;
       alert("ENTER ONLY 1's AND 0's");
       return;
    }
    
    send("OR", num1, num2);
}

/**
 * Handle the user clicking the AND button
 */
function doAnd() {
    // probably should get two numbers and do And
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();
    if (num1 === "" || num2 === "") {
        alert("ENTER NUMBERS IN BOTH INPUT FIELDS!!!")
        return;
    }
    if (num1.length != num2.length) {
        alert("YOUR NUMBERS ARE NOT EQUAL LENGTHS!!!");
        return;
    }
    
    let found = false;
    let digit1 = num1.split("");
    let digit2 = num2.split("");
    console.log(digit1);
    console.log(digit2);
    for (let i = 0; i < digit1.length; i++) {
        if (((digit1[i] != "0") && (digit1[i] != "1")) || ((digit2[i] != "0") && (digit2[i] != "1"))) {
            console.log("im in here");
            found = true
        }
    }
    
    if (found === true) {
        found = false;
       alert("ENTER ONLY 1's AND 0's");
       return;
    }
    
    send("AND", num1, num2);
}

/**
 * This function is called on document ready to set up the handlers
 * that are called when each button is clicked
 */
function setup() {
    $("#not").click(doNot);
    $("#or").click(doOr);
    $("#and").click(doAnd);
}

function notCheck (num) {
    
}

/**
 * When the document has fully loaded and is ready, call the setup function
 */
$(document).ready(setup);

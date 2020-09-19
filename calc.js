/**
 * Node.js program for a logical calculator.
 *
 * When called with "/", it returns the index.html static page.
 * When called with "/calculate/op/:op/num1/:num1/num2/:num2", it returns
 * the answer of the logical calculation
 */

// Set up some global constants for the program
const express = require('express');
const app = express();
const port = 80;

/**
 * The index function redirects the user to request "index.html"
 */
function index(req, res) {
    res.redirect('/index.html');
}

/**
 * Calculate the logical answer and send it back to the user
 */
function calculate(req, res) {
    let op = req.params.op;
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    console.log(req.params);
    let answer = "";
    let number = 0;
    console.log(req.params.op);
    if (op == "NOT") {
        console.log("Im in the not");
        let bits = num1.split("");
        for (let i = 0; i < bits.length; i++) {
            if (bits[i] == '1') {
                bits[i] = '0';
            } else {
                bits[i] = '1';
            }
        }
        let comb = bits.join("");
        answer = comb;
        console.log(answer);
    } else if (op == "OR") {
        console.log("Im in or");
        let bits1 = num1.split("");
        let bits2 = num2.split("");
        for (let i = 0; i < bits1.length; i++) {
            answer += bits1[i] | bits2[i];
        }
    } else if (op == "AND"){
        console.log("Im in and");
        let bits1 = num1.split("");
        let bits2 = num2.split("");
        for (let i = 0; i < bits1.length; i++) {
            answer += bits1[i] & bits2[i];
        }
    }

    // Send the answer back to the user
    res.send(answer);
}

// Set up the handlers for Node.js
// -------------------------------

// static files live in "static" folder
app.use(express.static("static"));

// Calling "/" invokes the index function
app.get('/', index);

// Calling "/calculate/..." invokes the calculate function
app.get('/calculate/op/:op/num1/:num1/num2/:num2', calculate);

// Start Express listening at the given port
app.listen(port, function() {
    console.log("App running at port=" + port);
});


var user = require('./spec');
var computers = user.computer

  var  y = 1
   

var orderobject = function ordercomputer(ordernumber) {
   console.log("customer order:",ordernumber);


    delivercomputer(function () {
        console.log("delivered "+ y  +"computer:",ordernumber );

    });
}
function delivercomputer(callback) {
    setTimeout(callback, 5000);
}

orderobject(computers[0]);
orderobject(computers[1]);
orderobject(computers[2]);




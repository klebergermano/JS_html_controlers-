
var start_number = document.querySelector('#start_number');
var end_number = document.querySelector('#end_number');
var int_number = document.querySelector('#int_number');

var res = document.querySelector('#res');



function countNumber() {

    var start = Number(start_number.value);
    var end = Number(end_number.value);
    var interval = Number(int_number.value);

    res.innerHTML = '';
    var c = 0;
    for (var i = start; i <= end; i++) {     
       

           if (c == interval || i == start) {
               res.innerHTML += '<p>' + i + '</p>';
               c = 0;
           } else {
               c++;         
           }
         

    }




}




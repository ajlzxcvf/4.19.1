// Yue Binsong 
//The user can enter a number in the text box and click the button to get the answer. If the input is not a number, the result will display NaN
 function myFunction(){
    var x = document.getElementById("myText").value;
    var y = document.getElementById("myText1").value;
    let z = parseFloat(x) + parseFloat(y);
    document.getElementById("demo").innerHTML = "the value of z is :" + z;
    }
   
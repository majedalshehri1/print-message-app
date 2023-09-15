
////////////// The frist solution

// document.getElementById("btn").addEventListener("click", function(){
//     var msg = document.getElementById("inputMsg").value
//     document.getElementById("outputMsg").innerHTML = msg
// })




////////////// The second solution :

// get elements into variable
var inputElm = document.getElementById("inputMsg")
var buttonElm = document.getElementById("btn")
var msgElm = document.getElementById("outputMsg")

// Events

buttonElm.onclick = function(){

    // get value from input
    var inputValue = inputElm.value

    
        
        // put input value into P
        msgElm.innerHTML = inputValue

        //empty input value after click the button 
        inputElm.value = ""
    











        
}



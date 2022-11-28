function function0(){
    var arr = $("input[name='myTextInput']").map(function() {
        return this.value;
    }).get();//use jquery map() to put text in array ?
}
//another method set a array to reserve maybe?
//var myFormData = [];   //declare an array
//var value1 = document.getElementById("myTextInput").value;  //get the value of an element by it's id
//myFormData.push(value1); //put to the array

function function1(){
    var ratingstar = prompt("rating stars please enter start number you want to give：");
    //can not use popover to implement the option to select stars ? how to modify it?
    
}



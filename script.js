var one = prompt("Enter the first operand:-");
var two = prompt("Enter the second operand:-");
var operator =prompt("Enter the operator:-");

if(operator=="+"){
    var result = Number(one)+Number(two);
    alert("Addition of operands:-"+result);
}
else if(operator=="-"){
    var result = one - two;
    alert("Subtraction of operands:-"+result);
    
}
else if(operator=="*"){
    var result = one * two;
    alert("Multiplication of operands:-"+result);
    
}
else if(operator=="/"){
    var result = one / two;
    alert("Division of operands:-"+result);
    
}
else if(operator=="%"){
    var result = one - two;
    alert("Remainder of operands:-"+result);
    
}

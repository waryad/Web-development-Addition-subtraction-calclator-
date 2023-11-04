document.getElementById("btn").onclick=function()
{
num1= parseInt(document.getElementById("num1").value) ;//value of num1 textbox
num2=parseInt(document.getElementById("num2").value) ; //value of num2 textbox
op=document.getElementById("op").value    //value of dropdown

result= document.getElementById("result")  ;   // result textbox
if((num1!==""&&!isNaN(num1))&& (num2!=="" && !isNaN(num2)))  //valid number
{
    switch(op)
    {
        case "1":
            result.value=num1+num2;

        break;
        case "2":
            result.value=num1-num2;
        break;

    }
}
else
{
    alert("Please enter a valid number");
}
}
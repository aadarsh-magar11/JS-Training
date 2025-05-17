let value=prompt("enter the value");
if(value==="true" || value==="false")
{
    alert("Type is Boolean");
}
else if(value==="")
{
    alert("Type is Undefined");
}
else if(value==="null")
{
    alert("NULL");
}
else if(!isNaN(value))
{
    alert("Type is Number");
}
else
{
    alert("enter a valid entry");
}

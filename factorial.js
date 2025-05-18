let n=parseInt(prompt("enter the number:"));
let i,fact=1;
if(!isNaN(n) && n>0)
{
for(i=1;i<=n;i++)
{
    fact=fact*i;
}
}
else
{
    alert("enter a number please");
}
alert("the factorial is :"+fact);
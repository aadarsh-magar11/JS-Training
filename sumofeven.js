let i,n,sum=0;
n=parseInt(prompt("enter how much sum of even numbers to perform:"));
for(i=2;i<=n*2;i+=2)
{
    sum=sum+i;
}
alert("the sum of even numbers is :"+sum);

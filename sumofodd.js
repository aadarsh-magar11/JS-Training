let i,n,sum=0;
n=parseInt(prompt("enter upto how many odd numbers to print:"));
for(i=1;(i<=n*2);i+=2)
{
    sum=sum+i;
}
alert("the sum of odd numbers is "+sum);
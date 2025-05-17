let n=parseInt(prompt("enter any number"));
let i=1;
while(i<=n)
{
    if(i%3==0)
    {
        console.log(i);
        
    }
    else if(i%3==0 && i%5==0)
    {
        break;        
    }
    i++;
}
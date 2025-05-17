let num;
while(num!=7)
{
    let num=parseInt(prompt("guess the number"));
    if(num==7)
    {
        alert("Hurrah!, You guessed it right");
        break;
    }
    else
    {
        alert("Guess the number again");
    }
}

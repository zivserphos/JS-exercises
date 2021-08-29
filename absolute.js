function absolute (number)
{
    if (typeof(number) !== "number")
    {
        return "wrong input"
    }
    if (number < 0)
    {
        return number*-1;
    }
    else
    {
        return number;
    }
    

}

console.log(absolute(-12));
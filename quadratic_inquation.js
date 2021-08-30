function  quadraticEquation(num1,num2,num3)
{
    if ((num2*num2) -(4*num1*num3) < 0)
    {
        return "wrong input";
    }
    var counter1 = (num2*-1)+(Math.sqrt((num2*num2)-4*num1*num3));
    var counter2 = (num2*-1)-(Math.sqrt((num2*num2)-4*num1*num3));
    var denominator =num1*2;
    var firstResult = counter1/denominator;
    var secondResult = counter2/denominator;
    return [firstResult,secondResult];
}

console.log((quadraticEquation(7,6,5)));

function sum3Digits(number)
{
    if (number <100 || number>999)
    {
        return "wrong number";
    }
    firstDigit=number%10;
    secondDigit=(number-firstDigit)%100 / 10;
    thirdDigit=(number-secondDigit*10-firstDigit)/100;
    return firstDigit+secondDigit+thirdDigit;
}

var num=123;
console.log(sum3Digits(num));
function studentsStatistics (arr)
{
    let heighstGrade = arr[0];
    let lowestGrade = arr[0];
    for (let i=0; i<arr.length; i++)
    {
        if (arr[i] > heighstGrade)
        {
            heighstGrade=arr[i];
        }
        if (arr[i] < lowestGrade)
        {
            lowestGrade=arr[i];
        }
    }
    arr
    return heighstGrade-lowestGrade;
}

function findMedian(arr)
{
    var heighstGrade =0;
    var sortedArr = [];
    let index =0;
    var arrLength = arr.length
    for (p=0; p<arrLength; p++)
    {
        for(i=0; i<arr.length ;i++)
        {
            if (arr[i] > heighstGrade)    
            {
                heighstGrade = arr[i];
                index=i;
            }   
            
        }       
        arr.splice(index,1)
        sortedArr.push(heighstGrade)
        heighstGrade =0;
        
    }
    var median;
    if (sortedArr.length % 2 === 0)
        {
            median = ((sortedArr[sortedArr.length/2-1]+sortedArr[sortedArr.length/2])/2);
        }
    else
        {
            median = sortedArr[(sortedArr.length-1)/2];
        }
    
    console.log(median);
    
}

function halfRange (arr)
{
    var newArr = [];
    var num = Math.round((arr.length)/2)
    
    for (let i=num; i<arr.length; i++)
    {
        newArr.push(arr[i]);
        newArr
        
    }
    return studentsStatistics(newArr);
}

var arr7 = [75,83,60,92,70,80]
console.log(studentsStatistics([75,80,90]));
findMedian(arr7);
console.log(halfRange([75,83,60,92,70,80]));
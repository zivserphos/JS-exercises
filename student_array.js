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

    let range = heighstGrade-lowestGrade;
    
}
let arr = [4, 2, 8];
var max = 0;
var result;
function qwerty()
{
    for (var j = 0; j < arr.length; j++)
    {
        if (max < arr[j])
        {
            max = arr[j];
        }
    }
    for (var i = max; i > 0; i--)
    {
        if (arr[0] % i  == 0 && arr[1] % i  == 0 && arr[2] % i == 0)
        {
            result = i;
            break;
        }
    }
    alert(result);
}
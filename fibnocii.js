function printFibnociiNumber ( arr )
{
    let fibInterval = 0;
    let fibCurrent = 1;
    let fibPrevious = 0;

    for ( let i = 0; i<arr.length; i++ )
    {
        setTimeout( () =>
        {
            console.log( arr[ i ] );
            
        }, fibInterval );
        fibInterval += fibCurrent;
        [ fibPrevious, fibCurrent ] = [ fibCurrent, fibPrevious + fibCurrent ];
    }
}
const myArray = [ 2, 4, 6, 8 ];
printFibnociiNumber ( myArray );
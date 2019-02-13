var array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

function findOdd(a) {
    if( a.length == 0 )
        return [];
    if( a.length == 1 )
        return a[0] % 2 ? [] : a.slice();
    return evens( a.slice(0,1) )
        .concat( findOdd( a.slice(1) ) );
}

console.log( evens( array ) );
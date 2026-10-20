const fs = require( 'fs' )
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const studentName = 'Kowalski_Jan'  //  Nazwisko + '_' + Imie  (bez polskich liter)

const myList = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

const myPrompt = `task 1 - only even results
task 2 - sum of the results in range from 149 to 151
task 3 - sum of the digits of all numbers equal to 50
task 4 - the difference between the max and min value equal to 30
task 5 - at least 4 numbers with the same last digit
task 6 - at least 4 numbers in one range: 1-9 or 10-19 or 20-29 or 30-39 or 40-49
task 7 - al least eight different digits (from 0 to 9) in single drawing
task 8 - the 5 most frequently drawn numbers and 5 least frequently drawn numbers
task 9 - the 5 longest sequences of consecutive numbers
-------------------
enter the number of task od 1 do 9, 0 - the end: `

fs.readFile( 'lotto.csv', function( err, lottoResults ) {
    if ( err ) {
        console.log( "Error has arised: " + err )
    }
    else {
        processData( lottoResults.toString() )
    }
} )

const recursiveAsyncReadLine = function ( data ) {
    rl.question( myPrompt, function ( number ) {
        if ( ! myList.includes( number ) ) {
            console.log( `
================================================
=    ...please enter the correct number...     =
================================================
` );
            recursiveAsyncReadLine( data );
        } else {
            switch( number ) {
                case '0' :
                    rl.close();
                    break;
                case '1' :
                    case01( data );
                    break;
                case '2' :
                    case02( data );
                    break;
                case '3' :
                    case03( data );
                    break;
                case '4' :
                    case04( data );
                    break;
                case '5' :
                    case05( data );
                    break;
                case '6' :
                    case06( data );
                    break;
                case '7' :
                    case07( data );
                    break;
                case '8' :
                    case08( data );
                    break;
                case '9' :
                    case09( data );
                    break;
            }
        }
    } )
}

function processData( data ) {
    recursiveAsyncReadLine( data );
}

function case01( data ) {
    console.log( '----------------------- CASE 01 ----------------------------')
    let dataToWrite = studentName + '\n' + myPrompt.split( '\n' )[ 0 ] + '\n'
    let myData = data.split( '\n' )
    const MYLENGTH = myData.length
    let numberOK = 0
//-----------------------------------------------------------------------------
    for( let lineNumber = 0; lineNumber < MYLENGTH - 1; lineNumber ++ ) {
        let myNumbers = []
        let myWords = myData[ lineNumber ].split( ',' )
        let howManyWords = myWords.length
        let isOK = true
        for( let wordNumber = 4; wordNumber < howManyWords; wordNumber ++ ) {
            let draw = parseInt( myWords[ wordNumber ] )
            if( ! ( draw % 2 ) ) myNumbers.push( draw );
            else {
                isOK = false;
                break
            }
        }
        if ( isOK ) {
            let myDescription = ''
            numberOK ++
            for( let wordNumber = 0; wordNumber < 4; wordNumber ++ ) {
                myDescription += myWords[ wordNumber ] + ' '
            }
            myDescription +=  ' --->'
            dataToWrite +=`${numberOK}: ${myDescription} ${myNumbers}
`
        }
    }
//-----------------------------------------------------------------------------
    const myFileName = studentName + '_case01.txt'
    fs.writeFile( myFileName, dataToWrite, function( err ) {
        if ( err ) {
            console.log( "Error has arised: " + err );
        }
    } )
    console.log( '------------------- END OF CASE 01 -------------------------\n')
    recursiveAsyncReadLine( data );
}

function case02( data ) {
    console.log( '----------------------- CASE 02 ----------------------------')
    let dataToWrite = studentName + '\n' + myPrompt.split( '\n' )[ 1 ] + '\n'
    let myData = data.split( '\n' )
    const MYLENGTH = myData.length
    let numberOK = 0
//-----------------------------------------------------------------------------
//  ...

    const myFileName = studentName + '_case02.txt'
    fs.writeFile( myFileName, dataToWrite, function( err ) {
        if ( err ) {
            console.log( "Error has arised: " + err );
        }
    } )
    console.log( '------------------- END OF CASE 02 -------------------------\n')
    recursiveAsyncReadLine( data );
}

function case03( data ) {
    console.log( '----------------------- CASE 03 ----------------------------')
    let dataToWrite = studentName + '\n' + myPrompt.split( '\n' )[ 2 ] + '\n'
    let myData = data.split( '\n' )
    const MYLENGTH = myData.length
    let numberOK = 0
//-----------------------------------------------------------------------------
//  ...

    const myFileName = studentName + '_case03.txt'
    fs.writeFile( myFileName, dataToWrite, function( err ) {
        if ( err ) {
            console.log( "Error has arised: " + err );
        }
    } )
    console.log( '------------------- END OF CASE 03 -------------------------\n')
    recursiveAsyncReadLine( data );
}

function case04( data ) {
    console.log( '----------------------- CASE 04 ----------------------------')
    let dataToWrite = studentName + '\n' + myPrompt.split( '\n' )[ 3 ] + '\n'
    let myData = data.split( '\n' )
    const MYLENGTH = myData.length
    let numberOK = 0
//-----------------------------------------------------------------------------
//  ...

    const myFileName = studentName + '_case04.txt'
    fs.writeFile( myFileName, dataToWrite, function( err ) {
        if ( err ) {
            console.log( "Error has arised: " + err );
        }
    } )
    console.log( '------------------- END OF CASE 04 -------------------------\n')
    recursiveAsyncReadLine( data );
}

function case05( data ) {
    console.log( '----------------------- CASE 05 ----------------------------')
    let dataToWrite = studentName + '\n' + myPrompt.split( '\n' )[ 4 ] + '\n'
    let myData = data.split( '\n' )
    const MYLENGTH = myData.length
    let numberOK = 0
//-----------------------------------------------------------------------------
//  ...

    const myFileName = studentName + '_case05.txt'
    fs.writeFile( myFileName, dataToWrite, function( err ) {
        if ( err ) {
            console.log( "Error has arised: " + err );
        }
    } )
    console.log( '------------------- END OF CASE 05 -------------------------\n')
    recursiveAsyncReadLine( data );
}

function case06( data ) {
    console.log( '----------------------- CASE 06 ----------------------------')
    let dataToWrite = studentName + '\n' + myPrompt.split( '\n' )[ 5 ] + '\n'
    let myData = data.split( '\n' )
    const MYLENGTH = myData.length
    let numberOK = 0
//-----------------------------------------------------------------------------
//  ...

    const myFileName = studentName + '_case06.txt'
    fs.writeFile( myFileName, dataToWrite, function( err ) {
        if ( err ) {
            console.log( "Error has arised: " + err );
        }
    } )
    console.log( '------------------- END OF CASE 06 -------------------------\n')
    recursiveAsyncReadLine( data );
}

function case07( data ) {
    console.log( '----------------------- CASE 07 ----------------------------')
    let dataToWrite = studentName + '\n' + myPrompt.split( '\n' )[ 6 ] + '\n'
    let myData = data.split( '\n' )
    const MYLENGTH = myData.length
    let numberOK = 0
//-----------------------------------------------------------------------------
//  ...

    const myFileName = studentName + '_case07.txt'
    fs.writeFile( myFileName, dataToWrite, function( err ) {
        if ( err ) {
            console.log( "Error has arised: " + err );
        }
    } )
    console.log( '------------------- END OF CASE 07 -------------------------\n')
    recursiveAsyncReadLine( data );
}

function case08( data ) {
    console.log( '----------------------- CASE 08 ----------------------------')
    let dataToWrite = studentName + '\n' + myPrompt.split( '\n' )[ 7 ] + '\n'
    let myData = data.split( '\n' )
    const MYLENGTH = myData.length
    let numberOK = 0
//-----------------------------------------------------------------------------
//  ...

    const myFileName = studentName + '_case08.txt'
    fs.writeFile( myFileName, dataToWrite, function( err ) {
        if ( err ) {
            console.log( "Error has arised: " + err );
        }
    } )
    console.log( '------------------- END OF CASE 08 -------------------------\n')
    recursiveAsyncReadLine( data );
}

function case09( data ) {
    console.log( '----------------------- CASE 09 ----------------------------')
    let dataToWrite = studentName + '\n' + myPrompt.split( '\n' )[ 8 ] + '\n'
    let myData = data.split( '\n' )
    const MYLENGTH = myData.length
    let numberOK = 0
//-----------------------------------------------------------------------------
//  ...

    const myFileName = studentName + '_case09.txt'
    fs.writeFile( myFileName, dataToWrite, function( err ) {
        if ( err ) {
            console.log( "Error has arised: " + err );
        }
    } )
    console.log( '------------------- END OF CASE 09 -------------------------\n')
    recursiveAsyncReadLine( data );
}



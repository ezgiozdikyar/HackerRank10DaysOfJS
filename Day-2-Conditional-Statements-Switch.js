'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    let A = ["a","e","i","o","u"];
    let B = ["b","c","d","f","g"];
    let C = ["h","j","k","l","m"];
    let D = ["n","p","q","r","s","t","v","w","x","y","z"];
    for(let i = 0;i < D.length ;i++){
        switch(true){
            case(s.startsWith(A[i])):
                return "A";
            case(s.startsWith(B[i])):
                return "B";
            case(s.startsWith(C[i])):
                return "C";
            case(s.startsWith(D[i])):
                return "D";
        }            
    }
}
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    s.split('');

    let hh = parseInt(s[0] + s[1]);
    let mm = s[3] + s[4];
    let ss = s[6] + s[7];
    let ampm = s[s.length - 2];

    if (hh >= 12 && ampm === 'A') {
        hh = hh - 12;
    }
    else if (hh < 12 && ampm === 'P') {
        hh = hh + 12;
    }

    if (hh > 10) {
        return (hh + ":" + mm + ":" + ss)
    }
    else {
        return ("0" + hh + ":" + mm + ":" + ss)
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

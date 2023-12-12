for (let i = 0; i < 7; i++) {
    let row = '';
    for (let j = 0; j < 7 - i; j++) {
        row += '  ';
    }
    for (let k = 0; k <= i; k++) {
        row += '* ';
    }
    console.log(row);
}
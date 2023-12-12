function PascalsTriangle(rows) {
    for (let i = 0; i < rows; i++) {
        let row = "";
        let coefficient = 1;


        for (let j = 0; j < rows - i; j++) {
            row += "   ";
        }

        for (let j = 0; j <= i; j++) {

            row+= `${coefficient}      `;
            coefficient = coefficient * (i - j) / (j + 1);
        }
        console.log(row);
    }
}
const numberOfRows = 5;
PascalsTriangle(numberOfRows);
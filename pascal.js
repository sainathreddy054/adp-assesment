function pascalsTriangle(rowCount) {
    var i, j, row;
    for (i = 0; i <= rowCount; i++) {
        row = [1];
        for (j = 1; j <= i; j++) {
            row.push(row[j - 1] * (i + 1 - j) / j);
        }
        console.log(row);
    }
}

console.log(pascalsTriangle(6))
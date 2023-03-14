let matrixAColumns = prompt("matrix A columns");
let matrixARows = prompt("matrix A rows");
let matrixA = []
for(let i = 0; i < matrixARows; i++){
    matrixA[i] = new Array(matrixAColumns)
}

for(let i = 0; i < matrixARows; i++){
    for(let j = 0; j < matrixAColumns; j++){
        matrixA[i][j] = prompt(`${i+1} column ${j+1} row`)
    }
}

let matrixBColumns = prompt("matrix B columns");
let matrixBRows = prompt("matrix B rows");
let matrixB = []
for(let i = 0; i < matrixBRows; i++){
    matrixB[i] = new Array(matrixBColumns)
}

for(let i = 0; i < matrixBRows; i++){
    for(let j = 0; j < matrixBColumns; j++){
        matrixB[i][j] = prompt(`${i+1} column ${j+1} row`)
    }
}

let resultMatrix = []
for(let i = 0; i < matrixARows; i++){
    resultMatrix[i] = new Array(matrixBColumns)
}

for(let i = 0; i < matrixARows; i++){
    for(let j = 0; j < matrixBColumns; j++){
        resultMatrix[i][j] = 0

        for(let k = 0; k < matrixBRows; k++){
            resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j]
        }

        console.log(resultMatrix[i][j])
    }
}
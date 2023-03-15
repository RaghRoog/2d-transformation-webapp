let pointsNumberDisplay = document.querySelector('.points-number-display')
let pointsNumberInput = document.querySelector('.points-number-input')

//displaying current value of input
pointsNumberInput.addEventListener('change', () =>{
    pointsNumberDisplay.innerHTML = pointsNumberInput.value
})

//making inputs for points coordinates
function makePointsInputs(){
    let inputValue = pointsNumberInput.value
    let pointsInputContainer = document.querySelector('.points-input-container')
    //deleting of all elements in container
    while(pointsInputContainer.firstChild){
        pointsInputContainer.firstChild.remove()
    }
    pointsInputContainer.style.width = `${100 * inputValue}px`
    //creating inputs
    for(let i = 0; i < inputValue; i++){
        for(let j = 0; j < 2; j++){
            let input = document.createElement('input')
            input.classList.add('point-input')
            pointsInputContainer.appendChild(input)
        }
    }
    let pointNumberContainer = document.querySelector('.point-number-container')
    while(pointNumberContainer.firstChild){
        pointNumberContainer.firstChild.remove()
    }
    //creating points indicators
    for(let i = 1; i <= inputValue; i++){
        let pointNumber = document.createElement('p')
        pointNumber.innerHTML = i
        pointNumber.classList.add('point-number')
        pointNumberContainer.appendChild(pointNumber)
    }
    let pointIndicatorX = document.querySelector('.point-indicator-x')
    pointIndicatorX.style.display = 'block'
    let pointIndicatorY = document.querySelector('.point-indicator-y')
    pointIndicatorY.style.display = 'block'
}

let acceptBtn = document.querySelector('.accept-btn')
acceptBtn.addEventListener('click', makePointsInputs)



// let matrixAColumns = prompt("matrix A columns");
// let matrixARows = prompt("matrix A rows");
// let matrixA = []
// for(let i = 0; i < matrixARows; i++){
//     matrixA[i] = new Array(matrixAColumns)
// }

// for(let i = 0; i < matrixARows; i++){
//     for(let j = 0; j < matrixAColumns; j++){
//         matrixA[i][j] = prompt(`${i+1} column ${j+1} row`)
//     }
// }

// let matrixBColumns = prompt("matrix B columns");
// let matrixBRows = prompt("matrix B rows");
// let matrixB = []
// for(let i = 0; i < matrixBRows; i++){
//     matrixB[i] = new Array(matrixBColumns)
// }

// for(let i = 0; i < matrixBRows; i++){
//     for(let j = 0; j < matrixBColumns; j++){
//         matrixB[i][j] = prompt(`${i+1} column ${j+1} row`)
//     }
// }

// let resultMatrix = []
// for(let i = 0; i < matrixARows; i++){
//     resultMatrix[i] = new Array(matrixBColumns)
// }

// for(let i = 0; i < matrixARows; i++){
//     for(let j = 0; j < matrixBColumns; j++){
//         resultMatrix[i][j] = 0

//         for(let k = 0; k < matrixBRows; k++){
//             resultMatrix[i][j] += matrixA[i][k] * matrixB[k][j]
//         }

//         console.log(resultMatrix[i][j])
//     }
// }
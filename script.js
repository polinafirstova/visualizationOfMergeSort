const NUMBERS_COUNT = 10;
const DELAY = 300;
const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));
let columns = [];
class Column {
    _number = 0;
    _less = false;
    _larger = false;
    constructor(container, number) {

        this.column = document.createElement('div');
        this.line = document.createElement('div');
        this.lineValue = document.createElement('div');
        this.infoNumber = document.createElement('span');

        this.column.classList.add('column');
        this.line.classList.add('column-line');
        this.lineValue.classList.add('column-value');
        this.infoNumber.classList.add('column-number');

        this.number = number;

        this.line.append(this.lineValue);
        this.column.append(this.line);
        this.column.append(this.infoNumber);
        container.append(this.column);
    }

    setStatus(status) {
        this.resetStatus();
        this.column.classList.add(status);
        if (status == 'larger') this.flash();
    }

    resetStatus() {
        this.column.classList.remove('current');
        this.column.classList.remove('larger');
        this.column.classList.remove('less');
    }

    flash() {
        this.column.classList.remove('flash');
        clearTimeout(this._timerFlash);
        this.column.classList.add('flash');
        this._timerFlash = setTimeout(() => {
            this.column.classList.remove('flash');
        }, 1000)
    }

    set number(value) {
        this._number = value;
        this.lineValue.style.height = (value * 100 / NUMBERS_COUNT) + "%";
        if (NUMBERS_COUNT <= 40) {
            this.infoNumber.textContent = this.number;
        }
    }

    get number() {
        return this._number;
    }
}

function createSortBox(container, sortFunction) {
    const chartBox = document.createElement('div');
    const infoBox = document.createElement('div');
    const leftInfo = document.createElement('div');
    const startBtn = document.createElement('button');

    infoBox.classList.add('info-box');
    chartBox.classList.add('box');
    leftInfo.classList.add('left-info');
    startBtn.classList.add('start-btn');

    startBtn.textContent = 'Старт';

    leftInfo.append(startBtn);
    infoBox.append(leftInfo);
    container.append(infoBox);
    container.append(chartBox);

    const numbers = [];
    for (let i = 1; i <= NUMBERS_COUNT; i++) {
        numbers.push(i);
    }
    numbers.sort(() => Math.random() - 0.5);

    chartBox.setAttribute('style', `grid-template-columns: repeat(${NUMBERS_COUNT}, 1fr);`);

    numbers.forEach(number => {
        columns.push(new Column(chartBox, number));
    });

    startBtn.addEventListener('click', function () {
        startBtn.disabled = true;
        sortFunction(columns);
    })
}

function finishFlash(columns) {
    for (const column of columns) {
        column.flash();
    }
}

function mergeSort(array, startIndex, endIndex) {
    if (array.length < 2) return array;
    const lengthArray1 = Math.trunc(array.length / 2);
    const array1 = array.splice(0, lengthArray1);

    let numbers = [];
    columns.forEach(element => {
        numbers.push(element.number);
    });
    return merge(mergeSort(array1, startIndex, startIndex + lengthArray1), mergeSort(array, startIndex + lengthArray1, endIndex), startIndex, endIndex);
}

function merge(array1, array2, startIndex, endIndex) {
    // array1.forEach(element => {
    //     element.resetStatus();
    // });
    // await delay(DELAY / 2);
    let mergeArray = [];

    while (array1.length && array2.length) {
        if (array1[0].number < array2[0].number) {
            // array1[0].setStatus('less');
            // array2[0].setStatus('larger');
            mergeArray.push(array1.shift());
        } else {
            mergeArray.push(array2.shift());
        }
    }
    if (array1.length) {
        while (array1.length) {
            mergeArray.push(array1.shift());
        }
    }
    if (array2.length) {
        while (array2.length) {
            mergeArray.push(array2.shift());
        }
    }
    const left = columns.slice(0, startIndex);
    const middle = [...mergeArray];
    const right = columns.slice(endIndex, columns.length);
    let numbers = [];
    columns = [...left, ...middle, ...right];
    columns.forEach(element => {
        numbers.push(element.number);
    });
    console.log(numbers);

    return mergeArray;
}

document.addEventListener('DOMContentLoaded', function () {
    createSortBox(document.getElementById('merge_sort'), async function () {

        const array = columns.slice();
        mergeSort(array, 0, array.length);
        // for (let j = columns.length - 1; j > 0; j--) {
        //     for (let i = 0; i < j; i++) {
        //         const A = columns[i];
        //         const B = columns[i + 1];

        //         A.setStatus('current');
        //         B.setStatus('current');

        //         await delay(DELAY / 2);
        //         if (A.number > B.number) {
        //             const temp = A.number;
        //             A.number = B.number;
        //             B.number = temp;

        //             B.setStatus('larger');
        //             A.setStatus('less');
        //         } else {
        //             A.resetStatus();
        //             B.resetStatus();
        //         }

        //         await delay(DELAY);
        //     }
        // }

        finishFlash(columns);

    })
})

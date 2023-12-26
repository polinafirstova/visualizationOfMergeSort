// Количество элементов
let NUMBERS_COUNT = 10;

class Column {

    _number = 0;

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

    // Добавление класса
    setClass(status) {

        this.column.classList.add(status);

    }

    // Удаление класса
    resetClass() {

        this.column.classList.remove('current');

    }

    // Подсвечивание колонок
    flash() {

        this.column.classList.add('flash');

        setTimeout(() => {

            this.column.classList.remove('flash');

        }, 1000)

    }

    // Установка чисел каждому элементу
    set number(value) {

        this._number = value;
        this.lineValue.style.height = (value * 100 / NUMBERS_COUNT) + "%";

        if (NUMBERS_COUNT <= 100) {

            this.infoNumber.textContent = this.number;

        }

    }

    // Получение значения элемента
    get number() {

        return this._number;

    }

}

class Code {

    _number = 0;
    _text = '';

    constructor(container, number, text) {

        this.string = document.createElement('div');
        this.stringNumber = document.createElement('span');
        this.stringText = document.createElement('span');

        this.string.classList.add('string');
        this.stringNumber.classList.add('string-number');
        this.stringText.classList.add('string-text');

        this.number = number;
        this.text = text;

        this.string.append(this.stringNumber);
        this.string.append(this.stringText);
        container.append(this.string);

    }

    set number(value) {

        this._number = value;

        this.stringNumber.textContent = this.number;

    }

    // Получение значения элемента
    get number() {

        return this._number;

    }

    set text(value) {

        this._text = value;

        this.stringText.textContent = this.text;

    }

    // Получение значения элемента
    get text() {

        return this._text;

    }

}

// Создание элементов HTML
const info = document.createElement('div'); // бокс с кнопками, количеством элементов и скоростью
const boxContainer = document.createElement('div'); // обертка сортировки
const code = document.createElement('div'); // бокс с кодом алгоритма
const chartBox = document.createElement('div'); // бокс с сортировкой
const btnBox = document.createElement('div'); // бокс с кнопками
const countBox = document.createElement('div'); // бокс с количеством элементов и скоростью
const startBtn = document.createElement('button'); // кнопка старт
const restartBtn = document.createElement('button'); // кнопка перезапустить
const mixBtn = document.createElement('button'); // кнопка перемешать
const numbersCountText = document.createElement('p'); // текст количество элементов
const speedText = document.createElement('p'); // текст изменение скорости
const countNumbersBox = document.createElement('div'); // бокс для изменения количества элементов
const minBtnNumberCount = document.createElement('button'); // кнопка уменьшить количество элементов
const numbersCount = document.createElement('input'); // количество элементов
const maxBtnNumberCount = document.createElement('button'); // кнопка увеличить количество элементов
const speedBox = document.createElement('div'); // бокс для изменения скорости
const minBtnSpeed = document.createElement('button'); // кнопка уменьшить скорости
const speed = document.createElement('input'); // скорости
const maxBtnSpeed = document.createElement('button'); // кнопка увеличить скорости

// Создание сортбокса
function createSortBox(container, sortFunction) {

    // Добавление классов
    info.classList.add('info');
    code.classList.add('code');
    boxContainer.classList.add('box-container');
    btnBox.classList.add('btn-box');
    countBox.classList.add('count-box');
    chartBox.classList.add('box');
    startBtn.classList.add('start-btn');
    restartBtn.classList.add('restart-btn');
    mixBtn.classList.add('mix-btn');
    countNumbersBox.classList.add('count-numbers-box');
    numbersCountText.classList.add('numbers-count-text');
    minBtnNumberCount.classList.add('min-btn-numbers-count');
    numbersCount.classList.add('numbers-count');
    maxBtnNumberCount.classList.add('max-btn-numbers-count');
    speedBox.classList.add('speed-box');
    speedText.classList.add('speed-text');
    minBtnSpeed.classList.add('min-btn-speed');
    speed.classList.add('speed');
    maxBtnSpeed.classList.add('max-btn-speed');

    // Задание значений
    startBtn.textContent = 'Старт';
    restartBtn.textContent = 'Перезапустить';
    mixBtn.textContent = 'Перемешать';
    numbersCountText.textContent = 'Количество элементов: ';
    speedText.textContent = 'Скорость: ';
    minBtnNumberCount.textContent = '-'
    minBtnSpeed.textContent = '-'
    numbersCount.value = '10';
    speed.value = '1';
    numbersCount.min = '10';
    speed.min = '0.25';
    numbersCount.max = '50';
    speed.max = '2';
    // numbersCount.readOnly = true;
    speed.readOnly = true;
    numbersCount.type = 'number';
    speed.type = 'number';
    maxBtnNumberCount.textContent = '+';
    maxBtnSpeed.textContent = '+';
    // code.textContent = 'qwertyuiop[]asdfghjkl;\nqwerty';

    // Уменьшение количества элементов в массиве
    minBtnNumberCount.addEventListener('click', function () {

        if (numbersCount.value > 10) {

            numbersCount.value--;
            setNumbersCount();

        }

    })

    // Уменьшение скорости
    minBtnSpeed.addEventListener('click', function () {

        if (speed.value > 0.25) {

            speed.value -= 0.25;

        }

    })

    // Увеличение количества элементов в массиве
    maxBtnNumberCount.addEventListener('click', function () {

        if (numbersCount.value < 50) {

            numbersCount.value++;
            setNumbersCount();

        }

    })

    // Увеличение скорости
    maxBtnSpeed.addEventListener('click', function () {

        if (speed.value < 2) {

            speed.value = Number(speed.value) + 0.25;

        }

    })

    // Добавление созданных элементов HTML на страницу
    btnBox.append(startBtn);
    btnBox.append(restartBtn);
    btnBox.append(mixBtn);
    countBox.append(numbersCountText);
    countBox.append(countNumbersBox);
    countBox.append(speedText);
    countBox.append(speedBox);
    countNumbersBox.append(minBtnNumberCount);
    countNumbersBox.append(numbersCount);
    countNumbersBox.append(maxBtnNumberCount);
    speedBox.append(minBtnSpeed);
    speedBox.append(speed);
    speedBox.append(maxBtnSpeed);
    info.append(btnBox);
    info.append(countBox);
    boxContainer.append(code);
    boxContainer.append(chartBox);
    container.append(info);
    container.append(boxContainer);

    // Массивы с числами, колонками, копиями колонок
    let numbers = [];
    let columns = [];
    let copyColumns = [];

    newColumns();

    // Перерисовка колонок
    function newColumns() {

        numbers = [];

        for (let i = 1; i <= NUMBERS_COUNT; i++) {

            numbers.push(i);

        }

        numbers.sort(() => Math.random() - 0.5);

        columns = [];
        copyColumns = [];

        chartBox.setAttribute('style', `grid-template-columns: repeat(${NUMBERS_COUNT}, 1fr);`);

        numbers.forEach(element => {

            columns.push(new Column(chartBox, element));
            copyColumns.push(element);

        });

    }

    mergeSortCode();

    function mergeSortCode() {

        stringsOfCode = [];

        i = 1;

        stringsOfCode.push(new Code(code, i++, ".__split(array) {"));
        stringsOfCode.push(new Code(code, i++, "._____if (array.length < 2) return array;"));
        stringsOfCode.push(new Code(code, i++, "._____lengthArray1 = array.length / 2;"));
        stringsOfCode.push(new Code(code, i++, "._____array1 = array.copy(0, lengthArray1);"));
        stringsOfCode.push(new Code(code, i++, "._____array2 = array.copy(lengthArray1, -1);"));
        stringsOfCode.push(new Code(code, i++, "._____left = mergeSort(array1)"));
        stringsOfCode.push(new Code(code, i++, "._____right = mergeSort(array2"));
        stringsOfCode.push(new Code(code, i++, "._____return merge(left, right);"));
        stringsOfCode.push(new Code(code, i++, ".__}"));
        stringsOfCode.push(new Code(code, i++, "._______________________________________________"));
        stringsOfCode.push(new Code(code, i++, ".__merge(left, right) {"));
        stringsOfCode.push(new Code(code, i++, "._____mergeArray = [];"));
        stringsOfCode.push(new Code(code, i++, "._____while (left.length && right.length) {"));
        stringsOfCode.push(new Code(code, i++, "._________if (left[0] < right[0]) {"));
        stringsOfCode.push(new Code(code, i++, "._____________mergeArray.push(left.popFirst());"));
        stringsOfCode.push(new Code(code, i++, "._________} else {"));
        stringsOfCode.push(new Code(code, i++, "._____________mergeArray.push(right.popFirst());"));
        stringsOfCode.push(new Code(code, i++, "._________}"));
        stringsOfCode.push(new Code(code, i++, "._____}"));
        stringsOfCode.push(new Code(code, i++, "._____if (left.length) {"));
        stringsOfCode.push(new Code(code, i++, "._________while (left.length) {"));
        stringsOfCode.push(new Code(code, i++, "._____________mergeArray.push(left.popFirst());"));
        stringsOfCode.push(new Code(code, i++, "._________}"));
        stringsOfCode.push(new Code(code, i++, "._____}"));
        stringsOfCode.push(new Code(code, i++, "._____if (right.length) {"));
        stringsOfCode.push(new Code(code, i++, "._________while (right.length) {"));
        stringsOfCode.push(new Code(code, i++, "._____________mergeArray.push(right.popFirst());"));
        stringsOfCode.push(new Code(code, i++, "._________}"));
        stringsOfCode.push(new Code(code, i++, "._____}"));
        stringsOfCode.push(new Code(code, i++, "._____return mergeArray;"));
        stringsOfCode.push(new Code(code, i++, "._}"));

    }

    // Кнопка старт
    startBtn.addEventListener('click', function () {

        startBtn.disabled = true;
        restartBtn.disabled = true;
        mixBtn.disabled = true;
        sortFunction(columns);

    })

    // Кнопка перезапустить
    restartBtn.addEventListener('click', async function () {

        startBtn.disabled = true;
        restartBtn.disabled = true;
        mixBtn.disabled = true;

        const promise = new Promise((resolve) => {

            for (let i = 0; i < copyColumns.length; i++) {

                columns[i].number = copyColumns[i];

            }

            setTimeout(() => {

                resolve()

            }, 1000);

        })

        await promise;

        sortFunction(columns);

    })

    // Кнопка перемешать
    mixBtn.addEventListener('click', function () {

        numbers.sort(() => Math.random() - 0.5);

        for (let i = 0; i < numbers.length; i++) {

            columns[i].number = numbers[i];
            copyColumns[i] = numbers[i];

        }

    })

    // Задание количества колонок
    function setNumbersCount() {

        NUMBERS_COUNT = document.getElementsByClassName("numbers-count")[0].value;

        chartBox.removeAttribute('style');

        const columnsBox = document.querySelectorAll('.column');

        columnsBox.forEach(function (elem) {

            elem.parentNode.removeChild(elem);

        });

        newColumns();

    }

}

// Задание скорости
function setSpeed() {

    return 1000 / document.getElementsByClassName("speed")[0].value;

}

// Разделение массива
async function mergeSort(array, startIndex, columns) {

    const promise1 = new Promise((resolve) => {

        array.forEach(element => {

            columns.find(el => el.number === element).setClass('current');

        });

        setTimeout(() => {

            resolve();

        }, setSpeed());

    })

    await promise1;

    if (array.length < 2) return array;

    const lengthArray1 = Math.trunc(array.length / 2);
    const array1 = array.splice(0, lengthArray1);

    const promise2 = new Promise((resolve) => {

        array1.forEach(element => {

            columns.find(el => el.number === element).resetClass();

        });

        array.forEach(element => {

            columns.find(el => el.number === element).resetClass();

        });

        setTimeout(() => {

            resolve(mergeSort(array1, startIndex, columns));

        }, setSpeed());

    })

    let left = await promise2;

    const promise3 = new Promise((resolve) => {

        array1.forEach(element => {

            columns.find(el => el.number === element).resetClass();

        });

        array.forEach(element => {

            columns.find(el => el.number === element).resetClass();

        });

        setTimeout(() => {

            resolve(mergeSort(array, startIndex + lengthArray1, columns));

        }, setSpeed());

    })

    let right = await promise3;

    return merge(left, right, startIndex, columns);

}

// Слияние двух массивов
async function merge(array1, array2, startIndex, columns) {

    const promise1 = new Promise((resolve) => {

        array1.forEach(element => {

            columns.find(el => el.number === element).setClass('current');

        });

        array2.forEach(element => {

            columns.find(el => el.number === element).setClass('current');

        });

        setTimeout(() => {

            resolve();

        }, setSpeed());

    })

    await promise1;

    let mergeArray = [];

    while (array1.length && array2.length) {

        if (array1[0] < array2[0]) {

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

    const promise2 = new Promise((resolve) => {

        mergeArray.forEach(element => {

            if (element != columns[startIndex].number) {

                columns[startIndex].number = element;

            }

            startIndex++;

        });

        setTimeout(() => {

            resolve();

        }, setSpeed());

    })

    await promise2;

    const promise3 = new Promise((resolve) => {

        mergeArray.forEach(element => {

            columns.find(el => el.number === element).resetClass();

        });

        setTimeout(() => {

            resolve();

        }, setSpeed());

    })

    await promise3;

    startIndex -= mergeArray.length;

    let numbers = [];

    columns.forEach(element => {

        numbers.push(element.number);

    });

    console.log(numbers);

    return mergeArray;

}

// Подсвечивание всех колонок после завершения сортировки
function finishFlash(columns) {

    columns.forEach(element => {

        element.flash();

    });

    startBtn.disabled = false;
    restartBtn.disabled = false;
    mixBtn.disabled = false;

}

document.addEventListener('DOMContentLoaded', function () {

    createSortBox(document.getElementById('merge_sort'), async (columns) => {

        const array = [];

        columns.forEach(element => {

            array.push(element.number);

        });

        let numbers = [];

        array.forEach(element => {

            numbers.push(element);

        });

        console.log(numbers);

        const promise = new Promise((resolve) => {

            resolve(mergeSort(array, 0, columns));

        })

        await promise;

        finishFlash(columns);

    })

})

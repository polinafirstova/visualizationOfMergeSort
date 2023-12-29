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
    resetClass(status) {

        this.column.classList.remove(status);

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

        if (NUMBERS_COUNT <= 20) {

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

    // Установка номера строки
    set number(value) {

        this._number = value;

        this.stringNumber.textContent = this.number;

    }

    // Получение значения элемента
    get number() {

        return this._number;

    }

    // Установка значения строки
    set text(value) {

        this._text = value;

        this.stringText.textContent = this.text;

    }

    // Получение значения элемента
    get text() {

        return this._text;

    }

    // Добавление класса
    setClass(status) {

        this.string.classList.add(status);

    }

    // Удаление класса
    resetClass(status) {

        this.string.classList.remove(status);

    }

}

// Создание элементов HTML
const info = document.createElement('div'); // бокс с кнопками, количеством элементов и скоростью
const boxContainer = document.createElement('div'); // обертка сортировки
const code = document.createElement('div'); // бокс с кодом алгоритма
const codePre = document.createElement('pre'); // обертка кода
const codeCode = document.createElement('code'); // обертка кода
const box = document.createElement('div'); // бокс для двух сортировок
const upBox = document.createElement('div'); // бокс для дополнительной части массива
const chartBox = document.createElement('div'); // бокс с сортировкой
const btnBox = document.createElement('div'); // бокс с кнопками
const countBox = document.createElement('div'); // бокс с количеством элементов и скоростью
const backBtn = document.createElement('button'); // кнопка назад
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
    box.classList.add('box2');
    upBox.classList.add('up-box');
    backBtn.classList.add('back-btn');
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
    backBtn.textContent = '←';
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
    speed.readOnly = true;
    numbersCount.type = 'number';
    speed.type = 'number';
    maxBtnNumberCount.textContent = '+';
    maxBtnSpeed.textContent = '+';

    // Уменьшение количества элементов в массиве
    minBtnNumberCount.addEventListener('click', function () {

        if (numbersCount.value > 10 && numbersCount.value <= 50) {

            numbersCount.value--;
            NUMBERS_COUNT--;
            setNumbersCount();

        } else if (numbersCount.value <= 10) {

            numbersCount.value = 10;
            NUMBERS_COUNT = numbersCount.value;

        } else if (numbersCount.value > 50) {

            numbersCount.value = 50;
            NUMBERS_COUNT = numbersCount.value;

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

        if (numbersCount.value >= 10 && numbersCount.value < 50) {

            numbersCount.value++;
            NUMBERS_COUNT++;
            setNumbersCount();

        } else if (numbersCount.value <= 10) {

            numbersCount.value = 10;
            NUMBERS_COUNT = numbersCount.value;

        } else if (numbersCount.value > 50) {

            numbersCount.value = 50;
            NUMBERS_COUNT = numbersCount.value;

        }

    })

    // Увеличение скорости
    maxBtnSpeed.addEventListener('click', function () {

        if (speed.value < 2) {

            speed.value = Number(speed.value) + 0.25;

        }

    })

    // Изменение количества элементов в массиве
    numbersCount.addEventListener('input', () => {

        if (numbersCount.value < 10) {

            NUMBERS_COUNT = 10;

        } else if (numbersCount.value > 50) {

            NUMBERS_COUNT = 50;

        } else {

            NUMBERS_COUNT = numbersCount.value;

        }

        setNumbersCount();

    })

    // Добавление созданных элементов HTML на страницу
    btnBox.append(backBtn);
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
    codePre.append(codeCode);
    code.append(codePre);
    boxContainer.append(code);
    box.append(upBox);
    box.append(chartBox);
    boxContainer.append(box);
    container.append(info);
    container.append(boxContainer);

    // Массивы с числами, колонками, копиями колонок
    let numbers = [];
    let columns = [];
    let columnsUp = [];
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
        columnsUp = [];
        copyColumns = [];

        upBox.setAttribute('style', `grid-template-columns: repeat(${NUMBERS_COUNT}, 1fr);`);
        chartBox.setAttribute('style', `grid-template-columns: repeat(${NUMBERS_COUNT}, 1fr);`);

        numbers.forEach(element => {

            columns.push(new Column(chartBox, element));
            columnsUp.push(new Column(upBox, element));
            copyColumns.push(element);

        });

        columnsUp.forEach(element => {

            element.setClass('up');

        })

    }

    mergeSortCode();

    // Добавление кода сортировки на страницу
    function mergeSortCode() {

        stringsOfCode = [];

        i = 1;

        stringsOfCode.push(new Code(codeCode, i++, ".  split(array) {"));
        stringsOfCode.push(new Code(codeCode, i++, ".     if (array.length < 2) return array;"));
        stringsOfCode.push(new Code(codeCode, i++, ".     lengthArray1 = array.length / 2;"));
        stringsOfCode.push(new Code(codeCode, i++, ".     array1 = array.copy(0, lengthArray1);"));
        stringsOfCode.push(new Code(codeCode, i++, ".     array2 = array.copy(lengthArray1, -1);"));
        stringsOfCode.push(new Code(codeCode, i++, ".     left = split(array1);"));
        stringsOfCode.push(new Code(codeCode, i++, ".     right = split(array2);"));
        stringsOfCode.push(new Code(codeCode, i++, ".     return merge(left, right);"));
        stringsOfCode.push(new Code(codeCode, i++, ".  }"));
        stringsOfCode.push(new Code(codeCode, i++, "."));
        stringsOfCode.push(new Code(codeCode, i++, ". merge(left, right) {"));
        stringsOfCode.push(new Code(codeCode, i++, ".    mergeArray = [];"));
        stringsOfCode.push(new Code(codeCode, i++, ".    while (left.length && right.length) {"));
        stringsOfCode.push(new Code(codeCode, i++, ".       if (left[0] < right[0]) {"));
        stringsOfCode.push(new Code(codeCode, i++, ".          mergeArray.push(left.popFirst());"));
        stringsOfCode.push(new Code(codeCode, i++, ".       } else {"));
        stringsOfCode.push(new Code(codeCode, i++, ".          mergeArray.push(right.popFirst());"));
        stringsOfCode.push(new Code(codeCode, i++, ".       }"));
        stringsOfCode.push(new Code(codeCode, i++, ".    }"));
        stringsOfCode.push(new Code(codeCode, i++, ".    if (left.length) {"));
        stringsOfCode.push(new Code(codeCode, i++, ".       while (left.length) {"));
        stringsOfCode.push(new Code(codeCode, i++, ".          mergeArray.push(left.popFirst());"));
        stringsOfCode.push(new Code(codeCode, i++, ".       }"));
        stringsOfCode.push(new Code(codeCode, i++, ".    }"));
        stringsOfCode.push(new Code(codeCode, i++, ".    if (right.length) {"));
        stringsOfCode.push(new Code(codeCode, i++, ".       while (right.length) {"));
        stringsOfCode.push(new Code(codeCode, i++, ".          mergeArray.push(right.popFirst());"));
        stringsOfCode.push(new Code(codeCode, i++, ".       }"));
        stringsOfCode.push(new Code(codeCode, i++, ".    }"));
        stringsOfCode.push(new Code(codeCode, i++, ".    return mergeArray;"));
        stringsOfCode.push(new Code(codeCode, i++, ". }"));

    }

    // Кнопка назад
    backBtn.addEventListener('click', function () {

        document.location = '../index.html';

    })

    // Кнопка старт
    startBtn.addEventListener('click', function () {

        startBtn.disabled = true;
        restartBtn.disabled = true;
        mixBtn.disabled = true;
        sortFunction(columns, columnsUp);

    })

    // Кнопка перезапустить
    restartBtn.addEventListener('click', async function () {

        startBtn.disabled = true;
        restartBtn.disabled = true;
        mixBtn.disabled = true;

        const promise = new Promise((resolve) => {

            for (let i = 0; i < copyColumns.length; i++) {

                columns[i].number = copyColumns[i];
                columnsUp[i].number = copyColumns[i];

            }

            setTimeout(() => {

                resolve()

            }, 1000);

        })

        await promise;

        sortFunction(columns, columnsUp);

    })

    // Кнопка перемешать
    mixBtn.addEventListener('click', function () {

        numbers.sort(() => Math.random() - 0.5);

        for (let i = 0; i < numbers.length; i++) {

            columns[i].number = numbers[i];
            columnsUp[i].number = numbers[i];
            copyColumns[i] = numbers[i];

        }

    })

    // Задание количества элементов в массиве
    function setNumbersCount() {

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

// Поднять элементы наверх
function changeUp(columns, columnsUp, i) {

    columns.find(el => el.number === i).setClass('up');
    columnsUp.find(el => el.number === i).resetClass('up');

}

// Опустить элементы вниз
function changeUpBack(columns, columnsUp, i) {

    columns.find(el => el.number === i).resetClass('up');
    columnsUp.find(el => el.number === i).setClass('up');

}

// Разделение массива
async function mergeSort(array, startIndex, columns, columnsUp) {

    columns.forEach(element => {

        element.resetClass('left');
        element.resetClass('right');
        element.resetClass('current');

    });

    stringsOfCode[5].resetClass('highlightCode');
    stringsOfCode[6].resetClass('highlightCode');
    stringsOfCode[7].resetClass('highlightCode');
    stringsOfCode[10].resetClass('highlightCode');
    stringsOfCode[0].setClass('highlightCode');

    array.forEach(element => {

        columns.find(el => el.number === element).setClass('current');

    });

    stringsOfCode[0].resetClass('highlightCode');

    const promise1 = new Promise((resolve) => {

        stringsOfCode[1].setClass('highlightCode');

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise1;

    if (array.length < 2) {

        stringsOfCode[1].resetClass('highlightCode');

        return array;

    }

    stringsOfCode[1].resetClass('highlightCode');

    const promise2 = new Promise((resolve) => {

        stringsOfCode[2].setClass('highlightCode');

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise2;

    const lengthArray1 = Math.trunc(array.length / 2);

    stringsOfCode[2].resetClass('highlightCode');

    const array1 = array.splice(0, lengthArray1);

    stringsOfCode[3].setClass('highlightCode');

    array1.forEach(element => {

        columns.find(el => el.number === element).setClass('left');

    });

    const promise3 = new Promise((resolve) => {

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise3;

    stringsOfCode[3].resetClass('highlightCode');
    stringsOfCode[4].setClass('highlightCode');

    array.forEach(element => {

        columns.find(el => el.number === element).setClass('right');

    });

    const promise4 = new Promise((resolve) => {

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise4;

    stringsOfCode[4].resetClass('highlightCode');
    stringsOfCode[5].setClass('highlightCode');

    const promise5 = new Promise((resolve) => {

        setTimeout(() => {

            resolve(mergeSort(array1, startIndex, columns, columnsUp));

        }, setSpeed() / 2);

    })

    let left = await promise5;

    stringsOfCode[5].resetClass('highlightCode');
    stringsOfCode[6].setClass('highlightCode');

    const promise6 = new Promise((resolve) => {

        setTimeout(() => {

            resolve(mergeSort(array, startIndex + lengthArray1, columns, columnsUp));

        }, setSpeed() / 2);

    })

    let right = await promise6;

    stringsOfCode[6].resetClass('highlightCode');

    const promise7 = new Promise((resolve) => {

        stringsOfCode[7].setClass('highlightCode');

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise7;

    return merge(left, right, startIndex, columns, columnsUp);

}

// Слияние двух массивов
async function merge(array1, array2, startIndex, columns, columnsUp) {

    stringsOfCode[0].resetClass('highlightCode');
    stringsOfCode[5].resetClass('highlightCode');
    stringsOfCode[6].resetClass('highlightCode');
    stringsOfCode[7].resetClass('highlightCode');
    stringsOfCode[10].setClass('highlightCode');

    const promise1 = new Promise((resolve) => {

        array1.forEach(element => {

            columns.find(el => el.number === element).setClass('current');
            columnsUp.find(el => el.number === element).resetClass('right');
            columnsUp.find(el => el.number === element).setClass('left');

        });

        array2.forEach(element => {

            columns.find(el => el.number === element).setClass('current');
            columnsUp.find(el => el.number === element).resetClass('left');
            columnsUp.find(el => el.number === element).setClass('right');

        });

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise1;

    stringsOfCode[10].resetClass('highlightCode');
    stringsOfCode[11].setClass('highlightCode');

    const promise2 = new Promise((resolve) => {

        array1.forEach(element => {

            changeUp(columns, columnsUp, element);

        });

        array2.forEach(element => {

            changeUp(columns, columnsUp, element);

        });

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise2;

    stringsOfCode[11].resetClass('highlightCode');

    let mergeArray = [];
    let mergeArrayCopy = [];

    while (array1.length && array2.length) {

        const promise3 = new Promise((resolve) => {

            stringsOfCode[12].setClass('highlightCode');

            setTimeout(() => {

                resolve();

            }, setSpeed() / 2);

        })

        await promise3;

        stringsOfCode[12].resetClass('highlightCode');

        const promise4 = new Promise((resolve) => {

            stringsOfCode[13].setClass('highlightCode');

            setTimeout(() => {

                resolve();

            }, setSpeed() / 2);

        })

        await promise4;

        stringsOfCode[13].resetClass('highlightCode');

        if (array1[0] < array2[0]) {

            const promise5 = new Promise((resolve) => {

                stringsOfCode[14].setClass('highlightCode');

                setTimeout(() => {

                    resolve();

                }, setSpeed() / 2);

            })

            await promise5;

            mergeArray.push(array1.shift());
            columns[startIndex].number = mergeArray.shift();
            mergeArrayCopy.push(columns[startIndex].number);
            changeUpBack(columns, columnsUp, columns[startIndex].number);
            startIndex++;
            stringsOfCode[14].resetClass('highlightCode');

        } else {

            const promise6 = new Promise((resolve) => {

                stringsOfCode[15].setClass('highlightCode');

                setTimeout(() => {

                    resolve();

                }, setSpeed() / 2);

            })

            await promise6;

            mergeArray.push(array2.shift());
            columns[startIndex].number = mergeArray.shift();
            mergeArrayCopy.push(columns[startIndex].number);
            changeUpBack(columns, columnsUp, columns[startIndex].number);
            startIndex++;
            stringsOfCode[15].resetClass('highlightCode');

            const promise7 = new Promise((resolve) => {

                stringsOfCode[16].setClass('highlightCode');

                setTimeout(() => {

                    resolve();

                }, setSpeed() / 2);

            })

            await promise7;

            stringsOfCode[16].resetClass('highlightCode');

            const promise8 = new Promise((resolve) => {

                stringsOfCode[17].setClass('highlightCode');
                setTimeout(() => {

                    resolve();

                }, setSpeed() / 2);

            })

            await promise8;

            stringsOfCode[17].resetClass('highlightCode');

        }

    }

    const promise9 = new Promise((resolve) => {

        stringsOfCode[18].setClass('highlightCode');

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise9;

    stringsOfCode[18].resetClass('highlightCode');

    const promise10 = new Promise((resolve) => {

        stringsOfCode[19].setClass('highlightCode');

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise10;

    stringsOfCode[19].resetClass('highlightCode');

    if (array1.length) {

        while (array1.length) {

            const promise11 = new Promise((resolve) => {

                stringsOfCode[20].setClass('highlightCode');

                setTimeout(() => {

                    resolve();

                }, setSpeed() / 2);

            })

            await promise11;

            stringsOfCode[20].resetClass('highlightCode');

            const promise12 = new Promise((resolve) => {

                stringsOfCode[21].setClass('highlightCode');

                setTimeout(() => {

                    resolve();

                }, setSpeed() / 2);

            })

            await promise12;

            mergeArray.push(array1.shift());
            columns[startIndex].number = mergeArray.shift();
            mergeArrayCopy.push(columns[startIndex].number);
            changeUpBack(columns, columnsUp, columns[startIndex].number);
            startIndex++;
            stringsOfCode[21].resetClass('highlightCode');

            const promise13 = new Promise((resolve) => {

                stringsOfCode[22].setClass('highlightCode');

                setTimeout(() => {

                    resolve();

                }, setSpeed() / 2);

            })

            await promise13;

            stringsOfCode[22].resetClass('highlightCode');

        }

    }

    const promise14 = new Promise((resolve) => {

        stringsOfCode[23].setClass('highlightCode');

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise14;

    stringsOfCode[23].resetClass('highlightCode');

    const promise15 = new Promise((resolve) => {

        stringsOfCode[24].setClass('highlightCode');

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise15;

    stringsOfCode[24].resetClass('highlightCode');

    if (array2.length) {

        while (array2.length) {

            const promise16 = new Promise((resolve) => {

                stringsOfCode[25].setClass('highlightCode');

                setTimeout(() => {

                    resolve();

                }, setSpeed() / 2);

            })

            await promise16;

            stringsOfCode[25].resetClass('highlightCode');

            const promise17 = new Promise((resolve) => {

                stringsOfCode[26].setClass('highlightCode');

                setTimeout(() => {

                    resolve();

                }, setSpeed() / 2);

            })

            await promise17;

            mergeArray.push(array2.shift());
            columns[startIndex].number = mergeArray.shift();
            mergeArrayCopy.push(columns[startIndex].number);
            changeUpBack(columns, columnsUp, columns[startIndex].number);
            startIndex++;
            stringsOfCode[26].resetClass('highlightCode');

            const promise18 = new Promise((resolve) => {

                stringsOfCode[27].setClass('highlightCode');

                setTimeout(() => {

                    resolve();

                }, setSpeed() / 2);

            })

            await promise18;

            stringsOfCode[27].resetClass('highlightCode');

        }

        const promise19 = new Promise((resolve) => {

            stringsOfCode[28].setClass('highlightCode');

            setTimeout(() => {

                resolve();

            }, setSpeed() / 2);

        })

        await promise19;

        stringsOfCode[28].resetClass('highlightCode');

    }

    const promise20 = new Promise((resolve) => {

        stringsOfCode[29].setClass('highlightCode');

        setTimeout(() => {

            resolve();

        }, setSpeed() / 2);

    })

    await promise20;

    stringsOfCode[29].resetClass('highlightCode');

    startIndex -= mergeArrayCopy.length;

    let numbers = [];
    let i = 0;

    columns.forEach(element => {

        numbers.push(element.number);
        columnsUp[i].number = element.number;
        i++;

    });

    console.log(numbers);

    return mergeArrayCopy;

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

    createSortBox(document.getElementById('merge_sort'), async (columns, columnsUp) => {

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

            resolve(mergeSort(array, 0, columns, columnsUp));

        })

        await promise;

        columns.forEach(element => {

            element.resetClass('current');

        });

        finishFlash(columns);

    })

})

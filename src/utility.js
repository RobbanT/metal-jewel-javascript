"use strict";

class Utility {
    static clampMin(num, minNum) {
        return num < minNum ? minNum : num;
    }

    static clampMax(num, maxNum) {
        return num > maxNum ? maxNum : num;
    }

    static clamp(num, minNum, maxNum) {
        let clampNum = num;
        clampNum = Utility.clampMin(num, minNum);
        clampNum = Utility.clampMax(num, maxNum);
        return clampNum;
    }

    static saveToLocalStorage(id, value) {
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === id) {
                console.warn('Overwriting item "' + id + '" with a new value.');
            }
        }
        localStorage.setItem(id, value);
    }

    static readFromLocalStorage(id) {
        let value = null;
        try {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) === id) {
                    value = localStorage.getItem(localStorage.key(i));
                    break;
                }
            }
            if (value === null) {
                throw 'Item with key "' + id + '" was not found in local storage.';
            }
        } catch (err) {
            console.console.error(err);
        }
        return value;
    }
}

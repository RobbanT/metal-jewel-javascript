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

    static save(name, value) {
        localStorage.setItem(name, value);
    }

    static read(name) {
        return localStorage.getItem(name);
    }
}
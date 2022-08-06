function isLeapYear(year) {
    if (year % 4 == 0 || year % 400 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const checkLeapYear1 = isLeapYear(2000);
const checkLeapYear2 = isLeapYear(2015);

console.log(checkLeapYear1);
console.log(checkLeapYear2);

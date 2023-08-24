export const isLeapYear = (year) => {
    if (Number(year).toString().slice(-2) === "00") {
        if (Number(year) % 400 === 0) {
            return true;
        } else {
            return false
        }
        // for the rest of the years, they have to be divisible by 4 in order to be leap year
    } else if (Number(year % 4 === 0)){
        return true;
    } else {
        return false;
    }
}


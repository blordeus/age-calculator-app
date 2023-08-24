export const isLeapYear = (year) => {
    // if the year represents the end of a century 
    if (Number(year).toString().slice(-2) === "00") {
        if (Number(year) % 400 === 0) {
            return true;
        } else {
            return false
        }
        // for the rest of the years, they have to be divisible by 4 in order to be a leap year
    } else if (Number(year % 4 === 0)){
        return true;
    } else {
        return false;
    }
}

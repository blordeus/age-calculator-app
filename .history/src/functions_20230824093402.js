export const isLeapYear = (year) => {
    if (Number(year).toString().slice(-2) === "00") {
        if (Number(year) % 400 === 0) {
            return true;
        } else {
            return fals
        }
    }
}
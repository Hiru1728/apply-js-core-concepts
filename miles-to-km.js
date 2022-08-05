function milesToKilometer(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}
const miles = 50;
const totalkm = milesToKilometer(miles);
console.log(totalkm);
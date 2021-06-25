// Bài tập 5
// Đầu vào
var number = 84;
//  Xử lý
var hangChuc = Math.round(number/10);
var hangDonVi = number%10;
var sum = hangDonVi + hangChuc;

// Đầu ra 
console.group()
console.log("Tổng 2 ký số:",sum);
console.groupEnd();
//Exercise #5: Shopping and Discount

// Start coding here
let totalPrice = 27000;
let discountPercent = 25;

//จำนวนเงินที่ได้ลด
let discountAmount = (totalPrice * discountPercent) / 100 ;

//จำนวนเงินที่จ่ายตามจริงหลังหักส่วนลด
let mustPaid = totalPrice - discountAmount
console.log(mustPaid);


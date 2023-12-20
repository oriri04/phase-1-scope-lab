var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
  upperCaseCustomerName();
  console.log(customerName); 


var customerName = 'bob';
console.log(customerName);


var bestCustomer = 'not bob';
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
console.log(bestCustomer); 
overwriteBestCustomer();
console.log(bestCustomer); 

var bestCustomer = 'maybe bob'
function setBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  setBestCustomer();
  console.log(bestCustomer); 
  

const leastFavoriteCustomer = 'Mark';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob';
}
console.log(leastFavoriteCustomer); 







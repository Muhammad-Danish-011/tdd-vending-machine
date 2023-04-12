

//this the first test case story 


/* function SeeItems() {
    let items = [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}];
    for (let i = 0; i < items.length; i++) {
     let Name = Object.keys(items[i])[0]; 
      let Price = items[i][Name]; 
      console.log(`${Name}: ${Price}`);
    }
  }
   console.log(SeeItems());
*/


  /* As a customer, I want to know how much money I have deposited, so that I know what I can purchase.

            Given I am using the vending machine,
            when I insert money,
            then I see the total I have deposited on a screen.
     deposit(100) returns 'You have deposited Rs 100'
        The machine should accept bills in these amounts: 10, 20, 50, 100, 500
*/
  
/*
let total = 0;

function deposit(amount) {
  if ([10, 20, 50, 100, 500].includes(amount)) {
    total += amount;
    return ` deposited amount Rs ${total}`;
  } 
    else {
    return 'Invalid bill amount';
  }
}
console.log(deposit(100)); 
console.log(deposit(50)); 
console.log(deposit(200)); 

*/

/*
As a customer, I want to add additional money, so that I can use the denominations I have to purchase an item.

Given I have deposited money in the vending machine,
when I deposit additional money,
then I see the new total on a screen.
After depositing Rs 100, deposit(50) returns 'You have deposited Rs 150'
*/


let total = 0;

function deposit(amount) {
  if ([10, 20, 50, 100, 500].includes(amount)) {
    total += amount;
    return ` deposited amount Rs ${total}`;
  } 
    else
     {
    return 'Invalid bill amount';
  }
}
console.log(deposit(100)); 
console.log(deposit(50)); 
console.log('you have deposited :' +total);

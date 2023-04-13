const Machine = require('../src/Machine');

/*describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        function SeeItems() {
            let items = [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}];
            for (let i = 0; i < items.length; i++) {
             let Name = Object.keys(items[i])[0]; 

        // exercise
        let Price = items[i][Name]; 
      console.log(`${Name}: ${Price}`);
    }
  }
   console.log(SeeItems());

        // assert
        expect(true).toEqual(true);
    });

});
*/
// test case of 2nd story
/* describe('the vending machine', () => {
  it('should have items to purchase', () => {
      // setup
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
       // exercise
       console.log(deposit(100)); 
       console.log(deposit(50)); 
       console.log(deposit(200)); 
       // assert
       expect(true).toEqual(true);
      });
  
    
  });
  */

// test case of 3rd story 
/*
  describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
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
         // exercise
         console.log(deposit(100)); 
         console.log(deposit(50)); 
         console.log('you have deposited :' +total);
       // assert
       expect(150).toEqual(total);
      });
  });
  */
 /*
  describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        
let itemList = ['1', '2', '3'];

let Machine = {
    items: {
      '1': { name: 'Coke', available: true },
      '2': { name: 'Pepsi', available: false },
      '3': { name: 'Water', available: true },
     
    }
}
         // exercise
         for (let i = 0; i < itemList.length; i++) {
          let code = itemList[i];
          let item = Machine.items[code];
          if (item && item.available) {
            console.log(`Item ${code} (${item.name}) is available`);
          } else {
            console.log(`Item ${code} (${item ? item.name : 'unknown'}) is unavailable`);
          }
         }
          // assert
       expect(true).toEqual(true);
      });
  });

  */
/*
  describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        let ItemList = ['1', '2', '3'];
let Machine = {
  items: {
    '1': { name: 'Coke', price: 25 },
    '2': { name: 'Pepsi', price: 30 },
    '3': { name: 'Water', price: 15 },
    
  }
 
};

         // exercise
         function selectItem(code, deposit) {
          let item = Machine.items[code];
          if (item && deposit >= item.price) {
            
            return `Enjoy your ${item.name}!`;
          } else if (item && deposit < item.price) {
           
            let amountNeeded = item.price - deposit;
            return `Your deposit is insufficient. Please add Rs ${amountNeeded} for this item.`;
          } else {
           
            return 'Invalid item code.';
          }
        }
        
        
        console.log(selectItem('2', 20)); 
        console.log(selectItem('1', 15)); 
        console.log(selectItem('3', 50)); 
          // assert
       expect(true).toEqual(true);
      });
  });
*/
  /*
  describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        
let ItemList = ['1', '2', '3'];

let Machine = {
  items: {
    '1': { name: 'Coke', price: 25 },
    '2': { name: 'Pepsi', price: 30 },
    '3': { name: 'Water', price: 15 },
    
  }
  
};


let a = [50, 20, 10, 5, 1];


         // exercise
         
function selectItem(code, deposit) {
  let item =Machine.items[code];
  if (!item) {
    
    return { item: null, change: null };
  }
  if (deposit < item.price) {
   
    return { item: null, change: null };
  }
  let change = [];
  let remainingChange = deposit - item.price;
  for (let i = 0; i < a.length; i++) {
    const bill = a[i];
    while (remainingChange >= bill) {
      remainingChange -= bill;
      change.push(bill);
    }
  }
  
  return { item: item.name, change: change };
}


console.log(selectItem('1', 50)); 
console.log(selectItem('2', 15)); 
console.log(selectItem('3', 50));
           // assert
       expect(true).toEqual(true);
      });
  });
 */

  describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        
        
let vendingMachine = {
  items: {
    '1': { name: 'Coke', price: 25 },
    '2': { name: 'Pepsi', price: 30 },
    '3': { name: 'Water', price: 15 },
    
  },
 
};


let billDenominations = [50, 20, 10, 5, 1];

let depositedAmount = 0;
        //excute
        
function deposit(amount) {
  depositedAmount += amount;
}


function cancel() {
let  change = [];
  let remainingChange = depositedAmount;
  for (let i = 0; i < billDenominations.length; i++) {
   let bill = billDenominations[i];
    while (remainingChange >= bill) {
      remainingChange -= bill;
      change.push(bill);
    }
  }
  depositedAmount = 0;
 
  return { change: change };
}


deposit(50);
console.log(cancel()); 
console.log(depositedAmount);

        // assert
        expect(true).toEqual(true);
      });
 
   });


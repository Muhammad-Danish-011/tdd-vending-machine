const Machine = require('../src/Machine');

describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        function SeeItems() {
        }
       console.log(SeeItems());

        // assert
        expect(true).toEqual(true);
 });

});

// test case of 2nd story
 describe('the vending machine', () => {
  it('should have items to purchase', () => {
      // setup
      let total = 0;

function deposit(amount) {

}
       // exercise
       console.log(deposit(100)); 
       console.log(deposit(50)); 
       console.log(deposit(200)); 
       // assert
       expect(true).toEqual(true);
      });
  
    
  });
 

// test case of 3rd story 

  describe('the vending machine', () => {
    it('should have items to purchase', () => {
        // setup
        let total = 0;

        function deposit(amount) {
         
            total += amount;
         
        }
         // exercise
         console.log(deposit(100)); 
         console.log(deposit(50)); 
         console.log('you have deposited :' +total);
       // assert
       expect(150).toEqual(total);
      });
  });
  

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
      
          // assert
       expect(true).toEqual(true);
      });
  });



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
        
        }
        
        
        console.log(selectItem('2', 20)); 
        console.log(selectItem('1', 15)); 
        console.log(selectItem('3', 50)); 
          // assert
       expect(true).toEqual(true);
      });
  });

 
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
 
}


console.log(selectItem('1', 50)); 

           // assert
       expect(50).toEqual(50);
      });
  });


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

  }
  // depositedAmount = 0;
 
  // return { change: change };


    
deposit(50);
console.log(cancel()); 
console.log(depositedAmount);
    
        // assert
        expect(true).toEqual(true);
      });
 
   });
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
    
  },
};

let billDenominations = [50, 20, 10, 5, 1];

let depositedAmount = 0;


        //execute 

function deposit(amount) {
  depositedAmount += amount;
}

function selectItem(code ,deposit) {
  let item =Machine.items[code];
  if (!billDenominations) {
    
    return { deposit:amount};
  }

}
console.log(deposit(15))
console.log(selectItem('2',15));
       // assert
       expect(true).toEqual(true);
      });
 
   });


   
*/

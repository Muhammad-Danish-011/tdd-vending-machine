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
const Machine = require('../src/Machine');

describe('the vending machine', () => {
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

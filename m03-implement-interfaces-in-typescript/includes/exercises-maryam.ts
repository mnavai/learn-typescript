
  interface IceCream {
    flavor: String;
    scoops: Number;
    instructions?: String;
  }

//implement the new interface

  let iceCream: IceCream = {
    flavor: 'cherry',
    scoops: 2
  }

  console.log(iceCream.flavor)

  function tooManyScoops(dessert: IceCream) {
    if(dessert.flavor ==="cherry"){
        return "Order is ready"

    }
    else return "Please wait"
  }

  console.log(tooManyScoops({flavor:"cherry",scoops:2}));

  interface Sundae extends IceCream {
    sauce: String;
    nuts? : boolean;
    whippedCream? : boolean;
    instructions? : String;
  }

  let myIceCream : Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
  }
function tooManyScoops(dessert: Sundae) {
    if(dessert.flavor ==="cherry"){
        return "Order is ready"

    }
    else return "Please wait"
  }

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));


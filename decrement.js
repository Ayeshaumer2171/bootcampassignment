//problem 4


function decrementCart(cart,product){
    const updatedCart = cart.map((productElement) => {
        if (product.id === productElement.id) {
          const newQty = product.qty - 1;
          return { ...product, qty: newQty };
        } else {
          return productElement;
        }
      }).filter((product) => product.qty > 0);

    
      return updatedCart;  
    
    }

let cart =[
    {id:3,price:300,discount:0.1,qty:1,total:540},
    {id:5,price:500,discount:0.05,qty:2,total:950},
    {id:1,price:100,discount:0.1,qty:1,total:90}
    
]
    let product = cart[0];
    cart = decrementCart(cart, product);
    console.log(cart);
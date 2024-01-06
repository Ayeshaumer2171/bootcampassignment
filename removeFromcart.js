//problem 2

  function removeFromCart(cart,product){
    let result=[];
    const updateArray=cart.filter((element)=>element!==product)
  result.push(updateArray);
return result;
    }

  let cart =[
    {id:3,price:300,discount:0.1,qty:2,total:540},
    {id:5,price:500,discount:0.05,qty:2,total:950},
    {id:1,price:100,discount:0.1,qty:1,total:90}
    ]

    let product = cart[1];
    cart = removeFromCart(cart, product);
    console.log(cart);
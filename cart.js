  //problem 1

  let products=[
    {id:1,price:100,discount:0.10},
    {id:2,price:200,discount:0.10},
    {id:3,price:300,discount:0.10},
    {id:4,price:400,discount:0.10},
    {id:5,price:500,discount:0.05}, 
     ]
     let cart=[];

     function addToCart(cart,product){
   const existingProduct=cart.find((item)=>{item.id===product.id})
   if(existingProduct){
    existingProduct.qty+=1;
    existingProduct.total=existingProduct.price*existingProduct.discount;
   }else{
  const newItem = {
            id: product.id,
            price: product.price,
            discount: product.discount,
            qty: 5,
            total: product.price * product.discount,
          };
          cart.push(newItem);
        }
          return cart;
        }

// add to cart 
let product=products[2];
 cart = addToCart(cart,product);
console.log(cart);
//output:  [ { id: 3, price: 300, discount: 0.1, qty: 1, total: 270 } 


//problem 5


   function addDiscountProperty(products, discount) {
     return products.map((product) => {
         if (product.price > 1000) {
            return {
                ...product,
                discount: discount
            };
        }
           return product;
    });
  }



  let products = [
    {
    id: 1,
    name: 'Shirt-1',
    sizes: ['sm', 'md', 'lg', 'xl'],
    price: 800
    },
    {
    id: 2,
    name: 'Shirt-2',
    sizes: ['sm', 'md', 'lg', 'xl'],
    price: 1200
    },
    {
    id: 3,
    name: 'Shirt-3',
    sizes: ['sm', 'md', 'lg', 'xl'],
    price: 900
    },
    {
    id: 4,
    name: 'Shirt-4',
    sizes: ['sm', 'md', 'lg', 'xl'],
    price: 2000
      },
      {
     id: 5,
     name: 'Shirt-5',
     sizes: ['sm', 'md', 'lg', 'xl'],
     price: 400
      },
      {
     id: 6,
     name: 'Shirt-6',
     sizes: ['sm', 'md', 'lg', 'xl'],
     price: 1200
       },
       {
      id: 7,
      name: 'Shirt-7',
     sizes: ['sm', 'md', 'lg', 'xl'],
     price: 3400
       },
   
    ];
    let prods = addDiscountProperty(products, 0.10);
    console.log(prods);
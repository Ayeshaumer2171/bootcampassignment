// problem 6

 function filterProductsBySize(products, sizes) {
    if (sizes.length === 0) {
        return products;
    }

      return products.filter((product) => {
         if (product.sizes) {
            return product.sizes.some((size) => sizes.includes(size));
        }
        return false;
    });
    }


    
    let products = [
    
    {
    id: 1,
    name: 'Shirt-1',
    sizes: ['sm', 'md', 'lg', 'xl']
    },
    {
    id: 2,
    name: 'Shirt-2',
    sizes: ['lg', 'xl']
    },
    {
    id: 3,
    name: 'Shirt-3',
    sizes: ['sm', 'md'],
    },
    {
    id: 4,
    name: 'Shirt-4',
    sizes: ['md', 'lg', 'xl']
    },
    ];
    
    let sizes = ['sm'];
    let prods = filterProductsBySize(products, sizes);
    console.log(prods);
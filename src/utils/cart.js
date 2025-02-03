
// Your cart here
const cart = [
  {
    quantity: 1,
    price: 22285,
    product_id: "xyz",
    imgUrl: "img_url_here",
    name: "Cozy Knit Winter Sweater",
  },
  {
    quantity: 3,
    price: 4000,
    product_id: "abc",
    imgUrl: "img_url_here",
    name: "Cozy Winter Sweater",
  },
];


// All products here
const product = [
  {
    id: "xyz",
    name: "Cozy Knit Winter Sweater",
    price: 27.99,
    size: [8, 9, 10, 11, 12, 14, 16],
    imgUrl: "some_img_url_here",
    about: "",
    description: "",
    image_gallery: ["some_img_url_here_1", "some_img_url_here_2"],
  },
];


// This function handle adding item to cart 
const handleAddItemToCart = (item) => {
    const selectedProductId = item.id 
    
    const filterProduct = cart.filter((f) => f.product_id === selectedProductId)

    if (filterProduct.length) {
        const mappedCart = cart.map((d) => {
            if (d.product_id === selectedProductId) {
                return {
                    ...d,
                    quantity: d.quantity + 1
                }
            }
        })
        setCart(mappedCart)
    }else {
        const newCart = {
          quantity: 1,
          price: item.price,
          product_id: item.id,
          imgUrl: item.imgUrl,
          name: item.name,
        };
        setCart(newCart)
    }

}

// Write another function to remove item from cart here





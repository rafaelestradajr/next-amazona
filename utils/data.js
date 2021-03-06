import bcrypt from 'bcryptjs';


const data = {
  users:[{
    name:'Rafael',
    email:'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin:true,
  },

  {name:'Martha',
    email:'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin:false,
},
],
  products: [
    {
      name: "Free Shirt",
      slug:"free-shirt",
      category: "Shirts",
      image: "/images/shirt1.jpg",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
        name: "Fit Shirt",
        slug:'fit-shirt',
        category: "Shirts",
        image: "/images/shirt2.jpg",
        price: 80,
        brand: "Adidas",
        rating: 2.0,
        numReviews: 10,
        countInStock: 20,
        description: "A popular shirt",
      },
      {
        name: "Slim Shirt",
        slug:'slim-shirt',
        category: "Shirts",
        image: "/images/shirt3.jpg",
        price: 150,
        brand: "Rafael",
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: "A popular shirt",
      },
      {
        name: "Golf Pants",
        slug:'golf-pants',
        category: "Pants",
        image: "/images/pants1.jpg",
        price: 66,
        brand: "Dior",
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: "Smart looking pants",
      },
      {
        name: "Fit Pants",
        slug:'fit-pants',
        category: "Pants",
        image: "/images/pants2.jpg",
        price: 180,
        brand: "Armani",
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: "A popular pants",
      },
      {
        name: "Classic Pants",
        slug:'classic-pants',
        category: "Pants",
        image: "/images/pants3.jpg",
        price: 75,
        brand: "Ralph Lauren",
        rating: 4.5,
        numReviews: 10,
        countInStock: 20,
        description: " A favorite pants",
      },
  ],
};
 export default data;
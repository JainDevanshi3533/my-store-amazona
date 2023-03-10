import bcrypt from 'bcryptjs';

const data = {
  users:[
    {
      name:'Devanshi',
      email:"devanshi74@gmail.com",
      password:bcrypt.hashSync('12345'),
      isAdmin:true
    },
    {
      name:'abc',
      email:'abc12@gmail.com',
      password:bcrypt.hashSync('abc'),
      isAdmin:false
    }
  ],

  products: [
    {
      // _id: '1',
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 2.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/p2.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 400,
      countInStock: 14,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 13,
      description: 'high quality shirt',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 370,
      countInStock: 23,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
  ],
};

export default data;

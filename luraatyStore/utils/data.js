import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Abood",
      email: "admin@abood.com",
      password: bcrypt.hashSync("123456789"),
      isAdmin: true,
    },

    {
      name: "Noah",
      email: "user@noah.com",
      password: bcrypt.hashSync("123456789"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Free Shirt",
      slug: "free-shirt",
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
      name: "Nice Shirt",
      slug: "nice-shirt",
      category: "Shirts",
      image: "/images/shirt2.jpg",
      price: 80,
      brand: "Adidas",
      rating: 4.9,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Good Shirt",
      slug: "good-shirt",
      category: "Shirts",
      image: "/images/shirt3.jpg",
      price: 90,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Wow Pants",
      slug: "wow-pants",
      category: "Pants",
      image: "/images/pants1.jpg",
      price: 120,
      brand: "LV",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Free Pants",
      slug: "free-pants",
      category: "Pants",
      image: "/images/pants2.jpg",
      price: 95,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Gucci Pants",
      slug: "gucci-pants",
      category: "Pants",
      image: "/images/pants2.jpg",
      price: 225,
      brand: "Gucci",
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: "A popular pants",
    },
  ],
};

export default data;

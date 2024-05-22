export const sample_foods = [
  {
    id: '1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id: '2',
    name: 'MeatBall',
    cookTime: '20-30',
    price: 20,
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 5,
    imageUrl: 'food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id: '3',
    name: 'Hamburger',
    cookTime: '10-15',
    price: 5,
    favorite: false,
    origins: ['usa', 'germany'],
    stars: 5,
    imageUrl: 'food-3.jpg',
    tags: ['FastFood'],
  },
  {
    id: '4',
    name: 'Fried Potatoes',
    cookTime: '15-20',
    price: 2,
    favorite: true,
    origins: ['france', 'belgium'],
    stars: 5,
    imageUrl: 'food-4.jpg',
    tags: ['FastFood'],
  },
  {
    id: '5',
    name: 'Soup',
    cookTime: '15-20',
    price: 15,
    favorite: true,
    origins: ['france', 'belgium'],
    stars: 5,
    imageUrl: 'food-5.jpg',
    tags: ['SlowFood', 'Lunch', 'Soup'],
  },
]

export const sample_tags = [
  { name: 'All', count: 6},
  { name: 'FastFood', count: 3},
  { name: 'Lunch', count: 3},
  { name: 'Pizza', count: 1},
  { name: 'SlowFood', count: 2},
  { name: 'Soup', count: 1}
]

export const sample_users = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@gmail.com",
    password: '12345',
    address: "Bishkek",
    isAdmin: false
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "janedoe@gmail.com",
    password: '12345',
    address: "Almaty",
    isAdmin: true
  },
]
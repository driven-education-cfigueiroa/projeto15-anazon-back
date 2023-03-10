import bcrypt from 'bcrypt';

export const data = {
  users: [
    {
      name: 'Caio',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123', 10),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123', 10),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Jaqueta Windbreak Paradise',
      slug: 'jaqueta-windbreak-paradise',
      category: 'Casacos',
      image: '/images/p1.png',
      price: 951.15,
      countInStock: 0,
      brand: 'Reserva',
      rating: 4.4,
      numReviews: 7,
      description:
        'A Jaqueta Windbreak Paradise é indicada pra ser usada em dias mais frios.',
    },
    {
      // _id: '2',
      name: 'Polo Jazz Denim',
      slug: 'polo-jazz-denim',
      category: 'Polos',
      image: '/images/p2.png',
      price: 330.65,
      countInStock: 3,
      brand: 'Reserva',
      rating: 4.6,
      numReviews: 16,
      description: 'Polo Jazz Denim.',
    },
    {
      // _id: '3',
      name: 'Camisa Linho',
      slug: 'camisa-linho',
      category: 'Camisas',
      image: '/images/p3.png',
      price: 509.15,
      countInStock: 5,
      brand: 'Reserva',
      rating: 4.9,
      numReviews: 32,
      description:
        'A Camisa PF MC Linho é indicada para momentos casuais. Possui caimento reto, além de ser feita em 100% algodão.',
    },
    {
      // _id: '4',
      name: 'Short Casual Arara',
      slug: 'short-casual-arara',
      category: 'Bermudas',
      image: '/images/p4.png',
      price: 415.65,
      countInStock: 8,
      brand: 'Reserva',
      rating: 4.8,
      numReviews: 13,
      description: 'O Short Casual Arara é ideal pra ser usado no verão.',
    },
  ],
};

export default class BookService {
  constructor() {
    this.books = [
      {
        id: '1',
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
        price: 32,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
      },
      {
        id: '2',
        title: 'Release It!',
        author: 'Michael T. Nygard',
        price: 45,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
      }
    ];
    this.getAll = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.75) {
            resolve(this.books);
          } else {
            reject (new Error('Something wrong'))
          }
        }, 1000)
      })
    }
  }
}
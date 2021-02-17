const { Book } = require('./models')

Book.create({
    isbn: '1a0001',
    judul: 'judul 1',
    sinopsis: 'ini adalah sinopsi 1',
    penulis: 'penulis 1',
    genre: 'action'
})
.then (book => {
    console.log(book)
})
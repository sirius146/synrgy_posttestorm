const express = require("express")
const app = express();
 const { Book } = require("./models")

 app.use(express.json())
 app.use(express.urlencoded({ extended: true}))

 app.get('/books',(req,res)=> {
     Book.findAll()
     .then(books => {
         res.status(200).json(books)
     })
 })

 app.get('/books/:id',(req,res)=> {
     Book.findOne({
         where: {id: req.params.id}
     })
     .then(book => {
         res.status(200).json(book)
     })
 })

 app.post("/books", (req,res) => {
     const { isbn,judul,sinopsis,penulis,genre} = req.body
    Book.create({
        isbn: isbn,
        judul: judul,
        sinopsis:sinopsis,
        penulis:penulis,
        genre:genre
    })
    .then (() => {
        res.status(201).json({
            status: "Success",
            message: "berhasil diinput"
        }
        )
    })
})

app.put('/books/:id', (req,res) => {
    const { isbn,judul,sinopsis,penulis,genre} = req.body
    Book.update({
        isbn: isbn,
        judul: judul,
        sinopsis:sinopsis,
        penulis:penulis,
        genre:genre
    }, {
        where: {id: req.params.id}
    })
    .then(book => {
        res.status(201).json(book)
    }) .catch(err => {
        res.status(422).json("cant create book")
    })
})

app.delete('/books/:id',(req,res)=> {
    const id = req.params.id;
    Book.destroy({
        where: {id: id}
    })
    .then(() => {
        res.status(201).json({
            status: "Success",
            message: "berhasil dihapus"
        })
    })
})



app.listen(3030, () => {
    console.log("server ready!")
})
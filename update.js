const { Book } = require('./models')

const query = {
    where: { id:1 }
}

Book.update({
    penulis: 'penulis 1 edit'
}, query)
.then (() => {
    console.log("artikel updated")
    process.exit()
})
.catch(err => {
    console.error("gagal update")
})
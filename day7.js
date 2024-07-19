let book = {
    title: "Wheel of time",
    author: "Robert Jordan",
    year: 1978,
    getSum()  {
        return book.title + " by " + book.author
    },
    updateYear(newYear) {
        book.year = newYear
    }
}

console.log(book)

console.log("book.Title: ", book.title)
console.log("book.Author: ", book.author)

console.log("book.getSum: ", book.getSum())
// console.log("Type of book.getSum: ", typeof book.getSum())

book.updateYear(2008)
console.log("New book: ", book)

let library = {
    name: "Library",
    books: [
        book,
        {
            title: "Book 1",
            author: "Author 1",
            year: 2000
        },
        {
            title: "Book 2",
            author: "Author 2",
            year: 2001
        }
    ],
}

console.log(library)

console.log("Library name: ", library.name)
// console.log("Library book titles: ", library.books.map(b => b.title))
library.books.forEach(b => console.log(b.title))

b1 = {
    title: "Book 1",
    author: "Author 1",
    year: 2000
}
console.log("------------------- Keys and Books -------------------")
for(title in b1) {
    console.log(`property: ${title}, value: ${b1[title]}`)
}

console.log("------------------- Object.keys and Object.values -------------------")
console.log("Object.keys: ", Object.keys(b1))
console.log("Object.values: ", Object.values(b1))
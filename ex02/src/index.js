// Only change code below this line

class Book {
constructor(title) {
this._title = title;
}
// Get title
get title() {
    return this._title;
}
// Set title
set title(newTitle) {
    this._title = newTitle;
}
}
// Only change code above this line

const littlePrince = new Book("The Little Prince"); // Change this line
console.log(littlePrince.title); //The Little prince
littlePrince.title = "Le Petit Prince"; // Change this line
console.log(littlePrince.title); // Le Petit Prince

module.exports = Book;

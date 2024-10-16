class Book {
    #title;
    #author;
    #isAvailable;

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
        this.#isAvailable = true;
    }

    getTitle() {
        return this.#title;
    }

    getAuthor() {
        return this.#author;
    }

    isAvailable() {
        return this.#isAvailable;
    }

    checkoutBook() {
        if (this.#isAvailable) {
            this.#isAvailable = false;
            return true;
        } else {
            return false;
        }
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    checkoutBook(title) {
        const book = this.books.find(book => book.getTitle() === title);
        
        if (book && book.isAvailable()) {
            book.checkoutBook();
            console.log(`Ви взяли книгу "${book.getTitle()}" автора ${book.getAuthor()}.`);
        } else if (book) {
            console.log(`Вибачте, "${book.getTitle()}" недоступна.`);
        } else {
            console.log(`Книга з назвою "${title}" не знайдена у бібліотеці.`);
        }
    }

    viewAvailableBooks() {
        const availableBooks = this.books.filter(book => book.isAvailable());

        if (availableBooks.length > 0) {
            console.log("Доступні книги:");
            availableBooks.forEach(book => {
                console.log(`- "${book.getTitle()}" автора ${book.getAuthor()}`);
            });
        } else {
            console.log("Немає доступних книг.");
        }
    }
}

const myLibrary = new Library();
const book1 = new Book("Контопська Відьма", "Григорій Квітка-Основ'яненко");
const book2 = new Book("1984", "Джордж Орвелл");
const book3 = new Book("Великий Гетсбі", "Ф. Скотт Фіцджеральд");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("1984");
myLibrary.viewAvailableBooks();
myLibrary.checkoutBook("1984");

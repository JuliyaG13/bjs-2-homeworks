class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
	
    get state() {
        return this._state;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    fix() {
        if (this._state < 100 && this._state > 0) {
            this._state = Math.min(100, Math.floor(this._state * 1.5));
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine"; 
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}


class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null; 
    }

    get state() {
        return this._state;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    fix() {
        if (this._state < 100 && this._state > 0) {
            this._state = Math.min(100, Math.floor(this._state * 1.5));
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine"; 
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) { 
            this.books.push(book); 
            console.log("Книга '" + book.name + "' добавлена в библиотеку.");
        } else {
            console.log("Книга не добавлена. Состояние книги ниже 30.");
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null; 
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName); 
        
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0];
        } else {
            return null;
        }
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);
library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);

const damagedBook = library.giveBookByName("Пикник на обочине");
console.log("Выдана книга: " + damagedBook.name);
damagedBook.state = 10;
console.log("Состояние поврежденной книги: " + damagedBook.state); 

damagedBook.fix();
console.log("После восстановления, состояние книги: " + damagedBook.state); 

library.addBook(damagedBook);
console.log("Количество книг после добавления восстановленной книги: " + library.books.length);

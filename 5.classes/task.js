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
		this.state = Math.min(this.state * 1.5, 100);
	}
}


class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;             // Название издания
        this.releaseDate = releaseDate; // Дата выпуска
        this.pagesCount = pagesCount;  // Количество страниц
        this._state = 100;            // Состояние (по умолчанию 100)
    }

    get state() {
        return this._state;
    }

    set state(newState) {
        this._state = (newState < 0) ? 0 : (newState > 100 ? 100 : newState);
    }
}

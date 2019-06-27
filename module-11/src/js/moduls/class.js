export default class Notes {
    constructor(notes = []) {
        this._notes = notes;
    }

    get notes() {
        return this._notes;
    }

    saveListItem(item) {

        const newItem = {
            id: item.id,
            title: item.title,
            body: item.body,
            priority: item.priority,
        }

        this._notes.push(newItem);
        return newItem;
    }

    filterNote(query = '') {
        return this._notes.filter(note => note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query));
    }

    removeNote(id) {
        return this._notes = this._notes.filter(note => note.id !== id);
    }
}
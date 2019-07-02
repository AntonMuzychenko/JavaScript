export default class Notes {
    constructor(notes = []) {
        this._notes = notes;
        // console.log(notes);
    }

    get notes() {
        return this._notes;
    }

    saveListItem(item) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                    const newItem = {
                        id: item.id,
                        title: item.title,
                        body: item.body,
                        priority: item.priority,
                    }

                    this._notes.push(newItem);
                    localStorage.setItem('List', JSON.stringify(this.notes));
                    resolve(newItem);
                }, 1000);

            })
    };
    
    filterNote(query = '') {
        return new Promise((resolve) => {
            setTimeout(() => {
            resolve(this._notes.filter(note => note.title.toLowerCase().includes(query) || note.body.toLowerCase().includes(query))) ;
 }, 2000)
        })
    }

    removeNote(id) {
        return new Promise((resolve) => {
            // resolve('Data passed into resolve function :)');
            setTimeout(() => {
                resolve(this._notes = this._notes.filter(note => note.id !== id));
                localStorage.setItem('List', JSON.stringify(this.notes))
                // return new Promise(this.notes)
            }, 2000)
        })
    }
}
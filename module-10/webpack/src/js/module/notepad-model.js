import {PRIORITY_TYPES, shortid} from "../utils/constants"

export default class Notepad {
    constructor(notes = []) {
        this._notes = notes;
    }
  
    get notes() {
        return this._notes;
    };
  
    saveListItem(note) {
        const newItem = {
            id: shortid,
            title: note.title,
            body: note.body,
            priority: PRIORITY_TYPES.LOW,
        }
  
        this._notes.push(newItem);
        return newItem;
    }
    filterListItems(query = '') {
        return this._notes.filter(item => item.body.toLowerCase().includes(query.toLowerCase()) || item.title.toLowerCase().includes(query.toLowerCase()));
    }
  
    removeListItem(id) {
        return this._notes.map(el => {
            if (el.id === id) {
                console.log(this._notes.indexOf(el));
                this._notes.splice(this._notes.indexOf(el), 1);
            }
        })
    }
  }
 

  
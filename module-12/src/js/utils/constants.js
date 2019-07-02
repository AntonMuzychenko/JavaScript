import {
  Notyf
} from 'notyf';

export const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

export const NOTIFICATION_MESSAGES = {
  NOTE_DELETED_SUCCESS: 'Заметка успешно удалена',
  NOTE_ADDED_SUCCESS: 'Заметка успешно добавлена 🎉',
  EDITOR_FIELDS_EMPTY: 'Заполните поля редактора',
};

export const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

export const notyf = new Notyf();
export const uuidv4 = require('uuid/v4');

export const refs = {
  noteList: document.querySelector('.note-list'),
  searchInput: document.querySelector('.search-form__input'),
  editorBtn: document.querySelector('button[data-action="open-editor"]'),
  editorForm: document.getElementById('note-editor-form'),
}
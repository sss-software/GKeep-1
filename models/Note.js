const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    noteTitle: {
        type: String,
        required: true
    },
    noteContent:{
        type: String,
        default: '',
        required: true
    },
    label:{
        type: String,
        required: false
    },
    isCheckList:{
        type: Boolean,
        required: true
    },
    reminder: {
        type: Date,
        default: null,
        required: false
    },
    color: {
        type: String,
        default: '#fff',
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Note = mongoose.model('notes',NoteSchema);
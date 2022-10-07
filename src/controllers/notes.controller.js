const notesCtrl = {}

const Note = require('../models/Notes')

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note')
}
notesCtrl.createNewNote = async (req, res) => {
    const {title, description} = req.body
    const newNote = new Note({title, description})
    await newNote.save()


    res.redirect('/notes')
}

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find()
    res.render('notes/all-notes', { notes })
}


notesCtrl.renderEditForm = (req, res) => {
    res.send('Render Edit Form')
}
notesCtrl.updateNote = (req, res) => {
    res.send('Update Note')
}
notesCtrl.deleteNote = (req, res) => {
    res.send('Delete Notes')
}
module.exports = notesCtrl
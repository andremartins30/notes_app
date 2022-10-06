const { router } = require("../server")

const notesCtrl = {}

notesCtrl.renderNoteForm = (req, res) => {
    res.send('Notes Add')
}
notesCtrl.createNewNote = (req, res) => {
    res.send('Create new note')
}
notesCtrl.renderNotes = (req, res) => {
    res.send('Render notes')
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
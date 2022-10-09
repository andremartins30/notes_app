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
    const notes = await Note.find().lean()
    res.render('notes/all-notes', { notes })
}

notesCtrl.renderEditForm = async (req, res) => {
    const id = req.params.id

    const note = await Note.findById(id).lean()

    res.render('notes/edit-note', { note })

}

notesCtrl.updateNote = async (req, res) => {
    const id = req.body.id
    const title = req.body.title
    const description = req.body.description
    const note = {title, description}


    await Note.updateOne({_id:id}, note);
    
    console.log(note)
    res.redirect('/notes');
}

notesCtrl.deleteNote = async (req, res) => {

    const id = req.params.id

    await Note.findByIdAndDelete(id)

    res.redirect('/notes')
}
module.exports = notesCtrl
const models = require('../models/index')
const createNote = async function(title,content){
    try{
       var notes=await models.Mynotes.create({
         title: title,
         content: content
        })
       return notes
    }
    catch (error){
      throw Error('database error')
    }
}
const ReadParticularNoteById = async function(id){
    try{
        var notes= await models.Mynotes.findOne({
            where: {
              id: id
            }
        })
        return notes
    }
    catch (error){
        throw Error('database error')
    }
}
const ReadAllNotes= async function(){
    try{
      var notes= await models.Mynotes.findAll()
      return notes;
    }
     catch (error){
      throw Error('database error')
    }
}
const findByIdAndUpdateNote = async function(id,content){
    try{
      var notes=await models.Mynotes.update(
        {
        content : content
        },
        {
        where: {id :id}
        }
      )
      return notes
    }
    catch (error){
      throw Error('database error')
    }
}

const findByIdAndUpdateTitle = async function(id,title){
    try{
      var notes=await models.Mynotes.update(
        {
        title : title
        },
        {
        where: {id :id}
        }
      )
      return notes
    }
    catch (error){
      throw Error('database error')
    }
}
const findByIdAndDeleteNote = async function(id) {
    try{
      var notes=await models.Mynotes.destroy({
        where: {
          id: id
        }
      })
      return notes
    }
    catch (error){
      throw Error('database error')
    }
}
module.exports = {
    createNote,
    ReadParticularNoteById,
    findByIdAndUpdateNote,
    findByIdAndUpdateTitle,
    findByIdAndDeleteNote,
    ReadAllNotes 
}
   
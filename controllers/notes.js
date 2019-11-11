var services = require('../services/notes')

const createNote = async function(req,res){
  var title= req.body.title
  var content = req.body.content  
  if(!req.body.content){
    return res.status(400).send({
        message : " Note content should not be empty "
    })
  } 
  else{
    try{
        const result=await services.createNote(title,content)
        return res.status(201).json(result)
    }
    catch (error){
        return res.status(500).json(error)
    }
  }
}
const ReadParticularNoteById = async function(req,res){
    var id = req.params.id
    try{
        const result=await services.ReadParticularNoteById(id)
        if (result == null){
            return res.status(404).send('notes with requested id is not exist')
        }
        else{
            return res.status(200).json(result)
        }
    }
    catch (error){
        return res.status(500).json(error)
    }
}
const ReadAllNotes = async function(req,res){
    try{
        const result=await services.ReadAllNotes()
        return res.status(200).json(result)
    }
    catch (error){
        return res.status(500).json(error)
    }    
}
const findByIdAndUpdateNote = async function(req,res){
    const id = req.params.id
    const content = req.body.content
    if(!req.body.content){
      return res.status(400).send({
        message : " Note content should not be empty "
      })
    } 
    else{
      try{
        const result=await services.findByIdAndUpdateNote(id,content)
        if(result == 0){
           return res.status(400).send('notes with requested id is not exist')
        }
        else{
          return res.status(200).json(result)
        }
      }
      catch (error){
        return res.status(500).json(error)
      }
    }
}
const findByIdAndUpdateTitle = async function(req,res){
    const id = req.params.id
    const title = req.body.title
    if(!req.body.title){
      return res.status(400).send({
          message : " Note title should not be empty "
      })
    } 
    else{
      try{
        const result=await services.findByIdAndUpdateTitle(id,title)
        if(result == 0){
            return res.status(400).send('notes with requested id is not exist')
        }
        else{
            return res.status(200).json(result)
        }
      }
      catch (error){
          return res.status(500).json(error)
      }
    }
}
const findByIdAndDeleteNote = async function(req,res){
    const id=req.params.id
    try{
        const result=await services.findByIdAndDeleteNote(id)
        if(result == 0){
            return res.status(400).send('notes with requested id is not exist')
        }
        else{
            return res.status(200).json(result)
        }
    }
    catch (error){
        return res.status(500).json(error)
    }

}
module.exports={
    createNote,
    ReadParticularNoteById,
    ReadAllNotes,
    findByIdAndUpdateNote,
    findByIdAndUpdateTitle,
    findByIdAndDeleteNote
}


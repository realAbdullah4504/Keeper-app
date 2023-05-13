const mongoose=require('mongoose'); 

const notesSchema=new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
})

const Note=mongoose.model('Notes',notesSchema);
module.exports=Note;
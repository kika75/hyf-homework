const notes = [];

// adding notes to the notes array

function addNotes (id, content) {

  let newObj = {content, id}
    notes.push(newObj);

}

addNotes(1, "Biology");

addNotes(2, "History");

addNotes(3, "Art");

console.log(notes);



//finding a note via the ID

function getNoteFromId (id) {

    for (var i = 0; i < notes.length; i++) {

        if (notes[i].id === id) 
            {
            console.log(notes[i]);
            
        } else if
            (notes[i].id !== id)
            {
            console.log  ("Note does not exist");  
            
            
        } else 
            (notes[i].id !==number)
            {
             console.log   
            }

        }
    } 


getNoteFromId("m");

getNoteFromId(3);

getNoteFromId(5);


// Getting saved notes with ID

function logOutNotesFormatted () {

  for(var i = 0; i < notes.length; i++) {

    var formattedNotes = "The note with Id : "+notes[i].id+", has the following text:'"+notes[i].content+"'"; 

    console.log(formattedNotes);

  }  

}

logOutNotesFormatted();
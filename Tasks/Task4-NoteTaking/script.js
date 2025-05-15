const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click",addNote);
function addNote(){
    const note = document.createElement("div");
    note.classList.add("note");
   note.innerHTML = `
  <div class="tool">
    <i class="save fas fa-save"></i>
    <i class="trash fas fa-trash"></i>
  </div>
  <textarea></textarea>
`;
    const save =note.querySelector(".save");
    const trash =note.querySelector(".trash");
    const textArea =note.querySelector("textarea");
     main.appendChild(note);
    save.addEventListener('click',saveNote);
    textArea.addEventListener('input',saveNote);
    trash.addEventListener('click',()=>{
        note.remove();
        saveNote();
    })

}
function saveNote(){
    const notes= document.querySelectorAll(".note textarea");
    const data = Array.from(notes).map(note=>note.value);
    console.log(notes, data);
    if(data.length===0){
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
}
function loadNotes(){
    let lsNotes= JSON.parse(localStorage.getItem("notes"));
    if(lsNotes!==null){
        lsNotes.forEach(noteText=>{
            addNote();
            const notes= document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length-1];
            lastNote.value=noteText;

        })
    }else{
        addNote();
    }
}
loadNotes();
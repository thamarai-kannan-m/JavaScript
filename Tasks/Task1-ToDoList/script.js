const list = document.getElementById("task-list");
const textInput = document.getElementById("input-box");

function addTask() {
    const text = textInput.value.trim();  // extract the input value
    // if empty means alert giving
    if (text === "") {
        alert("Task is empty");
        return;
    }
    // creating a new element tag for adding list
    let listItem = document.createElement("li");
    // adding input to list items
    listItem.textContent = text;
    // appending to task
    let span= document.createElement("span");
    span.innerHTML="\u00d7";
    listItem.appendChild(span);
    list.appendChild(listItem);

    

    // setting fresh for 
    textInput.value = "";
    
    // listItem.addEventListener("click", (e) => {
    //     listItem.classList.toggle("check");
    // });
    listItem.addEventListener("click", function(e){
       if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
}else{
    listItem.classList.toggle("check");
}

        
    });
}

var addButton = document.getElementById("add");
addButton.addEventListener("click", createToDoTask);
var errorElement = document.getElementById("error");
var ulList = document.getElementById("taskList");
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearFunction);
function clearFunction(){
    document.getElementById("task").value = "";
}
function createToDoTask(){
    var textInput = document.getElementById("task").value;
    if (textInput.length > 0) {
        var listElement = document.createElement("li");
        var text = document.createTextNode(textInput);
        listElement.appendChild(text);
        ulList.appendChild(listElement);
        var removeButton = document.createElement("button");
        removeButton.innerHTML = "Done";
        removeButton.addEventListener("click", removeTask);
        
    }
    else {
        errorElement.innerHTML = "You have to input something";
    }
}
function removeTask(event) {
    var taskItem = event.target.parentElement;
    ulList.removeChild(taskItem); 
}
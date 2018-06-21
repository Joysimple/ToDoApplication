var addButton = document.getElementById("add");
addButton.addEventListener("click", createToDoTask);
var errorElement = document.getElementById("error");
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearFunction);
var removeButton = document.createElement("button");
removeButton.innerHTML = "Done";
function clearFunction(){
    document.getElementById("task").value = "";
}
function createToDoTask(){
    var textInput = document.getElementById("task").value;
    if (textInput.length > 0) {
        var listElement = document.createElement("li");
        var text = document.createTextNode(textInput);
        listElement.appendChild(text);
        var ulList = document.getElementById("taskList");
        ulList.appendChild(listElement);
    }
    else {
        errorElement.innerHTML = "You have to input something";
    }
}

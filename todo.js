var addButton = document.getElementById("add");
addButton.addEventListener("click", createToDoTask);
var textInput = document.getElementById("task").value;
function createToDoTask(){
    if (textInput.length > 0) {
        var textElement = document.createElement("list");
    }
    else {
        alert("enter something");
    }
}

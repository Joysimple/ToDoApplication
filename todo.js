var addButton = document.getElementById("add");
addButton.addEventListener("click", createToDoTask);
var errorElement = document.getElementById("error");
function createToDoTask(){
    var textInput = document.getElementById("task").value;
    if (textInput.length > 0) {
        var listElement = document.createElement("li");
        var text = document.createTextNode(textInput);
        listElement.appendChild(text);
    }
    else {
        errorElement.innerHTML = "You have to input something";
    }
}

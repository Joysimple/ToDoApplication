var addButton = document.getElementById("add");
addButton.addEventListener("click", createToDoTask);
var errorElement = document.getElementById("error");
function createToDoTask(){
    var textInput = document.getElementById("task").value;
    if (textInput.length > 0) {
        var textElement = document.createElement("li");
        var inputChildren = textInput.children;
        var addChildren = add.Button.children;
    }
    else {
        errorElement.innerHTML = "You have to input something";
    }
}

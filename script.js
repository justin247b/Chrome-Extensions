

var selectedText = '';

document.addEventListener("mousedown", function(event) {
  selectedText = window.getSelection().toString();
});

document.addEventListener("mouseup", function(event) {
  if (selectedText) {
    var highlightDiv = document.getElementById("Highlight");
    highlightDiv.innerHTML = selectedText;
  }
});

  
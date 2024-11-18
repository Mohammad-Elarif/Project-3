new bootstrap.Tooltip(document.getElementById("copyButton"));
new bootstrap.Tooltip(document.getElementById("copyButton2"));
new bootstrap.Tooltip(document.getElementById("copyButton3"));


function copytext(buttonId) {
    var copyButton = document.getElementById(buttonId);
    copyButton.addEventListener("click", function() {
        alert("text copied!");
    });
}
// show an alert when a button is clicked

copytext("copyButton");
copytext("copyButton2");
copytext("copyButton3");
// call function by button id (the id you used for the button in html)
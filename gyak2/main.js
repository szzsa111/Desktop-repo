let msg1 = "Hello from TS";
document.body.innerHTML += `<h3>${msg1}</h3>`;
const text = document.getElementById("Title");
text.title = msg1;
text.value = msg1;
const listitem = document.getElementById("output");
listitem.value = text.value;
listitem.title = "Béla";
text.addEventListener("input", () => {
    listitem.value = text.value;
});

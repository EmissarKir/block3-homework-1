document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;
    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  }
});
document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "edit") {
    const id = event.target.dataset.id;
    const result = window.prompt("Введите новое название заметки");
    const newTitle = { title: result };
    if (result) {
      edit(id, JSON.stringify(newTitle)).then(() => {
        const str = event.target.closest("li").childNodes[0];
        str.textContent = result;
      });
    }
  }
});

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" });
}
async function edit(id, data) {
  await fetch(`/${id}`, {
    method: "PUT",
    body: data,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

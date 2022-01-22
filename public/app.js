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
    let newTitle = document.querySelector("#title").value;
    edit(id, JSON.stringify({ title: newTitle })).then(() => {
      window.location.href = "/";
    });
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

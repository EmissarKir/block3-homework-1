const express = require("express");
const chalk = require("chalk");
const {
  addNote,
  getNotes,
  removeNote,
  updateNote,
} = require("./notes.controller");
const path = require("path");

const port = 3000;
// инициализация приложения
const app = express();

// подключение шаблонизатора html / предварительно установить
app.set("view engine", "ejs");
// изменение настройки хранения страниц
app.set("views", "pages");

app.use(express.static(path.resolve(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", async (req, res) => {
  const { id } = req.params;
  res.render("index", {
    title: "Express app",
    notes: await getNotes(),
    created: false,
    editId: id,
  });
});
app.post("/", async (req, res) => {
  const { id } = req.params;
  await addNote(req.body.title);
  console.log(req.body.title);
  res.render("index", {
    title: "Express app",
    notes: await getNotes(),
    created: true,
    editId: id,
  });
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.render("index", {
    title: "Express app",
    notes: await getNotes(),
    created: false,
    editId: id,
  });
});
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await removeNote(req.params.id);
  res.render("index", {
    title: "Express app",
    notes: await getNotes(),
    created: false,
    editId: id,
  });
});
app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const data = req.body.title;
  await updateNote(id, data);
  res.render("index", {
    title: "Express app",
    notes: await getNotes(),
    created: false,
    editId: id,
  });
});

app.listen(port, () => {
  console.log(chalk.green(`Server has been started on port ${port}...`));
});

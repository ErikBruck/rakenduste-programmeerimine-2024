const todos = [];

exports.create = (req, res) => {
  const { title, priority } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).send({ type: "Error", message: "Must include a title" });
  }

  const newTodo = {
    id: todos.length + 1,
    title: title.trim(),
    priority: priority ?? 1,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  };

  todos.push(newTodo);

  return res.status(201).send(newTodo);
};

exports.update = (req, res) => {
  const { id, title, priority } = req.body;

  const todo = todos.find(todo => todo.id === id);
  if (!todo) {
    return res.status(404).send({ type: "Error", message: "Todo not found" });
  }

  if (title && title.trim() !== "") {
    todo.title = title.trim();
  }
  if (priority !== undefined && !isNaN(priority)) {
    todo.priority = Number(priority);
  }
  todo.updatedAt = Date.now();

  return res.status(200).send(todo);
};

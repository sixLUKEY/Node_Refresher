const Todos = require("../models/todoModel");
const bodyParser = require("body-parser");

module.exports = function (app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/api/todos/:username", (req, res) => {
    Todos.find({ username: req.params.username }, (err, todos) => {
      if (err) throw err;
      res.send(todos);
    });
  });

  app.get("/api/todo/:id", (req, res) => {
    Todos.findById({ _id: req.params.id }, (err, todos) => {
      if (err) throw err;

      res.send(todos);
    });
  });

  app.post("/api/todo", (req, res) => {
    if (req.body.id) {
      Todos.findByIdAndUpdate(
        req.body.id,
        {
          todo: req.body.todo,
          isDone: req.body.isDone,
          hasAttachment: req.body.hasAttachment,
        },
        (err, todo) => {
          if (err) throw err;

          res.send("success!");
        }
      );
    } else {
      const newTodo = Todos({
        username: "test",
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });

      newTodo.save((err) => {
        if (err) throw err;
        res.send("success!");
      });
    }
  });

  app.delete("/api/todos", (req, res) => {
    Todos.findByIdAndDelete(req.body.id, (err) => {
      if (err) throw err;
      res.send("success!");
    });
  });
};

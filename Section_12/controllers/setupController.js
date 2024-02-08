const Todos = require("../models/todoModel");

module.exports = function (app) {
  app.get("/api/setupTodos", (req, res) => {
    // Seed database
    let starterTodos = [
      {
        username: "test",
        todo: "Clean kitchen",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "test",
        todo: "sweep yard",
        isDone: false,
        hasAttachment: false,
      },
      {
        username: "test",
        todo: "wash dogs",
        isDone: false,
        hasAttachment: false,
      },
    ];
    Todos.create(starterTodos, (err, results) => {
      res.send(results);
    });
  });
};

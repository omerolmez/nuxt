const express = require("express")
const app = express()
const mongoose = require("mongoose")
// mongoose.connect('mongodb://gkandemir:todoApp123@ds241493.mlab.com:41493/todo-app', { userNewUrlParser: true })
mongoose.connect('mongodb://localhost/todo-app', { userNewUrlParser: true })
// {
//   _id : Auto,
//    text : ""
// }

const TodoModel = mongoose.model('todo', { text: String })

// Routing...
app.get("/get-all", (req, res) => {

  TodoModel.find({}, (err, docs) => {
    res.status(200).json({
      docs : docs
    })
  })

})

app.post("/save", (req, res) => {
  const newTodoItem = new TodoModel({
    text : req.body.todoText
  })
  newTodoItem.save()
    .then(response => {
      res.status(200).json({
        data : response
      })
    })
})

app.delete("/delete", (req, res) => {
  let todo = req.body.todo
  TodoModel.findOneAndRemove({ _id : todo._id}, () => {
    res.status(204).json({
      message : "deleted"
    })
  })

})

app.put("/update", (req, res) => {
  let updatedTodo = req.body.todo

  TodoModel.findOneAndUpdate({ _id : updatedTodo._id}, {text: updatedTodo.text}, () => {
    res.status(200).json({
      message : "updated"
    })
  })
})

module.exports = {
  path : "/api",
  handler : app
}

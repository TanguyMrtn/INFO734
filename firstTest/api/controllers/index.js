// function getTodos(req,res) {
//     res.send('get Todos');
// }

// module.exports.getTodos=getTodos;

// function getTodo(req,res) {
//     res.send(' get todo');
// }
// module.exports.getTodo=getTodo;

// function postTodo(req,res){
//     res.send('post todo');
// }

// module.exports.postTodo=postTodo;

// function putTodo(req,res) {
//     res.send('update todo');
// }

// module.exports.putTodo=putTodo;

// function deleteTodo(req,res) {
//     res.send('delete todo');
// }



function getAllTodos(req, res) {
  const Todo = require('../../todo/models');

  Todo.find({}, function(err, todos) {

    if (err) throw err;

    res.json(todos);

  });

}

function getOneTodo(req, res) {
  const Todo = require('../../todo/models');

  Todo.find({_id : req.params.id}, function(err, todo) {

    if (err) throw err;

    res.json(todo);

  });

}

function createTodo(req, res) {
  const Todo = require('../../todo/models');

  const newTodo = Todo ({
      title: req.body.title,
      description : req.body.description
  });

  newTodo.save(function(err) {
    if (err) throw err;

    res.json({info: 'Success'});

  });

}

function modifyTodo(req, res) {
  const Todo = require('../../todo/models');

    Todo.findOneAndUpdate(
          {_id : req.params.id},

        { title: req.body.title,
          description : req.body.description

        }, function(err, todo) {
            if (err) throw err;

            res.json({info: 'Success'});

        });

}

function deleteTodo(req, res) {
  const Todo = require('../../todo/models');

  Todo.findOneAndRemove(
        {_id : req.params.id}, function(err, todo) {
    if (err) throw err;

    res.json({info: 'Success'});

  });
}

module.exports.getAllTodos = getAllTodos;
module.exports.getOneTodo = getOneTodo;
module.exports.createTodo = createTodo;
module.exports.modifyTodo = modifyTodo;
module.exports.deleteTodo = deleteTodo;


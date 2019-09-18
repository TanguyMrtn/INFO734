const router = require('express').Router();
const controller = require('../controllers')
router.get('/api/todos',(req,res)=>{
    controller.getAllTodos(req,res);
    // res.send('get todos');
});

router.get('/api/todo/:id',(req,res)=>{
    controller.getOneTodo(res,res);
    res.send('get todo where id ');
});
router.post('/api/todo',(req,res)=>{
    // res.send('post a )
    controller.createTodo(req,res);
});
router.put('/api/todo',(req,res)=>{
    // res.send('update a todo');
   controller.modifyTodo(req,res);
});
router.delete('/api/todo',(req,res)=>{
    // res.send('delete a todo');
    controller.deleteTodo(req,res);
});
module.exports=router;
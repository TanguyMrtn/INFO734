const router = require('express').Router();
const controller = require('../controllers')

router.get('/todo/:id',(req,res)=>{
    controller.getOneTodo(req,res);
});

router.get('/todos',(req,res)=>{
    controller.getAllTodos(req,res);
});

module.exports=router;
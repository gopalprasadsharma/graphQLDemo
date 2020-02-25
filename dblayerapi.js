var express = require('express');
var router = express.Router();


//import {handleNeo4jOperation} from './neo4jcontroller';

var mongojs = require('mongojs');
var db = mongojs('mongodb://testing:test123@ds263307.mlab.com:63307/blog_dev');

const handleMongoOperation = async (req) => {
    switch (req.method) {
        case 'GET':
            const data= await findData(req);
            console.log(data,"dataaaaaaaaaaaaaa");
             return data;
        case 'POST':
            return insertData(req);
        case 'PATCH':
            return updateData(req);
        case 'DELETE':
            return deleteData(req);
        default:
            break;
    }
}

const timeout = ms => new Promise(res => setTimeout(res, ms))

function convinceMe (convince) {
    let unixTime = Math.round(+new Date() / 1000)
    console.log(`Delay ${convince} at ${unixTime}`)
  }

  async function delay () {
    convinceMe('started')
    await timeout(5000)
    convinceMe('finished');
    return { data: 'ram', mobile: 31312 };
  }

const findData = async (req) => {
   
   return delay();
   
}


const insertData = async (req) => {
    return "hii insert method called"
}

const updateData = async (req) => {
    return "hii update method called"
}

const deleteData = async (req) => {
    return "hii delete method called";
}


/* GET users listing. */
router.get('/fetch/:collection', async function (req, res, next) {

    const data = await switchDatabase(req);
    res.send(data);

});

router.get('/fetch/:collection/:id', async function (req, res, next) {

    const data = await switchDatabase(req);
    res.send(data);
});

router.post('/dbapilayer', async function (req, res, next) {

    await switchDatabase(req);

});


router.patch('/dbapilayer', async function (req, res, next) {
    await switchDatabase(req);

});


router.delete('/dbapilayer', async function (req, res, next) {
    await switchDatabase(req);
});

async function switchDatabase(req) {
    switch (req.headers.database) {
        case 'mongoDB':
            return await handleMongoOperation(req);
        case 'neo4jDB':
            return handleNeo4jOperation(req);
        default:
            break;
    }
}
/*
// get Single Task
router.get('/task/:id', function (req, res, next) {
    //res.send('respond with a resource');
    //get all tasks
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});

//save task
router.post('/user', function (req, res, next) {
    var task = req.body;
    if (!task.title || (task.isDone + '')) {
        res.status(400);
        res.json({
            "error": "bad data"
        })
    } else {
        db.tasks.save(task, function (err, task) {
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

//delete task
router.delete('/user/:id', function (req, res, next) {
    //res.send('respond with a resource');
    //get all tasks
    db.users.remove({_id: mongojs.ObjectId(req.params.id)}, function (err, task) {
        if (err) {
            res.send(err);
        }
        res.json(task);
    });
});
//update task

router.put('/user/:id', function (req, res, next) {
    //res.send('respond with a resource');
    //get all tasks
    var task=req.body;
    var updTask={};
    if(task.isDone){
        updTask.isDone=task.isDone;
    }

    if(task.title){
        updTask.title=task.title;
    }
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    }else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask,{}, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    }

});
*/
module.exports = router;

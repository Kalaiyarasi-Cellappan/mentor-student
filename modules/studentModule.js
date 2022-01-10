const mysql = require('../shared/connect');

exports.createStudent = async (req,res,next)=> {
    const query=`Insert into student(sname, Address) values('${req.body.sname}','${req.body.Address}')`;
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        res.send(result)
    })
}

exports.createMentor = async (req,res,next)=> {
    const query=`Insert into mentor(mname, Phone) values('${req.body.mname}','${req.body.Phone}')`;
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        res.send(result)
    })
}

exports.assignStudent = async (req,res,next)=> {
    const query=`UPDATE student SET Mentor_id = ${req.body.Mentor_Id} WHERE id in (${req.body.S1},${req.body.S2});`
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        result=`select * from student where Mentor_id IS NULL`
        mysql.connection.query(result, (err, result1) => {
            if(err) res.status(500).send({msg:err})
        res.send(result1)
    })
    })
}

exports.changeMentor = async (req,res,next)=> {
    const query = `UPDATE student SET Mentor_id = ${req.body.Mentor_Id} WHERE id=${req.body.SId}`
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        res.send(result)
    })
}

exports.list = async (req,res,next)=> {
   const query =`select* from student s inner join mentor m on s.Mentor_id=m.Mentor_Id`
    mysql.connection.query(query, (err, result) => {
        if(err) res.status(500).send({msg:err})
        res.send(result)
    })
}
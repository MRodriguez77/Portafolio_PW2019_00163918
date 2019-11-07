const Resgistro = require("../models/register");

//GetAll
const getAll = (req,res)=>{
    Registro.find((err,registros)=>{
        if(err) return res.status(500).json({mensaje: "Valio verga"})
        
        return res.status(200).json({registros});
    })
}

//GetOne
const getOneById = (req.params.id,(res)=>{
    Registro.findById((err,registros)=>{
        if(err) return res.status(500).json({mensaje: "Valio verga"})
        
        return res.status(200).json({registros});
    });
}

//insert
const insert = (req,res)=>{
    let registro = new Registro({
        carnet : req.body.carnet,
        schedule : req.body.schedule,
        isLate: req.body.isLate
    });

    registro.save((err)=>{
        if(err) return res.status(500).json({mensaje: "Valio verga"})

        res.status(201).json({mensaje:"SIUUUUUUUUUUUUUUUUU"})
    });
}

//update 
const update = (req,res)=>{
    
}

//delete 
const erase = (req,res)=>{
    
}

module.exports = {
    getAll,
    getOneById,
    insert,
    update,
    erase
};
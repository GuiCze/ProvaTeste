import Veicle from "../models/veicle-model.js";

const store = async (req,res)=>{
    try{
    const connect = await Veicle.create(req.body)
    res.status(201).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const index = async (req,res)=>{
    try{
        const connect = await Veicle.find()
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const show = async (req,res)=>{
    try{
        const connect = await Veicle.findById(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const update = async (req,res)=>{
    try{
        console.log("aqui");
        const connect = await Veicle.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}

const destroy = async (req,res)=>{
    try{
        const connect = await Veicle.findByIdAndDelete(req.params.id)
        res.status(200).json(connect)
    }catch(err){
        res.status(400).send(err);
    }
}


export default {store, index, show, update, destroy}
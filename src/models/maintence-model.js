import db from "../db.js";

const Schema = db.Schema;

const maintenceschema = new Schema({
    workshop: {
        type: db.SchemaTypes.ObjectId,
        ref: "Workshop",
        required: true
    },
    veicle: {
        type: db.SchemaTypes.ObjectId,
        ref: "Veicle",
        required: true
    },
    services: {
        type: [Object],
        required:true,
    },
    date: {
        type: Date,
        required: true
    },
    totalcost: {
        type: Number,
        required: true
    },
})

const Maintence = db.model("Maintence", maintenceschema);

export default Maintence
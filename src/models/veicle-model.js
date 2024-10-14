import db from "../db.js";

const Schema = db.Schema;

const veicleSchema = new Schema({
    plate: {
        type: String,
        unique: true,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    maintence: {
        type: [db.SchemaTypes.ObjectId],
        ref: "Maintence"
    }
})


const Veicle = db.model("Veicle", veicleSchema);

export default Veicle

import express from "express"
import veicle from "../controllers/veicle-controller.js"
const router = express.Router()

router.get('/',  veicle.index)
router.get('/:id', veicle.show)
router.post('/', veicle.store)
router.put('/:id', veicle.update)
router.delete('/:id', veicle.destroy)

export default router
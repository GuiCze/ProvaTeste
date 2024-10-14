import express from "express"
import maintence from "../controllers/maintence-controller.js"
const router = express.Router()

router.get('/',  maintence.index)
router.get('/:id', maintence.show)
router.post('/', maintence.store)
router.put('/:id', maintence.update)
router.delete('/:id', maintence.destroy)

export default router
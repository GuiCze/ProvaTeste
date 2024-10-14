import express from "express"
import workshop from "../controllers/workshop-controller.js"
const router = express.Router()

router.get('/',  workshop.index)
router.get('/:id', workshop.show)
router.post('/', workshop.store)
router.put('/:id', workshop.update)
router.delete('/:id', workshop.destroy)

export default router
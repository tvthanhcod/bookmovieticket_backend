const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController')



router.get('/:id', userController.getUser)
router.get('/', userController.getAll)
router.post('/new', userController.addNew)
router.put('/update', userController.updateUser)
router.delete('/delete', userController.deleteUser)



module.exports = router
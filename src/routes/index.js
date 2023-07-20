const express = require('express')

const router = express.Router()
const adminRouter = require('./adminRoute')
const userRouter = require('./userRoute')
const movieRouter = require('./movieRoute')
const scheduleRouter = require('./scheduleRoute')
const appRouter = require('./appRoute')



router.use('/admin', adminRouter)
router.use('/user', userRouter)
router.use('/movie', movieRouter)
router.use('/schedule', scheduleRouter)
router.use(appRouter)



module.exports = router
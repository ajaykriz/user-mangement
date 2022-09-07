const express=require('express')
const router=express.Router()
const {findUsers,deleteUser,findOneuser,editUser}=require('../controller/userController')
//protect route middleware
const{protect}=require('../middleware/authMiddleware')

router.get('/',protect,findUsers)
router.get('/finduser/:id',findOneuser)
router.delete('/deleteuser/:id',protect,deleteUser)
router.post('/editUser/:id',editUser)



module.exports=router;
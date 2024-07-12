import { Router } from "express"
import { userController } from "../controllers/userController.js"
import { uploader } from "../middlewares/multer.js"

const userRouter = Router()

userRouter.post("/premium/:uid", userController.setUserRole)

userRouter.post("/:uid/documents", uploader.fields([{name:"identificacion"},
                                                    {name:"domicilio"},
                                                    {name:"estado_cuenta"},
                                                    {name:"products"},
                                                    {name:"profiles"}
]), userController.uploadFile)

export default userRouter
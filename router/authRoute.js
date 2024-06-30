import express from "express";
import { SignUp ,SignIn, google} from "../Controller/authControlle.js";


// init router
const router = express.Router();


router.post("/signup", SignUp)
router.post("/signin", SignIn)
router.post("/google", google)


// export default router
export default router;
import express from 'express'
// import { getUser, getUserFriends, addRemoveFriend} from '../controllers/users.js'
import { verifyToken } from '../middleware/auth'

const router = express.Router();

router.get("/:id", verifyToken, getUser);
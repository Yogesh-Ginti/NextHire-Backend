import express from 'express'
import { handleAllBookmarks, handleAddBookmark, handleDeleteBookmark } from '../controllers/bookmarkController.js'
import { isUserVaild } from '../middleware/userAuth.js'


const router = express.Router()
router.get('/',isUserVaild, handleAllBookmarks)
router.post('/add', isUserVaild, handleAddBookmark)
router.delete('/delete', isUserVaild, handleDeleteBookmark)

export default router;
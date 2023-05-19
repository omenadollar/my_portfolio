const express = require('express')
const router = express.Router()
const {
    indexPage,
    movieId,
    blogpage,
    aboutpage,
    portfoliopage,
    moviePage
} = require('../controllers/index')


router.get('/', indexPage)
router.get('/movies/:Id', movieId)
router.get('/blog', blogpage)
router.get('/about', aboutpage)
router.get('/portfolio', portfoliopage)
router.get('/movies', moviePage)





module.exports = router;
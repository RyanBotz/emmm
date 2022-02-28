__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/indexnya/index.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/docs/welcome.html')
})
router.get('/api/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})
router.get('/docs/downloader', (req, res) => {
    res.sendFile(__path + '/views/menu/download.html')
})
router.get('/docs/search', (req, res) => {
    res.sendFile(__path + '/views/menu/search.html')
})

router.get('/docs/others', (req, res) => {
    res.sendFile(__path + '/views/menu/others.html')
})

router.get('/docs/wallpaper', (req, res) => {
    res.sendFile(__path + '/views/menu/wallpaper.html')
})

router.get('/docs/wallpaperv2', (req, res) => {
    res.sendFile(__path + '/views/menu/wallpaper2.html')
})

router.get('/docs/nsfw', (req, res) => {
    res.sendFile(__path + '/views/menu/nsfw.html')
})

// router.use(function (req, res) {

//     res.status(404)
//     .set("Content-Type", "text/html")
//     .sendFile(__path + '/views/docs/404.html');
// });


module.exports = router

const getHomePage = (req, res) => {
    res.send('Hello World! hello man')
}

const getAbc = (req, res) => {
    res.send("Check success Abc, test nodemon123")
}

const getHoiDanIT = (req, res) =>{
     // res.send('<h1>Hoi dan It</h1>')
     res.render('sample.ejs')
}

module.exports = {
    getHomePage, getAbc, getHoiDanIT
}
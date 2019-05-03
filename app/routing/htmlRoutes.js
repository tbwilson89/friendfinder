var path = require('path')

module.exports = function(app) {
  app.get('/survey', (req,res)=>{
    console.log('test')
    res.sendFile(path.join(__dirname, '/app/public/survey.html'))
  })
  app.get('*', (req,res)=>{
    console.log('test')
    res.sendFile(path.join(__dirname, '/app/public/home.html'))
  })
}

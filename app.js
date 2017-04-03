const app = require('express')()

app.use('/quotes', require('./components/routes/quoteRoutes.js'))

/* istanbul ignore if  */
if (require.main === module) app.listen(process.env.PORT || 8080)

module.exports = app

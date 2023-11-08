require('dotenv').config();
const PORT = process.env.PORT || 8011
const app = require('./app-server.cjs')
require('./config/database.cjs')

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
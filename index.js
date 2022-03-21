const express = require('express')
const app = express()
const port = 1998
app.use('/img',express.static('SpinelNFT'))
app.use('/metadata',express.static('SpinelMetadata'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
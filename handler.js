const axios = require('axios')
const handler = require('serverless-express/handler')
const express = require('serverless-express/express')

let app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/api/consulta-cnpj-api', async (req, res) => {
  let {cnpj, token, url} = req.body

  let {data} = await axios.get(`${url}?token=${token}&cnpj=${cnpj}&format=json`)

  console.log('Res', data)

  return res.json(data)
})

exports.handler = handler(app)

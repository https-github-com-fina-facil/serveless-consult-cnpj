const axios = require('axios')
const pdf = require('html-pdf')
const handler = require('serverless-express/handler')
const express = require('serverless-express/express')

let app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/api/consulta-cnpj-api', async (req, res) => {
  let {cnpj, token, url} = req.body

  console.log('CNPJ', cnpj)
  console.log('TOKEN', token)
  console.log('URL', url)
  try {
    let {data} = await axios.get(`${url}?token=${token}&cnpj=${cnpj}&format=json`)

    return res.json(data)
  } catch (error) {
    console.error(error)
  }
})

app.get('/api/api-servless-fina', async (req, res) => {
  try {
    return res.json({message: 'Api Fina Fácil!'})
  } catch (error) {
    console.error(error)
  }
})

app.post('/api/download-files', async (req, res) => {
  let {html, fileNamePDF} = req.body

  let data = new Promise(async (resolve, reject) => {
    const blobSvc = azure.createBlobService(CONNECTION_STRING)
    var writable = fs.createWriteStream(filename)
    blobSvc.getBlobToStream(CONTAINER, filename, writable, (error, result) => {
      if (error) {
        console.log(error)
      } else {
        console.log(result)
      }

      fs.readFile(filename, function (err, data) {
        if (err) {
          console.error(err)
        }

        resolve(data)
      })
    })
  })

  console.log('File', data)
})

exports.handler = handler(app)

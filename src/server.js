const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())
    server.use(cors())

    server.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE')
        res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization')
        next();
    })

    server.get('/', (req, res) => {
        return app.render(req, res, '/')
    });

    server.get('/Posts/:id', (req, res) => {
        const pathname = '/Posts/[id]'
        const urlQuery = {id: req.params.id}
        return app.render(req, res, pathname, urlQuery)
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})

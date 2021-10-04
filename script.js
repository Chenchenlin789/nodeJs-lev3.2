console.log('web server')

const http = require('http')
const fs = require('fs')
const path = require('path')

//const server = http.createServer((req, res) => {
//     console.log(req.url)
//     res.statusCode = 200
//     res.setHeader('content-type', 'application/json')
//     res.end('some text')
// })

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         fs.readFile('/public/index.html', (err, data) => {
//             if (err) throw (err)
//             res.statusCode = 200
//             res.setHeader = ('content-type', 'text/html')
//             res.end(data)
//         })
//     } else if (req.ulr === '/favicon.ico'{
//         console.log(req.url)
//         fs.readFile('./public/favicon.ico', (err, data) => {
//             if (err) throw err
//             res.statusCode = 200
//             res.setHeader = ('content-type', 'imge/x-icon')
//             res.end(data)
//         })
//     } else if (req.url === '/picture.jpeg') {
//         fs.readFile('./public/picture1.jpeg', (err, data) => {
//             if (err) throw err
//             res.statusCode = 200
//             res.setHeader = ('content-type', 'imge/jpeg')
//             res.end(data)
//         })
//     } else if (req.url === '/style.css') {
//         fs.readFile('./public/style.css', (err, data) => {
//             if (err) console.log(err)
//             res.writeHead = (200, {
//                 'content-type': 'text/css'
//             })
//             res.end(data)
//         })
//     } else if (req.url === '/main.js') {
//         fs.readFile('./public/main.js', (err, data) => {
//             if (err) console.log(err)
//             res.writeHead = (200, {
//                 'content-type': 'text/javascript'
//             })
//             res.end(data)
//         })
//     }
// })
// server.listen(3000, () => {
//     consol.log('listening at 127:0:0:1:3000')
// })

//create web server: dynamic routing
const server = http.createServer((req, res) => {
    let filePath = req.url === '/' ? 'public/index.html' : req.url
    console.log('filepath', filePath)
    let ext = path.extname(req.url)
    console.log(ext)
    let contentType = 'text/html'
    switch (ext) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.icon':
            contentType = 'image/x-icon'
            break;

    }
    console.log(contentType)
    //console.log(req.url)
    //req.url=/style.css
    //filePath =/style.css
    //fs.readFile('/public/picture.jpeg,...')
    fs.readFile(`./public$(filePaht)`), (err, data) => {
        if (err) throw err
        res.writeHead(200, { 'Contetn-Type': contentType })
        res.end(data)
    }
})


// console.log(req.url)
// res.statusCode = 200
// res.setHeader('content-type', 'text/plain')
// res.end('some text')
// })

server.listen(3000, () => {
    consol.log('listening at http://127:0:0:1:3000')
})


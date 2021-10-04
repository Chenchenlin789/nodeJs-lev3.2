let data = require('./data.json')

const fs = require('fs');

console.log(data)
fs.rmSync('test.txt')

// data.forEach(elt => console.log(elt))

//nur Id & description soll in txt stehen
data.forEach(elt => {
    let result = `
    ${elt.id} - ${elt.title}
    ${elt.description}
    `
    console.log(result)
    fs.appendFileSync('test.txt', result, 'utf-8')
})




// 3.2 
// jedes Mal, wenn deine index.js Datei gespeichert wird, soll überprüft werden, ob ein Ordner namens “MyFunnyFolder” existiert
// Wenn er nicht existiert, soll er erstellt werden
// Falls er existiert, soll er gelöscht werden
// Jedes Mal, wenn die Datei gespeichert wird soll auch geschaut werden, ob es die Datei isThis.txt in einem Ordner namens “What” existiert
// Falls nicht, erstelle den Ordner und die Datei

// Synchronous
// if (fs.existsSync('/myFunnyFolder')) {
//     // delete directory
//     fs.rmdirSync('/myFunnyFolder', { recursive: true })
// } else {
//     //make directory
//     fs.mkdirSync('/myFunnyFolder', { recursive: true })
// }


// if (fs.existsSync('./what')) {
//     // delete directory
//     fs.rmdirSync('./what', { recursive: true })
// } else {
//     //make directory
//     fs.mkdirSync('./what', { recursive: true })
//     fs.writeFileSync('./what/isThis.txt', ' ', 'utf-8')
// }
//--------------------------------------------------------------
//PROMISES > Asynchronous
// if (fs.existsSync('./myFunnyFolder')) {
//     fs.promises.rmdir('./myFunnyFolder', { recursive: true })
//         .then(() => console.log('deleted'))
//         .catch(err => console.log(err))
// } else {
//     fs.promises.mkdir('./myFunnyFolder')
//         .then(() => console.log('created', { recursive: true }))
//         .catch(err => console.log(err))
// }

//Callback: Asynchronous
if (fs.existsSync('./myFunnyFolder')) {
    //delete directory
    fs.rmdir('./myFunnyFolder', { recursive: true }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('deleted')
        }
    })
} else {
    //make directory
    fs.mkdir('./myFunnyFolder', { recursive: true }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('created')
        }
    })
}



const fs = require('fs')

// fs.readFile('archivo.txt', 'utf8', (err, data) => {
//     if(err){
//         console.error('Error a leer el archivo', err)
//     }else {
//         console.log('Contenido del archivo:', data)
//     }
// })

// const contenido = "Este es el nuevo contenido"
// fs.writeFile('archivo.txt', contenido, err => {
//     if(err){
//         console.error('Error a escribir el archivo')
//     }else {
//         console.log('El archivo esat escrito')
//     }
// })

// const archivo = 'archivo.txt'

// const contenidAgregado = '\n Este es un contenido agregado'
// fs.appendFile(archivo, contenidAgregado, (err) => {
//     if(err){
//         console.log('Error al agregar el contenido')
//     }else {
//         console.log('Contenido agregado')
//     }
// })

// const ruta = 'C:/Users/Y/Documents/Cursos/Ciberseguridad/Ciberseguridad.txt'

// fs.readFile(ruta, 'utf8', (err, data) => {
//     if(err){
//         console.log('Error al leer el archivo')
//     }else {
//         console.log('El archivo esta leido', data)
//     }
// })

const path = require('path')
const readline = require('readline')

// const documentos = path.join(process.env.home || process.env.USERPROFILE, 'Documents')
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question('Nombre de la carpeta a crear: ', (carpeta) => {
//     const nuevacarpeta =path.join(documentos,carpeta)
//     fs.mkdir(nuevacarpeta, { recursive: true}, (err) => {
//         if(err){
//             console.log('Error al crear la carpeta')
//         }else {
//             console.log('Carpeta creada exictosamente')
//         }
//     })
// })

const documentos = path.join(process.env.home || process.env.USERPROFILE, 'Documents')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Nombre de la carpeta a eliminar: ', (carpeta) => {
    const carpetadel =path.join(documentos,carpeta)
    fs.rmdir(carpetadel, { recursive: true}, (err) => {
        if(err){
            console.log('Error al crear la carpeta')
        }else {
            console.log('Carpeta eliminada exictosamente')
        }
    })
})

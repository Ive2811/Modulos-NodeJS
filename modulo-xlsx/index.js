const reader = require('xlsx')
const file = reader.readFile('./Example.xlsx')
  

let data = []
  
const sheets = file.SheetNames
  
for(let i = 0; i < sheets.length; i++)
{
   const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
   temp.forEach((res) => {
      data.push(res)
   })
}
  
// Mostrando los datos que contiene el documento de Excel.
console.log("Convirtiendo e imprimiendo a JSON los datos almacenados en el archivo Excel...")
console.log(" ")
console.log(data)
console.log(" ")


// Datos nuevos a insertar.
let student_data = [{
    Nombre:'Ana',
    Apellido:'Ulloa',
    Edad:20
},
{
    Nombre:'Francisco',
    Apellido:'Fuentes',
    Edad:32
},
{
    Nombre:'María',
    Apellido:'Torres',
    Edad:15
}]
  
const ws = reader.utils.json_to_sheet(student_data)
  
reader.utils.book_append_sheet(file,ws)
  
// Escribiendo nuevos datos en el archivo.
reader.writeFile(file,'./Example.xlsx')

console.log("Insertando los datos al documento...")
console.log(student_data)
console.log(" ")
console.log("¡Los datos se han introducido correctamente!")
console.log(" ")



//Funciones reutilizables, exportando, importando funciones. 
//Crear un Módulo.
const greet = (name) => {
  return `Hello ${name}`
};

//Crear otro Módulo
const helloWorld = (name) =>{
  return `Hello World!!!`
};

//objeto para Exportar Funciones
module.exports={
  greet:greet,
  helloWorld:helloWorld 
}

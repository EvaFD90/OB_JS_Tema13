const nombre = "Eva";
const apellido = "Filgueira";
const estudiante = nombre.concat(" ").concat(apellido);


let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

let numLetras = estudiante.length;

let inicialNombre = nombre[0];
let finalApellido = apellido[apellido.length - 1];

let noEspacios = estudiante.replace(/ /g, "");
//let noEspacios2 = estudiante.replace(" ", "");

let incluyeNombre = estudiante.includes(nombre);
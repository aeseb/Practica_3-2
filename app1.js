const SuperSimioProgramador = require("./SuperSimioProgramador");
const TecladoPc = require("./TecladoPc");


const albert = new SuperSimioProgramador;
const gilbert = new SuperSimioProgramador;
const simios = new SuperSimioProgramador;
const preferido = new TecladoPc;
const nocturno = new TecladoPc;

/* El estado true (o false) debe variar
 segun lo que se desee mostrar en consola
 mediante el metodo simiosInteractuando
 */
//simios.conAuriculares(false);

// Flujo de los teclados
preferido.tuNombreEs("Preferido");
nocturno.tuNombreEs("Nocturno");
nocturno.sistemaMecanico(false);

console.log("\n---------Super Simios---------\n");
// Flujo de Albert
albert.simioTeLlamas("Albert");
albert.programaCon(preferido);

console.log("-------");

// Flujo de Gilbert
gilbert.simioTeLlamas("Gilbert");
gilbert.programaCon(nocturno);

console.log("-------");

/**
 * Flujo de interaccion entre el objeto
 * albert y el objeto gilbert.
 */
simios.simiosInteractuando();
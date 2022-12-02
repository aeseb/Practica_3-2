const SuperSimioProgramador = require("./SuperSimioProgramador");

const albert = new SuperSimioProgramador;
const gilbert = new SuperSimioProgramador;

albert.simioTeLlamas("Albert");
gilbert.simioTeLlamas("Gilbert");

albert.quitarAuriculares(gilbert);
albert.albertTenesAuri();
gilbert.quitarAuriculares(albert);
gilbert.gilbertTenesAuri();



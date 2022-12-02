const SuperSimioProgramador = require("./SuperSimioProgramador");
 
const albert = new SuperSimioProgramador;
const gilbert = new SuperSimioProgramador;


albert.simioTeLlamas("Albert");
gilbert.simioTeLlamas("Gilbert");

albert.quitarAuriculares(gilbert);
albert.conAuriculares(true);
albert.tenesAuriculares();
gilbert.quitarAuriculares(albert);
gilbert.conAuriculares(false);
gilbert.tenesAuriculares();


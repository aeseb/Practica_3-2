
class SuperSimioProgramador{

    //Estado/caracteristica/campo
    simioNombre = "por def";
    //albertNoOye = true;
    //gilbertNoOye = false;
    simioNoOye = "por def";

   
    /**
     * @param {String} nombre recibe Albert o Gilbert como parametro.
     */
    simioTeLlamas(nombre){
        this.simioNombre = nombre;  
    }

    /**
      * @param {String} unSuperSimio recibe un objeto Albert o
      * un objeto Gilbert como parametro.
      */
    quitarAuriculares(unSuperSimio){
        unSuperSimio.simioMolesto();
    }
    
    /**
     * En esta funcion un simio se pregunta si
     * otro simio -que es mencionado con su nombre-, le quito los auriculares.
     */
    simioMolesto(){
        console.log("\n¿" + this.simioNombre +  " me quitó los auriculares?");  
    }

    /**
     * Funcion que dice cual simio no lleva auriculares
     */
    tenesAuriculares(){
        if (!this.simioNoOye) {   
            console.log("si >:(");
        }
        else{
            console.log("no <:)");  
        }   
    }

    /**
     * Esta funcion permite reconocer el estado de cada objeto simio.
     * @param {boolean} noOye recibe true o false como parametro.
     */
    conAuriculares(noOye){
        this.simioNoOye = noOye;
    }
}

module.exports = SuperSimioProgramador;
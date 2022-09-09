const TecladoPc = require("./TecladoPc");

class SuperSimioProgramador{

    //Estado/caracteristica/campo
    simioNombre = "por def";
    albertConAuriculares = true;

    //Comportmiento/metodo
    /**
     * 
     * @returns el nombre del SuperSimioProgramador
     */
    nombreSimio(){
        return this.simioNombre;
    }
    /**
     * 
     * @param {string} nombre del SuperSimioProgramador
     */
    simioTeLlamas(nombre){
        this.simioNombre = nombre;
    }

    /**
     * Teclado que va a usarse por cada
     * uno de los super simios.
     * @param {TecladoPc} unTeclado que es usado
     */
    programaCon(unTeclado){
        console.log(this.nombreSimio(),"usa el teclado",unTeclado.tecladoNombre());
        console.log("porque prefiere");
        unTeclado.cualidadTipeo();
    }
    
    /**
     * Este metodo muestra en consola una
     * interaccion entre el objeto albert
     * y el objeto gilbert segun dos estados
     * booleanos.
     */
    simiosInteractuando(){
        console.log("Gilbert le pide a Albert");
        console.log("que use otro teclado...");

        if(this.albertConAuriculares){
            console.log("Pero Albert no lo oye y")
            console.log("Gilbert le lanza su teclado.")
        }
        else{
            console.log("Albert responde: pues no hagas");
            console.log("la indentacion con espacios... ");
            console.log("y Gilbert le lanza su teclado.")
        }
    }
    conAuriculares(noOye){
        this.albertConAuriculares = noOye;
    }

}

module.exports = SuperSimioProgramador;
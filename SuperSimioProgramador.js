
class SuperSimioProgramador{

    //Estado/caracteristica/campo
    simioNombre = "por def";
    albertNoOye = true;
    gilbertNoOye = false;
    
   
    
    simioTeLlamas(nombre){
        this.simioNombre = nombre;
        
    }

    quitarAuriculares(unSuperSimio){
        unSuperSimio.simioSePregunta();
    }
    
    simioSePregunta(){
        console.log("\n¿" + this.simioNombre +  " me quitó los auriculares?");  
    }
    
    albertTenesAuri(){
        if (!this.albertNoOye) {   
            console.log("si >:(");
        }
        else{
            console.log("no <:)");  
        }   
    }

    gilbertTenesAuri(){
        if (!this.gilbertNoOye) {   
            console.log("si >:(");
        }
        else{
            console.log("no <:D");
        }
    }
}

module.exports = SuperSimioProgramador;
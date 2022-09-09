
//Defino la clase
class TecladoPc {

    //Estado/caracteristica/campo
    nombre = "por def";
    tecnologia = "por def"
    sistemaTeclas = true;
    
    //Comportmiento/metodo
    /**
     * Funcion que devuelve dos strigs
     * segun dos estados booleanos: TRUE o FALSE.
     */
    cualidadTipeo() {
        if (this.sistemaTeclas) {
            console.log("una mayor velocidad de respuesta.");
        }
        else {
            console.log("un tipeo mas silencioso.");
        }
    }
    sistemaMecanico(tipeo) {
        this.sistemaTeclas = tipeo;
    }

    /**
     * Pido el nombre de TecladoPc.
     * @returns el nombre.
     */
    tecladoNombre() {
        return this.nombre;
    }
    tuNombreEs(nombre) {
        this.nombre = nombre;
    }
}

//exporta la definicion de la clase TecladoPc.
module.exports = TecladoPc;
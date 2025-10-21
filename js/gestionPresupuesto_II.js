// Variables globales
let presupuesto = 0,
    gastos = [],
    idGasto = 0;


function actualizarPresupuesto(pres) {
    if (pres >= 0) {
        presupuesto = pres;
        return pres;
    } else {
        return -1;
    }
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {

    // Métodos

    this.mostrarGasto = function() {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;
    }

    this.actualizarDescripcion = function(desc) {
        this.descripcion = desc;
    }

    this.actualizarValor = function(valor) {
        this.valor = (valor >=0) ? valor : this.valor;
    }

    this.mostrarGastoCompleto = function() {

        let texto;
    
        let fechaLocal = new Date(this.fecha).toLocaleString();

        texto = "Gasto correspondiente a " + this.descripcion + " con valor " + this.valor + " €.\n";
        
        texto += "Fecha: " + fechaLocal + "\n";

        if ( this.etiquetas.length > 0 ) {
        
            texto += "Etiquetas:\n";

            for (let etiqueta of this.etiquetas)
                texto += "- " + etiqueta + "\n";
        }
        
        return texto;
    }

    this.actualizarFecha = function(fecha) {
        let f = Date.parse(fecha);
        if (f) {
            this.fecha = f;
        }
    }

    this.anyadirEtiquetas = function(...etqs) {
        for (let e of etqs) {
	    if (this.etiquetas.indexOf(e) == -1) {
		this.etiquetas.push(e);
	    }
        }
    }

    this.borrarEtiquetas = function(...etqs) {
        let newetiquetas = [];

        for (let e of this.etiquetas) {
	    if (etqs.indexOf(e) == -1) {
                newetiquetas.push(e);
	    }
        }

        this.etiquetas = newetiquetas;
    }

    // Propiedades
    this.descripcion = descripcion;
    this.valor = (valor >=0) ? valor : 0;
    let f = Date.parse(fecha);
    if (f) {
        this.fecha = f;
    } else {
        this.fecha = Date.parse(new Date());
    }

    this.etiquetas = [];
    this.anyadirEtiquetas(...etiquetas);
}

function listarGastos() {
    return gastos;
}

function anyadirGasto(gasto) {
    gasto.id = idGasto++;
    gastos.push(gasto);
}

function borrarGasto(idGasto) {
    let gasto = null;
    for (let g of gastos) {
	if (g.id == idGasto) {
	    gasto = g;
	}
    }
    if (gasto) {
        let posGasto = gastos.indexOf(gasto);
        gastos.splice(posGasto, 1);
    }
}

function calcularTotalGastos() {
    let total = 0;
    for (let g of gastos) {
        total += g.valor;
    }
    return total;
}

function calcularBalance() {
    return presupuesto - calcularTotalGastos();
}

export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
}

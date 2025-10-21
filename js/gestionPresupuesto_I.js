// Variables globales

let presupuesto = 0;

// Funciones

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

    // Propiedades
    this.descripcion = descripcion;
    this.valor = (valor >=0) ? valor : 0;
}

export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}

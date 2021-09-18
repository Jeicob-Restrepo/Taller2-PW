class Pantalla{
    constructor(Pvaloranterior, Pvalornuevo){
        this.Pvaloranterior = Pvaloranterior;
        this.Pvalornuevo = Pvalornuevo;
        this.calculadora = new Operaciones();
        this.valoranterior = "";
        this.valornuevo = "";
        this.Operacion = undefined;
        this.signos = {
            suma: '+',
            resta: '-',
            multiplicacion: '*',
            division: '/',
        }
    }
    nuevoNumero(n1){
        if(n1 === '.' && this.valornuevo.includes('.')){
            return
        }
        else{
            this.valornuevo += n1.toString();
            this.pintarPantalla();
        }
    }
    pintarPantalla(){
        this.Pvaloranterior.textContent = this.valoranterior;
        this.Pvalornuevo.textContent = `${this.valornuevo} ${this.signos[this.Operacion]  || "" }`;
    }

    borrarValores(){
        this.valornuevo = this.valornuevo.toString().slice(0,-1);
        this.pintarPantalla();
    }

    limpiarPantalla(){
        this.valornuevo = "";
        this.valoranterior = "";
        this.Operacion = undefined;
        this.pintarPantalla();
    }

    calcular(){
        const valornuevo = parseFloat(this.valornuevo);
        const valoranterior = parseFloat(this.valoranterior);
        if(isNaN(valornuevo) || isNaN(valoranterior)){
            return
        }
        else{
            this.valoranterior = this.calculadora[this.Operacion](valoranterior,valornuevo);
        }
    }

    asignar(op){
        this.Operacion !== 'igual' && this.calcular();
        this.Operacion = op;
        this.valoranterior = this.valoranterior || this.valornuevo;
        this.valornuevo = "";
        this.pintarPantalla();
    }
}
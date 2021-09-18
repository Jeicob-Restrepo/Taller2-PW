class Pantalla{
    constructor(Pvaloranterior, Pvalornuevo){
        this.Pvaloranterior = Pvaloranterior;
        this.Pvalornuevo = Pvalornuevo;
        this.valoranterior = "";
        this.valornuevo = "";
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
        this.Pvalornuevo.textContent = this.valornuevo;
    }

    borrarValores(){
        this.valornuevo = this.valornuevo.toString().slice(0,-1);
        this.pintarPantalla();
    }

    limpiarPantalla(){
        this.valornuevo = "";
        this.valoranterior = "";
        this.pintarPantalla();
    }

    Calcular(){
        try {
            this.valoranterior = eval(this.valornuevo);
            this.pintarPantalla();
        } catch (error) {
            this.valornuevo = 'Error';
            this.valornuevo = '';
            this.pintarPantalla();
        }
    }
}
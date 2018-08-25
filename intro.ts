//Interface una forma de obligar a que algo cumpla con ciertas caracteristicas o metodos

interface IVehiculo{

    encender(): void;

}

class SuperCarro{
    protected nombre: string;
    constructor(n: string)
    {
        this.nombre = n;
    }
}
class Carro extends SuperCarro implements IVehiculo {
//tipo string, public indica que la variable se puede acceder fuera de la clase
public n: string;
//tipo booleano, private indica que no se puede acceder fuera de la clase
private _b: boolean;
//tipo número, protected indica que se puede acceder en clases que se heredan
protected f: number;
// static indica que es un atributo que le pertenece a la clase
static a: number;
// tipo arreglo
arreglo: Array<number>
marca: string;
// any -para guardar json
t: any;

encender(): void{
    console.log('...');
}
constructor(a: number, b: string, c: boolean) {
    super('nnn');
    this.n = b;
//dos tipos de variables: constantes y de scope local
    const y = 5;
    let x;

    for(let i = 0; i < 5; i++){

    }
    this.metodo3(()  =>{
        this.n;
    console.log('esto es un callback')
});

}
get b(): boolean {
    return this._b;
}

set b(value: boolean) {
    this._b = value;
}

public metodo1(params: any): number {
    return 1;

}
static metodo2(params: any) {
return 'm';
}

public metodo3(f: Function): void{
    
}
}

class triangulo {
    altura: number;
    base: number;

    constructor(pAltura: number, pBase: number) {
        this.base = pBase;
        this.altura = pAltura;
    }
    
    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

const tria1 = new triangulo(5, 10);

console.log(`ai ó a area ${tria1.calcularArea()}`)
export class Producto {
    _id?: number;
    nombre?: string | null;
    categoria?: string | null;
    ubicacion?: string | null;
    precio?: string | null;

    constructor(categoria: string, nombre: string, ubicacion: string, precio: string) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;
    }
}
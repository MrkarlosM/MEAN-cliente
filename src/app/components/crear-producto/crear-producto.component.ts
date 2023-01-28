import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../models/producto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  //Formularios
  titulo = "Crear producto";
  id: string | null;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _productoService: ProductoService,
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  productForm = this.fb.group({
    producto: ['', Validators.required],
    ubicacion: ['', Validators.required],
    precio: ['', Validators.required],
  });

  ngOnInit(): void {
    this.esEditar()
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.productForm.value);
    const PRODUCTO: Producto = {
      nombre: this.productForm.get('producto')?.value,
      ubicacion: this.productForm.get('ubicacion')?.value,
      precio: this.productForm.get('precio')?.value,
    }


    if (this.id !== null) {
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {
        this.toastr.info("El producto ha sido actualizado con éxito", "Actualizado")
        this.router.navigate(['/lists-producto']);
      })
    } else {
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
        console.log(PRODUCTO)
        this.toastr.success("El producto ha sido creado con éxito", "Éxito")
        this.router.navigate(['/lists-producto']);
      });
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = "Editar producto";
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productForm.patchValue({
          producto: data.nombre,
          ubicacion: data.ubicacion,
          precio: data.precio
        })
      })
    }
  }

}

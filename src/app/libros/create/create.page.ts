import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  titulo: any;
  ano_publicacion: any;
  editorial: any;
  cantidad: any;


  libros: any = [];
  constructor(private service: LibrosService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.service.getAll().subscribe(
      (data) => {
        console.log("SUCESSS====", data)
        this.libros = data
      }
      , (error) => {
        console.log("Error====", error)
      });
  }

  registrar() {
    let data = {
      titulo: this.titulo,
      ano_publicacion: this.ano_publicacion,
      editorial: this.editorial,
      cantidad: this.cantidad
    }

    this.service.create(data).subscribe((res: any) => {
      console.log("Success====", data);
      this.titulo = "";
      this.ano_publicacion = "";
      this.editorial = "";
      this.cantidad = "";
      this.getAll();
    }, (error: any) => {
      console.log("Error====", error)
    })
  }

  borrar(id: number) {
    this.service.delete(id).subscribe((res: any) => {
      console.log("BORRADO======", res);
      this.getAll();
    }, (error) => {
      console.log("ERROR======", error);
    }
    )
  }


}

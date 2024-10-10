import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibrosService } from 'src/app/servicios/libros.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  id:any;
  titulo: any;
  ano_publicacion: any;
  editorial: any;
  cantidad: any;

  constructor(
     private router:Router,
      private route:ActivatedRoute,
    private service:LibrosService) {
      this.route.params.subscribe((param:any)=>{
        this.id=param.id;
        this.service.find(this.id);
        console.log(this.id);

      })
    }

  ngOnInit() {
  }

  getLibro(id:any){
    this.service.find(id).subscribe((res:any)=>{
      console.log("suceess",res)
      let libro=res[0]
      this.id=libro.id;
      this.titulo=libro.titulo;
      this.ano_publicacion=libro.ano_publicacion;
      this.cantidad=libro.cantidad;
      this.editorial=libro.editorial;
    },(error)=>{
      console.log("error",error)
    })
  }

  actualizar(){

  }

}

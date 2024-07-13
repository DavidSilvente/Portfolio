import { Component } from '@angular/core';
import { CorreoService } from '../correo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contacto = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };
  mensajeEnviado = false;

  constructor(private correoService: CorreoService) { }

  enviarCorreo() {
    this.correoService.enviarCorreo(this.contacto).subscribe(
      response => {
        this.mensajeEnviado = true;
        this.contacto = { nombre: '', email: '', asunto: '', mensaje: '' };
      },
      error => {
        console.error('Error al enviar el correo:', error);
      }
    );
  }
}

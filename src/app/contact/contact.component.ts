import { Component } from '@angular/core';
import { CorreoService } from '../correo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacto = { nombre: '', email: '', asunto: '', mensaje: '' };
  mensajeEnviado: boolean = false;
  envioFallido: boolean = false;
  mensaje: string = '';
  mensajeTipo: 'success' | 'error' = 'success';

  constructor(private correoService: CorreoService) {}

  enviarCorreo(form: NgForm) {
    if (form.valid) {
      this.correoService.enviarCorreo(this.contacto).subscribe(
        response => {
          this.mensajeEnviado = true;
          this.envioFallido = false;
          this.mensaje = 'Tu mensaje ha sido enviado con éxito.';
          this.mensajeTipo = 'success';
          this.contacto = { nombre: '', email: '', asunto: '', mensaje: '' };
          form.resetForm();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        error => {
          console.error('Error al enviar el correo:', error);
          this.envioFallido = true;
          this.mensaje = 'Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.';
          this.mensajeTipo = 'error';
        }
      );
    }
  }

  closeSuccessMessage() {
    this.mensajeEnviado = false;
    this.envioFallido = false;
  }
}

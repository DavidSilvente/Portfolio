import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  private apiUrl = 'https://tu-api-de-correo.com/enviar'; // Reemplaza con tu URL real

  constructor(private http: HttpClient) { }

  enviarCorreo(contacto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contacto);
  }
}

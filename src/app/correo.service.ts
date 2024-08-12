import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  private apiUrl = '/api/enviar'; // Usamos la ruta relativa para la función serverless en Vercel

  constructor(private http: HttpClient) { }

  enviarCorreo(contacto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contacto);
  }
}

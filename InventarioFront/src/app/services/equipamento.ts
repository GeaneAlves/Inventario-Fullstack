import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  // O endereço da sua API (aquela que aparece no Swagger)
  private apiUrl = 'http://localhost:5028/api/Equipamento';

  // Injetamos o HttpClient (o carro) para poder usar
  constructor(private http: HttpClient) { }

  // Método que vai buscar a lista
  listar() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
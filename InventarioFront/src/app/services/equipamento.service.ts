import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Opcional, mas boa prática

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  // O endereço da sua API
  private apiUrl = 'http://localhost:5028/api/Equipamento';

  constructor(private http: HttpClient) { }

    // Método 1: Busca a lista de equipamentos
  listar() {
    return this.http.get<any[]>(this.apiUrl);
  }
  // --- NOVO: Método 2: Envia um novo item ---
  cadastrar(item: any) {
    return this.http.post<any>(this.apiUrl, item);
  }

  // NOVO: Método para editar
  editar(item: any) {
    return this.http.put<any>(`${this.apiUrl}/${item.id}`, item);
  }
  
  // --- NOVO: Método para apagar ---
  // Ele precisa receber o ID para saber QUAL apagar
  excluir(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}